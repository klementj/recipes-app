<!-- IMPORTANT STYLE INFO -->
<!-- Centering of section is p-10 -->

<template>

  <div class="dark:bg-gray-700 pt-10 h-screen">
      
    <header class="flex justify-between px-10">
      <h2 class="font-semibold text-3xl dark:text-gray-100">Recipes</h2>
      <img src="./assets/Path181.svg">
      
    </header>
    <main>
      <section class="px-10 pr-0 mt-10">
          <h3 class="font-semibold text-gray-700 dark:text-gray-300">New recipes</h3>
          <Slideshow >
            <BaseCard v-for="recipe in newRecipes" 
              :key="recipe.id" class="card" 
              :title="recipe.name" 
              :time="recipe.time" 
              :image="recipe.featuredImage"/>
          </Slideshow>
      </section>
      <section class="px-10 mt-10">
          <h3 class="font-semibold text-gray-700">Favorites</h3>
          <div class="mt-6" id="favorites">
            <BaseCard v-for="recipe in favRecipes" 
              :key="recipe.id" 
              :title="recipe.name"
              :time="recipe.time"
              :image="recipe.featuredImage"
              :isFavorite="recipe.isFavorite === 'true'"
              :isVegan="recipe.isVegan === 'true'"
              mode="focus"
              height="h-60" />
          </div>
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
        this.sortRecipesByDate();
        this.sortRecipesByFavorite();
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
        newRecipes: {},
        favRecipes: {}
      };
    },
    methods: {
      sortRecipesByDate: function () {
        this.newRecipes = this.recipes;
        this.newRecipes.filter(function(a,b){
          return new Date(a.date) - new Date(b.date)
        });
        this.newRecipes.reverse();
        //  this.newRecipes = this.newRecipes.slice(0, 5);
      },
      sortRecipesByFavorite() {
        this.favRecipes = this.recipes.filter(r => r.isFavorite === 'true');
        // this.favRecipes.reverse();
      }
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
