<script lang="ts" setup>
import ListItemNav from "../../data/listItemNav";
const components = useOpenComponents();
const route = ref(useRoute());
onMounted(() => {
  if (route.value.query.position) {
    const position = route.value.query.position;
    moveScroll(`${position}`);
  }
});
</script>
<template>
  <nav
    class="py-3 relative z-20 md:py-5 pl-7 md:pr-7 backdrop-blur-sm flex justify-between lg:justify-around items-center"
  >
    <h2 class="font-extrabold text-2xl">
      <NuxtLink class="flex" to="/?position=inicio">
        Porta
        <span class="text-primary dark:text-primary">folio</span>
      </NuxtLink>
    </h2>
    <ul class="gap-2 hidden md:flex">
      <li
        :class="
          route.query.position == i.position &&
          'text-primary dark:text-primaryDark '
        "
        class="flex items-center font-semibold hover:text-primaryDark hover:dark:text-primary"
        v-for="i in ListItemNav"
        v-bind:key="i.id"
      >
        <NuxtLink
          class="flex gap-1 items-center"
          :to="`/?position=${i.id}`"
          @click="moveScroll(i.id)"
          v-if="!i.subMenu"
        >
          <Icon v-if="i.icon != '' && !i.subMenu" :name="i.icon" />
          {{ i.title }}
        </NuxtLink>
        <MenusMenuProjects v-if="i.subMenu" />
      </li>
      <li>
        <SwitchMode class="ml-3" />
      </li>
    </ul>
    <div class="grid grid-cols-2 gap-2 items-center md:hidden">
      <SwitchMode class="" />
      <ButtonsButtonIcon
        v-if="!components.openDrawer"
        name="menu"
        @click="components.changeOpenDrawer(!components.openDrawer)"
      />
      <ButtonsButtonIcon
        v-if="components.openDrawer"
        name="close"
        @click="components.changeOpenDrawer(!components.openDrawer)"
      />
    </div>
    <ButtonsButton type="outlined" class="hidden lg:flex">
      Contactame
    </ButtonsButton>
  </nav>
  <Drawer />
</template>
<style>
svg {
  margin: 2px 0 !important;
}
</style>
