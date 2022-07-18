<script lang="ts" setup>
import { Handle, Position, NodeProps } from '@braks/vue-flow';
import eventBus from './event-bus.js';

//eventBus.emit('nodeEvent2', 'some args', par);

interface CustomNodeProps extends NodeProps {
  id: String;
}
const props = defineProps<CustomNodeProps>();

</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div>Custom Parent Node
  <Handle type="source" :position="Position.top" />

  </div>
</template>

<style>

.vue-flow__node-custom{
    padding: 10px;
    border-radius: 3px;
    width: 150px;
    height:200px;
    font-size: 12px;
    color: var(--vf-node-text);
    text-align: center;
    border-width: 1px;
    border-style: solid;
    background: var(--vf-node-bg);
    border-color: var(--vf-node-color);
    background: #e3edf6;
  
}




</style>
