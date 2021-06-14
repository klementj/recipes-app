<!-- IMPORTANT STYLE INFO -->
<!-- Centering of section is p-10 -->

<template>
  <div class="dark:bg-gray-800 pt-10 h-full">
    <main>
      <router-view v-slot="slotProps">
        <transition name="route">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
  <!--<Recipe></Recipe>-->
</template>

<script>
// import Recipe from './components/Recipe.vue';

// export default {
//   components: {
//     Recipe
//   }
// }
</script>

<style href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.card {
    display: inline-block !important;
    width: 300px;
    scroll-snap-align: start;
  }

.route-enter-active{
  animation: slide-in 1.5s ease-out;
}

.route-leave-active{
  animation: slide-out 1s ease-out;
}

@keyframes slide-in {
  0% {
    transform: translateX(100vw) scale(0.9);
    opacity: 0;
  }

  30% {
    transform: translateX(90vw)  scale(0.9);
    opacity: 0.5;
  }

  70% {
    transform: translateX(0) scale(0.9);
    opacity: 0.6;
  }

  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}


@keyframes slide-out {
  0% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }

  30% {
    transform: translateX(0vw) scale(0.8);
    opacity: 0.8;
  }

  70% {
    transform: translateX(-90vw) scale(0.7);
    opacity: 0.5;
  }

  100% {
    transform: translateX(-100vw) scale(0.5);
    opacity: 0;

  }
}
</style>
