<template>
<div class="min-h-screen bg-gray-100">
  <NavBar />
   <transition name="fade" mode="out-in">
          <div class=" max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="px-3 py-4 sm:px-0">
              <router-view />
            </div>
          </div>
        </transition>
          </div>

</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>

