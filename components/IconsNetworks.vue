<script setup>
defineProps(["p","px","text"])
const networks = [
  {
    icon: 'github',
    link: 'https://github.com/StrohXl'
  },
  {
    icon: 'whatsapp',
    link: 'https://api.whatsapp.com/send?phone=+5804126947694&text=Hola'
  },
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/xavier-mayora-083874255/'
  },
  {
    icon: 'gmail',
    link: 'mailto:xaviermayora20@gmail.com?subject=Developer Full Stack&body=Hola'
  }

]
</script>
<template>
  <div class="flex justify-center mt-8 gap-5">
    <a
      v-for="item in networks"
      :key="item.icon"
      :class="`border-1 p-[8px] rounded-full px-[10px] hover:border-primary hover:shadow-lg hover:shadow-primary/50`"
      target="_blank"
      :href="item.link"
    >
      <Icon filled :name="item.icon" :class="`grayscale ${text}`" />
    </a>

  </div>
</template>
