<script lang="ts" setup>
import { onMounted } from 'vue';

const handleOnDragend = (e: any) => {
  console.log('mouseup', e);
};
onMounted(() => {
  document
    .getElementById('tmagicEditorSelfDroppable')
    ?.addEventListener('dragend', (e) => {
      console.log('e', e);
    });
});
</script>
<template>
  <div
    id="tmagicEditorSelfDroppable"
    class="editorMiddleWrapper"
    @dragover="handleOnDragend"
  >
    middle
  </div>
</template>
<style lang="less">
.editorMiddleWrapper {
  flex: 1;
}
</style>
