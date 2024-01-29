<script setup lang="ts">
import { ref } from 'vue'

const navigation: Array<{ name: string; href: string }> = [
  { name: 'Home', href: '#home' },
  { name: 'Product', href: '#product' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
]
const selected = ref<string>('Home')
function selectMenuItem(name: string) {
  selected.value = name
}
</script>

<template>
  <nav>
    <ul class="inline-flex gap-x-14 text-gray pr-14">
      <li
        v-for="{ name, href } in navigation"
        :key="name"
        @click="selectMenuItem(name)"
        class="hover:text-white transition"
      >
        <a :href="href" :class="{ 'text-white': selected === name }">
          {{ name }}
        </a>
      </li>
    </ul>

    <button class="border border-white rounded py-3 px-8">
      <span class="text-white">Free trial</span>
    </button>
  </nav>
</template>
