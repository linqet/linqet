<script lang="ts" setup>
import { ELEMENT_PLUS_LINK } from '@/constants/element-plus';
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="#1239ec" />
  <ElConfigProvider :link="ELEMENT_PLUS_LINK">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ElConfigProvider>
</template>

<style>
@import url('@/styles/element-plus.css');
</style>
