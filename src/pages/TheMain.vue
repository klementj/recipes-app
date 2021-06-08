<template>
<header class="flex justify-between px-10">
      <h2 class="font-semibold text-3xl dark:text-gray-100">Recipes</h2>
      <img src="../assets/Path181.svg">
      
    </header>
    <section class="px-10 pr-0 mt-10">
          <h3 class="font-semibold text-gray-700 dark:text-gray-300">New recipes</h3>
          <Slideshow >
            <BaseCard v-for="recipe in newRecipes" 
               class="card"
              :key="recipe.id"
              :id="recipe.id"
              :title="recipe.name" 
              :time="recipe.time" 
              :image="recipe.featuredImage"
              height="h-40 lg:h-60 xl:h-80"/>
          </Slideshow>
      </section>
      <section class="px-10 mt-10 lg:w-4/6 lg:m-auto">
          <h3 class="font-semibold text-gray-700 dark:text-gray-100">Favorites</h3>
          <div class="mt-6 md:flex md:flex-wrap md:justify-around " id="favorites">
            <BaseCard class="md:w-2/5" v-for="recipe in favRecipes" 
              :key="recipe.id" 
              :id="recipe.id" 
              :title="recipe.name"
              :time="recipe.time"
              :image="recipe.featuredImage"
              :isFavorite="recipe.isFavorite === 'true'"
              :isVegan="recipe.isVegan === 'true'"
              mode="focus"
              height="h-60" />
          </div>
      </section>
</template>

<script>
import Slideshow from '../components/slideshow.vue';
import BaseCard from '../components/UI/BaseCard.vue';

export default{
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