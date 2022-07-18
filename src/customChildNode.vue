<script lang="ts" setup>
import { Handle, Position, NodeProps } from '@braks/vue-flow';
import eventBus from './event-bus.js';

interface CustomChildNodeProps extends NodeProps {
  data: {
    parentID: Number,
    yValue: Number,
  };
}

const props = defineProps<CustomChildNodeProps>();


eventBus.on(`updateYValue-${props.data.parentID}`, (newY) => {
  props.data.yValue = newY;
  console.log(`y value updated for next node in child` + props.data.yValue);
})

</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div>Child Node
  <div class="custom-event-btn" @click="eventBus.emit('nodeEvent');">Event Trigger</div>
  <div class="custom-event-btn" @click="eventBus.emit('nodeEvent2', props.data.yValue, props.data.parentID);">Event Trigger 2</div>
  <Handle type="source" :position="Position.Right" />
  </div>
</template>

<style>

.vue-flow__node-customchild{
    padding: 10px;
    border-radius: 3px;
    width: 150px;
    font-size: 12px;
    color: var(--vf-node-text);
    text-align: center;
    border-width: 1px;
    border-style: solid;
    background: #a3b6c8;
    border-color: var(--vf-node-color);
  
}

.custom-event-btn{
  background-color:#e9e9e9;
  padding:3px;
  border-radius:10px;
  margin-top:5px;
  border:solid 1px #000000;
}

.custom-event-btn:hover{
  background-color:#e2e2e2;
  border:solid 1px #acacac;

}



</style>
