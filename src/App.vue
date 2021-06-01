<!-- IMPORTANT STYLE INFO -->
<!-- Centering of section is p-10 -->

<template>

  <div class="dark:bg-gray-700 mt-10">
      
    <header class="flex justify-between px-10">
      <h2 class="font-semibold text-3xl">Recipes</h2>
      <img alt="Vue logo" src="./assets/Path181.svg">
      
    </header>
    <main>
      <section class="px-10 pr-0 mt-10">
          <h3 class="font-semibold text-gray-500">New recipes</h3>
          <Slideshow >
            <BaseCard v-for="recipe in recipes" :key="recipe.id" class="card" :title="recipe.name" :time="recipe.time" image="https://i.imgur.com/L2m8Gmk.jpg"/>
          </Slideshow>
      </section>
      <section class="px-10 mt-10">
          <h3 class="font-semibold text-gray-500">Favorites</h3>

      </section>
    </main>
  </div>
  <!-- <RecipeNavigation></RecipeNavigation> -->
</template>

<script>
  import Slideshow from './components/slideshow.vue';
  import BaseCard from './components/UI/BaseCard.vue';
  // import RecipeNavigation from './components/RecipeNavigation.vue';
  export default {
    
    mounted(){
      fetch('http://localhost:3080/recipes')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.recipes = data;
        console.log(this.recipes);
      });
    },
    components: {
      Slideshow,
      BaseCard,
     // RecipeNavigation
    },
    data(){
      return {
        recipes: {},
      };
    }
  }

  
  



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
