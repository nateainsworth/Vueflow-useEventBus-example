<script lang="ts" setup>
import { Handle, Position, NodeProps } from '@braks/vue-flow';

interface CustomNodeNodeProps extends NodeProps {
  data: {
    parentID: Number;
  };

}
const props = defineProps<CustomNodeNodeProps>();


</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div>Node id: {{props.data.parentID}}</div>
  <div><input type="text" placeholder="example value"/><div>Send Value</div></div>

  <Handle type="source" :position="Position.Right" />
</template>

<style>

.vue-flow__node-opennode{
  border:none;
  padding: 10px 0px;
  text-align:left;
  
}

.vue-flow__node-opennode .openText{
  font-size: 9px;
}

.vue-flow__node-opennode .vue-flow__handle {
    background: #586e8a;
    /*border: 1px solid #586e8a;*/
    border: 2px solid #e8e8e8;
    right: -29px;
    width: 10px;
    height: 10px;
}



/*
background: #586e8a;
    border: 2px solid #e8e8e8;
    right: -29px;
    width: 10px;
    height: 10px;
}
*/

</style>
