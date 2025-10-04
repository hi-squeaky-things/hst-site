<template>

  <div class="bg-gray-50 fixed top w-full z-10 p-4">
    <Menu></Menu>
  </div>
  
  <div class="flex-grow mt-20 p-4">
    <router-view></router-view>
  </div>
  <footer class="bg-red-500 text-white p-4 mt-auto text-xs">
    <p>&copy; 2025 ⚡ Hi Squeaky Things Labs ⚡ All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
import Menu from './Menu.vue';
</script>
