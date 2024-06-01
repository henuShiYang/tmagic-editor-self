<script setup lang="ts">
// import { defineAsyncComponent } from 'vue';
import { defineAsyncComponent } from 'vue';

const AysncRemoteButton = defineAsyncComponent(
  () => import('remote-v2/button')
);
const Image = defineAsyncComponent(() => import('remote-v2/image'));
</script>

<template>
  <AysncRemoteButton />
  <Image />
</template>

<style scoped></style>
