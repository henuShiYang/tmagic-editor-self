<script lang="ts" setup>
import { ref, reactive, watch } from 'vue';
import type { TabsPaneContext } from 'element-plus';
import { ElTabs, ElTabPane } from 'element-plus';
import {
  Handbag,
  Tickets,
  EditPen,
  Folder,
  SwitchButton,
} from '@element-plus/icons-vue';

const dataSource = reactive<any>({
  componentList: [],
});
const activeName = ref('components');
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
const getComponentList = async () => {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      dataSource.componentList.push(
        ...[{ name: '按钮', type: 'button', icon: SwitchButton }]
      );
    }, 200);
  });
};

getComponentList();

watch(
  () => dataSource.componentList,
  () => {
    console.log(dataSource);
  },
  {
    immediate: true,
    deep: true,
  }
);

const handleDropstart = (e: DragEvent, type: string) => {
  e.dataTransfer?.setData('text/json', type);
};
</script>
<template>
  <div class="sideWrapper">
    <ElTabs v-model="activeName" tab-position="left" @tab-click="handleClick">
      <ElTabPane name="components">
        <template #label>
          <div class="label">
            <Handbag />
            组件
          </div>
        </template>
        <div v-for="item in dataSource.componentList">
          <div
            class="sildContent"
            draggable="true"
            @dragover.prevent
            @dragstart="handleDropstart($event, item.type)"
          >
            <div class="iconWrapper">
              <component :is="item.icon"></component>
            </div>
            <span>{{ item.name }}</span>
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
      </ElTabPane>
      <ElTabPane name="dataSource">
        <template #label>
          <div class="label">
            <Folder />
          </div>
        </template>
      </ElTabPane>
    </ElTabs>
  </div>
</template>

<style lang="less" scoped>
.sideWrapper {
  height: 100%;
  /deep/.el-tabs {
    height: 100%;
    .el-tabs__item {
      padding: 8px;
      height: 58px;
      padding: 10px 10px !important;
      display: flex;
      min-height: 40px;
      height: auto !important;
      justify-content: center !important;
    }
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
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    color: #313a40;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    width: 42px;
    &:hover {
      cursor: pointer;
    }
    .iconWrapper {
      // width: 100%;
      display: flex;
      padding: 8px;
      align-items: center;
      justify-content: center;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      // border: 1px solid red;
      svg {
        color: #909090;
        width: 20px;
      }
    }
  }
}
</style>
