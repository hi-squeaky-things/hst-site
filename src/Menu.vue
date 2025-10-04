<template>
  <nav class="">
    <div class="flex">
      <div class="flex-shrink-0 flex items-center">
        <img src="@/assets/logo/logo.svg" alt="Logo" class="h-10 w-10 mr-2" style="filter: invert()" />

        <router-link to="/">
          <span class="text-m font-bold rounded-lg bg-purple-200 p-2">Hi Squeaky Things</span>
        </router-link>
        <router-link to="/research">
          <span class="text-m font-bold rounded-lg bg-purple-300 ml-3 p-2 underline decoration-dotted">Research</span>
        </router-link>
        <router-link to="/product">
          <span class="text-m font-bold rounded-lg bg-purple-300 ml-3 p-2 underline decoration-dotted">Product</span>
        </router-link>
        <router-link to="/music">

          <span class="text-m font-bold rounded-lg bg-purple-300 ml-3 p-2 underline decoration-dotted">
            Music</span>
        </router-link>

      </div>
      <!-- Menu items (hidden on small screens, visible on medium and larger) -->
      <div class="flex items-right align-right">

        <!--        <Menubar :model="items">
              <template #item="{ item }">
                <router-link :to="item.to">{{ item.label }}</router-link>
              </template>
</Menubar>-->
      </div>
    </div>
  </nav>
</template>


<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  {
    label: "Instruments",
    icon: "pi pi-fw pi-file",
    to: "/instruments",
  },
  {
    label: "Music",
    icon: "pi pi-fw pi-file",
    to: "/music",
  },
  {
    label: "Research & Development",
    icon: "pi pi-fw pi-file",
    to: "/research_and_development",
  }
]);
</script>
