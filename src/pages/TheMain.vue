<template>
  <header class="flex justify-between px-10">
    <h2 class="font-semibold text-3xl dark:text-gray-100">Recipes</h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.414"
      height="20.414"
      viewBox="0 0 20.414 20.414"
    >
      <defs></defs>
      <path
        class="a"
        d="M21,21l-6-6m2-5a7,7,0,1,1-7-7A7,7,0,0,1,17,10Z"
        transform="translate(-2 -2)"
      />
    </svg>
  </header>
  <section class="px-10 pr-0 mt-10 md:mb-20">
    <h3 class="font-semibold text-gray-700 dark:text-gray-300">New recipes</h3>
    <Slideshow class="w-full">
      <BaseCard
        v-for="recipe in newRecipes"
        class="card w-4/12"
        :key="recipe.id"
        :id="recipe.id"
        :title="recipe.name"
        :time="recipe.time"
        :image="recipe.featuredImage"
        :isSlide="true"
        :isVegan="recipe.isVegan === 'true'"
        height="h-40 lg:h-60 xl:h-80"
      />
    </Slideshow>
  </section>
  <section class="px-10 mb-20">
    <h3 class="font-semibold text-gray-700 dark:text-gray-100">Favorites</h3>
    <div class=" mt-6 sm:flex sm:flex-wrap sm:justify-between " id="favorites">
      <BaseCard
        class="sm:w-2/5 lg:w-64 xl:w-96"
        v-for="recipe in favRecipes"
        :key="recipe.id"
        :id="recipe.id"
        :title="recipe.name"
        :time="recipe.time"
        :image="recipe.featuredImage"
        :isFavorite="recipe.isFavorite === 'true'"
        :isVegan="recipe.isVegan === 'true'"
        mode="focus"
        height="h-60"
      />
    </div>
  </section>
  <banner-section
    class="hidden sm:flex"
    :image="'https://i.imgur.com/NSQ8EJ3.jpg'"
    :title="'Insperation made simple'"
  />
  <footer class="flex justify-center">
    <div class=" mx-10 w-full flex md:w-4/5 lg:w-3/5 xl:w-2/5 justify-between mt-20 mb-10">
      <ul>
        <li class="text-xl mb-5">Footer Head link</li>
        <li class="text-lg mb-5">Footer sub link</li>
        <li class="text-lg mb-5">Footer sub link</li>
        <li class="text-lg mb-5">Footer sub link</li>
        <li class="text-lg mb-5">Footer sub link</li>
      </ul>
      <ul>
        <li class="text-xl mb-5">Footer Head link</li>
        <li class="text-lg mb-5">Footer sub link</li>
        <li class="text-lg mb-5">Footer sub link</li>
        <li class="text-lg mb-5">Footer sub link</li>
        <li class="text-lg mb-5">Footer sub link</li>
      </ul>
    </div>
  </footer>
</template>

<script>
import Slideshow from "../components/slideshow.vue";
import BaseCard from "../components/UI/BaseCard.vue";
import BannerSection from "../components/UI/BannerSection.vue";

export default {
  mounted() {
    fetch("http://localhost:3080/recipes")
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
    BannerSection,
    // RecipeNavigation
  },
  data() {
    return {
      recipes: {},
      newRecipes: {},
      favRecipes: {},
    };
  },
  methods: {
    sortRecipesByDate: function() {
      this.newRecipes = this.recipes;
      this.newRecipes.filter(function(a, b) {
        return new Date(a.date) - new Date(b.date);
      });
      this.newRecipes.reverse();
      //  this.newRecipes = this.newRecipes.slice(0, 5);
    },
    sortRecipesByFavorite() {
      this.favRecipes = this.recipes.filter((r) => r.isFavorite === "true");
      // this.favRecipes.reverse();
    },
  },
};
</script>

<style>
.a {
  fill: none;
  stroke: #000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
}
</style>
