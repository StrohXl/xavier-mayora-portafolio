<template>
  <section id="Contact">
    <div class="pb-20 2xl:pb-32">
      <h2 class="text-center text-3xl">Contáctame</h2>
      <p class="text-center mt-10 font-semibold">
        Puedes comunicarte conmigo atravez de mis redes
      </p>
      <div class="flex justify-center mt-8 gap-5">
        <a class="border-1 p-[14px] rounded-full px-[16px] hover:border-primary hover:shadow-lg hover:shadow-primary/50" target="_blank" href="https://github.com/StrohXl">
          <Icon name="github" class="grayscale !text-2xl hover:filter-none" />
        </a>
        <a
          class="border-1 p-[14px] rounded-full px-[16px] hover:border-primary hover:shadow-lg hover:shadow-primary/50"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=+5804126947694&text=Hola"
        >
          <Icon name="whatsapp" class="grayscale !text-2xl" filled />
        </a>
        <a
          class="border-1 p-[14px] rounded-full px-[16px] hover:border-primary hover:shadow-lg hover:shadow-primary/50"
          target="_blank"
          href="https://www.linkedin.com/in/xavier-mayora-083874255/"
        >
          <Icon filled name="linkedin" class="grayscale !text-2xl" />
        </a>
        <a
          class="border-1 p-[14px] rounded-full px-[16px] hover:border-primary hover:shadow-lg hover:shadow-primary/50"
          target="_blank"
          href="mailto:xaviermayora20@gmail.com?subject=Developer Full Stack&body=Hola"
        >
          <Icon filled name="gmail" class="grayscale !text-2xl" />
        </a>
      </div>
      <div class="flex justify-center mt-10">
     <NuxtLink to="/cv">
         <ButtonsButton type="outlined">Ver curriculum</ButtonsButton>
     </NuxtLink>
      </div>
    </div>
  </section>
</template>
