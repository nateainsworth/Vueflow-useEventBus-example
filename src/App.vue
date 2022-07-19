<script setup lang="ts">
import { VueFlow, useVueFlow } from '@braks/vue-flow';
import { computed, markRaw } from 'vue';
import useStore from './store.js';
import CustomNode from './customNode.vue';
import CustomChildNode from './customChildNode.vue';
import Controls from './Controls.vue';
import eventBus from './event-bus.js';

/*
const nodeTypes = {
  custom: markRaw(CustomNode),
  customchild: markRaw(CustomChildNode),
}*/

eventBus.on('nodeEvent', () => {
  console.log(`A Node triggered an event in app.vue`);

})

const store = useStore();

const { onConnect, addEdges,nodes } = useVueFlow();

onConnect((params) => addEdges([params]));
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <VueFlow 
  v-model="store.elements">
    <template #node-custom="props" #node-customchild="props2">
      <CustomNode v-bind="props" />
    </template>
    <template #node-customchild="props">
      <CustomChildNode v-bind="props" />
    </template>
    <Controls class="vue-flow-controls" />
    <div style="position: absolute; right: 10px; top: 10px; z-index: 4">
      <button style="margin-right: 5px" @click="store.updatePosition">
        update positions
      </button>
      <button style="margin-right: 5px" @click="store.toggleClass">
        toggle class
      </button>
      <button @click="store.log">log store state</button>
    </div>
  </VueFlow>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.vue-flow-controls{
  position:absolute;
  top:10px;
  left:10px;
  z-index: 1000;
}
</style>

