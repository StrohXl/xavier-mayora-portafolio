<script lang="ts" setup>
import itemForms from "~/data/itemForms";
const data = ref({
  firstName: "",
  lastName: "",
  email: "",
  body: "",
});
const errors = ref({
  firstName: false,
  lastName: false,
  email: false,
  body: false,
});
const element = ref("");
function handleSubmit(event: any) {
  event.preventDefault();
  if (data.value.firstName == "") {
    errors.value.firstName = true;
  }
  if (data.value.lastName == "") {
    errors.value.lastName = true;
  }
  if (data.value.email == "") {
    errors.value.email = true;
  }
  if (data.value.body == "") {
    errors.value.body = true;
  }
  if (data.value.firstName != "") {
    errors.value.firstName = false;
  }
  if (data.value.lastName != "") {
    errors.value.lastName = false;
  }
  if (data.value.email != "") {
    errors.value.email = false;
  }
  if (data.value.body != "") {
    errors.value.body = false;
  }
}
</script>
<template>
  <section id="Contact" class="py-20">
    <div class="border-2 mx-7 p-7 rounded-md border-gray-700 pb-10">
      <h2 class="text-center text-2xl font-bold">Contactame</h2>
      <form @submit="handleSubmit" class="mt-10 grid grid-cols-2 gap-8">
        <div
          v-for="(item, index) in itemForms"
          v-bind:key="item.idLabel"
          :class="`gap-1 relative ${
            [2, 3].includes(index) ? 'col-span-2' : ''
          }`"
          @click="element = item.idLabel"
          @focusout="element = ''"
        >
          <label
            :id="item.idLabel"
            :for="item.for"
            class="transition duration-200 pl-3 absolute"
            :class="`${
              element == item.idLabel
                ? 'text-primary  -translate-y-5 text-xs -translate-x-2'
                : ''
            }
            ${
              index == 0
                ? data.firstName != '' &&
                  '-translate-y-5 text-xs -translate-x-2'
                : index == 1
                ? data.lastName != '' && '-translate-y-5 text-xs -translate-x-2'
                : index == 2
                ? data.email != '' && '-translate-y-5 text-xs -translate-x-2'
                : index == 3
                ? data.body != '' && '-translate-y-5 text-xs -translate-x-2'
                : ''
            }
            
            `"
            >{{ item.title }}</label
          >
          <input
            v-if="index == 0"
            v-model="data.firstName"
            :id="item.for"
            :type="item.type"
            @focus="element = item.idLabel"
            style="outline: none"
            class="w-full bg-transparent border-b-1 pb-1 pl-3 left-2 border-gray-500/50 hover:border-gray-700 dark:border-gray-700 dark:hover:border-gray-400"
          />
          <input
            v-if="index == 1"
            v-model="data.lastName"
            :id="item.for"
            :type="item.type"
            @focus="element = item.idLabel"
            style="outline: none"
            class="w-full bg-transparent border-b-1 pb-1 pl-3 left-2 border-gray-500/50 hover:border-gray-700 dark:border-gray-700 dark:hover:border-gray-400"
          />
          <input
            v-if="index == 2"
            v-model="data.email"
            :id="item.for"
            :type="item.type"
            @focus="element = item.idLabel"
            style="outline: none"
            class="w-full bg-transparent border-b-1 pb-1 pl-3 left-2 border-gray-500/50 hover:border-gray-700 dark:border-gray-700 dark:hover:border-gray-400"
          />
          <input
            v-if="index == 3"
            v-model="data.body"
            :id="item.for"
            :type="item.type"
            @focus="element = item.idLabel"
            style="outline: none"
            class="w-full bg-transparent border-b-1 pb-1 pl-3 left-2 border-gray-500/50 hover:border-gray-700 dark:border-gray-700 dark:hover:border-gray-400"
          />
          <span
            :class="`
          text-red-500 font-semibold
          absolute
          opacity-0
          transition-transform
          duration-700
          text-xs
          flex
          ${
            index == 0
              ? errors.firstName == true && 'opacity-100 translate-y-1'
              : index == 1
              ? errors.lastName == true && 'opacity-100 translate-y-1'
              : index == 1
              ? errors.email == true && 'opacity-100 translate-y-1'
              : index == 3
              ? errors.body == true && 'opacity-100 translate-y-1'
              : ''
          }
          
          `"
          >
            {{ item.message }}</span
          >
        </div>
        <div class="flex justify-end col-span-2">
          <button id="button-contained" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </section>
</template>
