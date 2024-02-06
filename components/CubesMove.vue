<template>
  <div
    id="cube-move"
    class="absolute overflow-hidden w-full h-full z-0 grid md:grid-cols-[8rem,8rem,8rem] md:grid-rows-[8rem,8rem,8rem] grid-cols-[6rem,6rem,6rem] grid-rows-[6rem,6rem,6rem] top-[63px] md:top-[68px]"
  >
    <div class="w-24 h-24 md:w-32 md:h-32 border-1 border-primary/40"></div>
    <div class="w-24 h-24 md:w-32 md:h-32 border-1 border-primary/40"></div>
    <div class="w-24 h-24 md:w-32 md:h-32 border-1 border-primary/40"></div>
    <div class="w-24 h-24 md:w-32 md:h-32 border-1 border-primary/40"></div>
    <div class="w-24 h-24 md:w-32 md:h-32 border-1 border-primary/40"></div>
    <div class="w-24 h-24 md:w-32 md:h-32 border-1 border-primary/40 row-start-3"></div>
  </div>
</template>
<style>
@keyframes cube3 {
  0% {
    transform: translateX(0%);
  }
  25% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(100%) rotate(90deg);
  }
  75% {
    transform: translateX(0%) rotate(90deg);
  }
  100% {
    transform: translateX(0%) rotate(90deg);
  }


}
@keyframes cube5 {
  0% {
    transform: translateX(0%);
  }
  25% {
    transform: translateX(100%);
  }
  50% {
    transform: translateY(100%) translateX(100%);
  }
  75% {
    transform: translateY(0%) translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }


}
@keyframes cube6 {
  0% {
    transform: translateY(0%);
  }
  25% {
    transform: translateY(100%);
  }
  50% {
    transform: translateY(100%) rotate(-90deg);
  }
  75% {
    transform: translateY(0%) rotate(-90deg);
  }
  100% {
    transform: translateY(0%) rotate(-90deg);
  }


}
#cube-move > div:nth-child(3) {
  animation: cube3 9s infinite;
}
#cube-move > div:nth-child(5) {
  animation: cube5 9s infinite;
}
#cube-move > div:nth-child(6) {
  animation: cube6 9s infinite;
}
</style>
