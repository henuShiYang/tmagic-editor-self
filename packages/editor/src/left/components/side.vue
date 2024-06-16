<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { TabsPaneContext } from 'element-plus';
import { ElTabs, ElTabPane } from 'element-plus';
import {
  Handbag,
  Tickets,
  EditPen,
  Folder,
  SwitchButton,
} from '@element-plus/icons-vue';

const componentList = reactive<any[]>([]);
const activeName = ref('first');
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
const getComponentList = async () => {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      componentList.push(
        ...[{ name: '按钮', type: 'button', icon: SwitchButton }]
      );
    }, 200);
  });
  // console.log('res')
};
getComponentList();
</script>
<template>
  <div class="sideWrapper">
    <ElTabs
      v-model="activeName"
      tab-position="left"
      @tab-click="handleClick"
    >
      <ElTabPane name="components">
        <template #label>
          <div class="label">
            <Handbag />
            组件
          </div>
        </template>
        <div v-for="item in componentList">
          <div class="sildContent">
            <span>{{ item.name }}</span>
            <component :is="item.icon"></component>
          </div>
        </div>
      </ElTabPane>
      <ElTabPane name="selectComponent">
        <template #label>
          <div class="label">
            <Tickets />
            已选组件
          </div>
        </template>
      </ElTabPane>
      <ElTabPane name="codeEdit">
        <template #label>
          <div class="label">
            <EditPen />
            代码编辑
          </div>
        </template>

        Role</ElTabPane
      >
      <ElTabPane name="dataSource">
        <template #label>
          <div class="label">
            <Folder />
            数据源
          </div>
        </template>
      </ElTabPane>
    </ElTabs>
  </div>
</template>

<style lang="less" scoped>
.sideWrapper {
  /deep/.el-tabs__item {
    padding: 8px;
    height: 58px;
    padding: 10px 10px !important;
    display: flex;
    min-height: 40px;
    height: auto !important;
    justify-content: center !important;
  }
  .label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 8px;
    svg {
      width: 25px;
    }
  }
  .sildContent {
    background-color: red;
    svg {
      width: 20px;
    }
  }
}
</style>
