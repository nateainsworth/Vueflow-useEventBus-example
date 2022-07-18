<script setup lang="ts">
import { VueFlow, useVueFlow } from '@braks/vue-flow';
import { computed, markRaw, ref } from 'vue';
import useStore from './store.js';
import CustomNode from './customnode.vue';


const nodeTypes = {
  custom: markRaw(CustomNode),
}



const elements = ref([
  {
    id: '1',
    label: 'Node 1',
    type: 'custom',
  },
  {
    id: '1',
    label: 'Node 1',
    type: 'input',
  }
])

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
  v-model="store.elements"
 :node-types="nodeTypes"
  >
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
</style>
