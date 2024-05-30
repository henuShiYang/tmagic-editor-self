<script lang="ts" setup>
import { Button } from "vant";
import defaultValue from "./default-value";
import { defineComponent } from "vue";
defineComponent({ name: "Button" });
</script>
<template>
  <Button :style="defaultValue.style">{{ defaultValue.text }}</Button>
</template>
<style lang="less"></style>
