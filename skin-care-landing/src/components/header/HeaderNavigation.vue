<script setup lang="ts">
import { ref } from 'vue'
import MenuIcon from '@/assets/icons/menu.svg?component'

const navigation: Array<{ name: string; href: string }> = [
  { name: 'Home', href: '#home' },
  { name: 'Product', href: '#product' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
]
const selected = ref('Home')
const isMenuDisplay = ref(true)

function selectMenuItem(name: string) {
  selected.value = name
  isMenuDisplay.value = false
}
</script>

<template>
  <button
    @click="isMenuDisplay = !isMenuDisplay"
    class="w-8 h-8 border border-neutral-500 rounded flex items-center justify-center"
  >
    <menu-icon class="w-4 h-4 inline-block pt-[1px]" />
  </button>

  <div
    v-if="isMenuDisplay"
    class="fixed right-0 top-0 bg-white w-[calc(50vw)] h-full z-50 p-7 transition-all duration-300"
  >
    <nav class="flex flex-col items-end">
      <button
        @click="isMenuDisplay = !isMenuDisplay"
        class="w-8 h-8 border border-neutral-500 rounded flex items-center justify-center"
      >
        <span class="w-6 h-6">X</span>
      </button>

      <ul
        class="pt-10 flex flex-col gap-y-4 gap-x-14 text-primary font-medium sm:text-gray pr-14 mb-10"
      >
        <li
          v-for="{ name, href } in navigation"
          :key="name"
          @click="selectMenuItem(name)"
          class="hover:text-secondary sm:hover:text-white transition"
        >
          <a
            :href="href"
            :class="{ 'text-secondary font-bold underline sm:text-white': selected === name }"
          >
            {{ name }}
          </a>
        </li>
      </ul>

      <button class="border border-primary sm:border-white rounded py-3 px-8">
        <span class="text-primary sm:text-white">Free trial</span>
      </button>
    </nav>
  </div>
</template>
