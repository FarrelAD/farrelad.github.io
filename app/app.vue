<script setup lang="ts">
import { onMounted, ref } from 'vue'

const showAlert = ref(false);

onMounted(() => {
  showAlert.value = true
});

const closeAlert = () => {
  showAlert.value = false
}
</script>

<template>
  <div>
    <div
      v-if="showAlert"
      class="fixed top-5 left-1/2 -translate-x-1/2 max-w-md w-[90%] bg-yellow-400 text-yellow-900 p-4 rounded-xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 z-50">
      <p class="text-sm sm:text-base">
        ⚠️ Note: This website is optimized for mobile devices. Some elements may not display properly on larger screens.
      </p>
      <button
        class="mt-2 sm:mt-0 sm:ml-4 px-3 py-1 bg-yellow-900 text-yellow-400 rounded-lg hover:bg-yellow-800 transition-colors"
        @click="closeAlert">
        Close
      </button>
    </div>


    <hero-section />
    <projects-section />
    <competition-section />
    <activities-section />

    <section class="min-h-screen flex items-end">
      <footer-app />
    </section>
  </div>
</template>
