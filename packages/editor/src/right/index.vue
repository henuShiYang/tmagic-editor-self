<script lang="ts" setup>
import { ElTabs, ElTabPane } from 'element-plus';
import PubSub from 'pubsub-js';
PubSub.subscribe('selectComponent', (_, { componentId }) => {
  console.log('componentId', componentId);
});
</script>
<template>
  <div class="editRightWrapper">
    <ElTabs class="demo-tabs">
      <ElTabPane label="属性" name="property">属性</ElTabPane>
      <ElTabPane label="样式" name="style">样式</ElTabPane>
      <ElTabPane label="事件" name="event">事件</ElTabPane>
      <ElTabPane label="高级" name="advanced">高级</ElTabPane>
      <ElTabPane label="显示条件" name="displayCondition">显示条件</ElTabPane>
    </ElTabs>
  </div>
</template>
<style lang="less">
.editRightWrapper {
  width: 400px;
}
</style>
