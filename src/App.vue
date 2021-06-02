<!-- IMPORTANT STYLE INFO -->
<!-- Centering of section is p-10 -->
<template>
  <div>
    <header class="flex justify-between px-10">
      <h2 class="font-semibold text-3xl">Recipes</h2>
      <img alt="Vue logo" src="./assets/Path181.svg">

    </header>
    <main>
      <section class="px-10 mt-10">
          <h3 class="font-semibold text-gray-500">New recipes</h3>
      </section>
      <section class="px-10 mt-10">
          <h3 class="font-semibold text-gray-500">Favorites</h3>

      </section>
    </main>
  </div>
  <RecipeNavigation></RecipeNavigation>
  <RecipeSteps></RecipeSteps>
</template>

<script>
import RecipeNavigation from './components/RecipeNavigation.vue';
import RecipeSteps from './components/RecipeSteps.vue';

export default {
   name: 'App',
   components: {
     RecipeNavigation,
     RecipeSteps
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
