<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const Button = defineAsyncComponent(
  () =>
    import(
      "http://low-code-ui.oss-cn-beijing.aliyuncs.com/custome-vant/button/index.vue"
    )
);
</script>

<template>
  <Button />
  <div>2323232</div>
</template>

<style scoped></style>
