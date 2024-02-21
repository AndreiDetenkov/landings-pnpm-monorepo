<script setup>
import HeroSection from '@/components/HeroSection.vue'
</script>

<template>
  <main>
    <HeroSection />

    <section id="quality">
      <div class="container grid grid-cols-2 gap-4">
        <div class="image"></div>
        <div>
          <h2>Our <span>quality service</span> is ready to help you!</h2>
          <p>
            It is a long <span>established fact</span> that a reader will be distracted by the
            readable.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page.
          </p>
          <ul>
            <li>Smooth</li>
            <li>Lightweight</li>
            <li>Dark Spots</li>
            <li>Shining</li>
            <li>Herbaceous</li>
            <li>Wrinkles</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="service"></section>

    <section class="advantage"></section>

    <section class="testimonial"></section>
  </main>
</template>

