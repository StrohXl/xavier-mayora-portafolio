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
    class="max-w-5xl 2xl:max-w-6xl py-3 relative lg:mx-auto z-20 md:py-4 px-7 backdrop-blur-sm flex justify-between items-center"
  >
    <h2
      class="font-extrabold !text-2xl md:!text-3xl "
      @click="components.changeOpenDrawer(false)"
    >
      <NuxtLink class="flex" to="/" @click="moveScroll('Hero')">
        Porta
        <span class="text-primary dark:text-primary">folio</span>
      </NuxtLink>
    </h2>
    <ul class="gap-4 lg:gap-5 hidden md:flex">
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
        >
          {{ i.title }}
        </NuxtLink>
      </li>
      <li>
        <SwitchMode class="ml-3" />
      </li>
    </ul>
    <div class="grid grid-cols-2 gap-2 items-center md:hidden translate-x-8">
      <SwitchMode class="" />
      <ButtonsButtonIcon
        v-if="!components.openDrawer"
        name="menu"
        @click.stop="components.changeOpenDrawer(!components.openDrawer)"
      />
      <ButtonsButtonIcon
        v-if="components.openDrawer"
        name="close"
        @click="components.changeOpenDrawer(!components.openDrawer)"
      />
    </div>
    <ButtonsButton
      @click="moveScroll('Contact')"
      type="contained"
      class="hidden lg:flex"
    >
    Contáctame
    </ButtonsButton>
  </nav>
  <Drawer />
</template>
<style>
svg {
  margin: 2px 0 !important;
}
</style>
