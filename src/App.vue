<!-- IMPORTANT STYLE INFO -->
<!-- Centering of section is p-10 -->

<template>
  <div class="dark:bg-gray-700 pt-10 h-screen">
      
    <header class="flex justify-between px-10">
      <h2 class="font-semibold text-3xl dark:text-gray-100">Recipes</h2>
      <img src="./assets/Path181.svg">
      
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
  <!-- <RecipeNavigation></RecipeNavigation> -->
</template>

<script>


</script>

<style href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">

</style>

<style>
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
</style>
