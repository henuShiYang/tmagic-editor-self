<script lang="ts" setup>
import 'vant/lib/index.css';
import { Button } from 'vant';
import defaultValue from './default-value';
</script>
<template>
  <div @click="defaultValue.onclick">
    <Button>{{ defaultValue.text }}</Button>
  </div>
</template>
<style scoped lang="less">
div {
  background-color: red;
}
</style>
