<script lang="ts" setup>
import { handleAddComponent, componentList } from '../utils/component-list';
</script>
<template>
  <div class="editorMiddleWrapper">
    <div
      id="editDropWrapperId"
      class="editDropWrapper"
      @dragover.prevent
      @drop="handleAddComponent({ e: $event, dropDomId: 'editDropWrapperId' })"
    >
      <template v-for="component in componentList">
        <component
          :style="component.style"
          :is="component.component"
        ></component>
      </template>
    </div>
  </div>
</template>
<style lang="less" scoped>
.editorMiddleWrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  overflow: auto;
  .editDropWrapper {
    position: relative;
    height: 800px;
    width: 375px;
    background-color: skyblue;
  }
}
</style>
