<script lang="ts" setup>
const openMenu: Ref<boolean> = ref(false);
defineProps(["title", "endIcon", "startIcon"]);
const mouseEnterMenu = () => {
  openMenu.value = true;
};
const mouseEnterLeave = () => {
  openMenu.value = false;
};

onMounted(() => {
  const liMenuProjects = document.getElementById("li-menu-projects");
  const MenuProjects = document.getElementById("li-menu-projects");
  if (MenuProjects) {
    MenuProjects.addEventListener("mouseenter", mouseEnterMenu);
    MenuProjects.addEventListener("mouseleave", mouseEnterLeave);
  }
  if (liMenuProjects) {
    liMenuProjects.addEventListener("mouseenter", mouseEnterMenu);
    liMenuProjects.addEventListener("mouseleave", mouseEnterLeave);
  }
});
</script>
<template>
  <div id="li-menu-projects" class="relative">
    <div class="cursor-pointer flex gap-1">
      <Icon
        v-if="startIcon"
        class="transition-transform duration-300"
        :class="openMenu && 'rotate-180'"
        :name="startIcon"
      />
      {{ title }}
      <Icon
        v-if="endIcon"
        class="transition-transform duration-300"
        :class="openMenu && 'rotate-180'"
        :name="endIcon"
      />
    </div>
    <div
      id="menu-projects"
      style="left: 50%; transform: translateX(-50%)"
      v-if="openMenu"
      class="absolute py-2 top-4"
    >
      <div
        class="rounded-md dark:text-white text-black py-1 mt-4 border-1 border-gray-700 dark:bg-gray-800 bg-white"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
