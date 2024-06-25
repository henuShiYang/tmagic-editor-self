<script lang="ts" setup>
import Left from './left/index.vue';
import Middle from './middle/index.vue';
import Right from './right/index.vue';
import Header from './header/index.vue';
</script>
<template>
  <div class="editorWrapper">
    <Header />
    <div class="editorContent">
      <Left />
      <Middle />
      <Right />
    </div>
  </div>
</template>
<style lang="less">
.editorWrapper {
  height: 100%;
  .editorContent {
    height: calc(100% - 20px);
    display: flex;
  }
}
</style>
