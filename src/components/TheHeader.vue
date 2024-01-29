<script setup lang="ts">
const navigation: Array<{name: string, href: string}> = [
  { name: 'Home', href: '#home' },
  { name: 'Product', href: '#product' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="bg-gradient-to-r from-[#101820] to-[#553f38] py-8">
      <div class="container">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-black text-white">Beuitty.</div>

          <nav>
            <ul class="inline-flex gap-x-14 text-[#898A92] pr-14">
              <li v-for="{name, href} in navigation" :key="name" class="hover:text-white transition">
                <a :href="href">{{ name }}</a>
              </li>
            </ul>

            <button class="border rounded py-3 px-8">
              <span class="text-white">Free trial</span>
            </button>
          </nav>
        </div>
      </div>
  </header>
</template>
