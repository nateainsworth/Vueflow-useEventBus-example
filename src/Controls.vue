<script setup>
import { useVueFlow } from '@braks/vue-flow'
import eventBus from './event-bus.js';


eventBus.on('nodeEvent', () => {
  console.log(`A Node triggered an event in Controls.vue`);
})

eventBus.on('nodeEvent2', (nextY, parentid) => {
  console.log(`event trigger 2 added another node in Controls.vue data passed:` + parentid);
  onAdd2(parentid,nextY);
})


const flowKey = 'example-flow'

const { nodes, addNodes, setNodes, setEdges, dimensions, setTransform, toObject } = useVueFlow()

const onSave = () => {
  localStorage.setItem(flowKey, JSON.stringify(toObject()))
}

const onRestore = () => {
  const flow = JSON.parse(localStorage.getItem(flowKey))

  if (flow) {
    const [x = 0, y = 0] = flow.position
    setNodes(flow.nodes)
    setEdges(flow.edges)
    setTransform({ x, y, zoom: flow.zoom || 0 })
  }
}

var id = nodes.value.length;



function onAdd2 (parentID,nextY) {
  let newY = nextY + 100;
  id = nodes.value.length + 1
   const newChildNode = {
    id: `random_child_node-${id}`,
    label: `Node ${id}`,
    type: 'customchild',
    position: { x: 0, y: newY},
    extent: 'parent',
    parentNode: parentID,
    class: 'light',
    data: {parentID: parentID},
    expandParent: true,
    draggable: false,
  }
  eventBus.emit(`updateYValue-${parentID}`, newY)

  addNodes([newChildNode])
}

const onAdd = () => {
  id = nodes.value.length + 1
  const newNode = {
    id: `random_node-${id}`,
    label: `Node ${id}`,
    type: 'custom',
    label: 'parent',
    position: { x: Math.random() * dimensions.value.width, y: Math.random() * dimensions.value.height },
    class: 'light',
  }

   const newChildNode = {
    id: `random_child_node-${id}`,
    label: `Node ${id}`,
    type: 'customchild',
    position: { x: 0, y: 50},
    extent: 'parent',
    parentNode: `random_node-${id}`,
    class: 'light',
    data: {parentID : `random_node-${id}`,yValue:50 },
    expandParent: true,
    draggable: false,
  }

  addNodes([newNode,newChildNode])
}
</script>

<template>
  <div class="save__controls">
    <button style="margin-right:10px;" @click="onSave">save</button>
    <button style="margin-right:10px;" @click="onRestore">restore</button>
    <button style="background-color: rgb(60 225 126);" @click="onAdd">add node</button>
  </div>
</template>
