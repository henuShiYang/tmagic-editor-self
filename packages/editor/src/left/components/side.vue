<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from 'element-plus';
import { ElTabs, ElTabPane } from 'element-plus';
import { Handbag } from '@element-plus/icons-vue';

const activeName = ref('first');
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<template>
  <ElTabs v-model="activeName" tab-position="left" @tab-click="handleClick">
    <ElTabPane name="components">
      <template #label>
        <div class="label">
          <Handbag />
          组件
        </div>
      </template>
      <Handbag />
    </ElTabPane>
    <ElTabPane label="已选组件" name="selectComponent">Config</ElTabPane>
    <ElTabPane label="代码编辑" name="codeEdit">Role</ElTabPane>
    <ElTabPane label="数据源" name="dataSource">Task</ElTabPane>
  </ElTabs>
</template>

<style lang="less">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.el-tabs__item {
  padding: 8px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  .label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 8px;
    svg {
      width: 25px;
      // height: 16px;
    }
  }
}
</style>
