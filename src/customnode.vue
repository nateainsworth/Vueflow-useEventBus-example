<script lang="ts" setup>
import { Handle, Position, NodeProps } from '@braks/vue-flow';

interface CustomNodeNodeProps extends NodeProps {
  data: {
    parentID: Number,
  };

}
const props = defineProps<CustomNodeNodeProps>();

// {{props.data.parentID}}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div>Custom Node
  <div class="custom-event-btn">Event Trigger</div>
  <Handle type="source" :position="Position.Right" />
  </div>
</template>

<style>

.vue-flow__node-custom{
    padding: 10px;
    border-radius: 3px;
    width: 150px;
    font-size: 12px;
    color: var(--vf-node-text);
    text-align: center;
    border-width: 1px;
    border-style: solid;
    background: var(--vf-node-bg);
    border-color: var(--vf-node-color);
  
}

.custom-event-btn{
  background-color:#e6e6e6;
  padding:3px;
  border-radius:10px;
  margin-top:5px;
}




</style>
