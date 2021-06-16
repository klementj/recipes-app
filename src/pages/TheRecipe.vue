<template>
 <div v-if="currentRecipe !== null">
  <div id="recipe" class="flex overflow-hidden">
    <div class="flex flex-col px-8 min-w-full box-border pb-8">
      <img :src="'http://localhost:3080' + currentRecipe.featuredImage" class="rounded"/>
      <ul class="mt-5">
        <li class="flex">
          <h2 class="font-semibold text-2xl mx-5 mb-4 text-black">Ingredients</h2>
        </li>
        <li 
        class="mx-10 m-3" 
        v-for="ingredient in currentRecipe.ingredients" 
        :key="ingredient.name">{{ ingredient.amount }} {{ ingredient.type }}
      </li>
      </ul>
    </div>
    <recipe-step 
      v-for="recipeStep in recipeSteps" 
      :currentRecipeStep="recipeStep" 
      :key="recipeStep.step">
    </recipe-step>
  </div>

    <div class="flex mx-auto mt-auto">
    <router-link 
      v-if="currentStep == '0' && currentRecipe.steps.length > 1" 
      :to="'/recipe/' + this.recipeId + '/' + 1"
      class="self-center rounded-full px-12 py-5 my-5 bg-black text-white font-bold uppercase">
        Start Cooking
    </router-link>
    <router-link 
      v-else-if="currentStep < 1"
      class="self-center rounded-full px-12 py-5 my-5 bg-black text-white font-bold uppercase" 
      to="/">Front Page
    </router-link>
    <div v-if="currentStep > 0" class="flex mx-auto items-center">
      <NavDots 
        v-for="step in recipeSteps" 
        :key="step.step" 
        :pageIndex="step.step" 
        :id="recipeId" 
        :dotIndex="currentStep">
      </NavDots>
    </div>
    </div>
</div>
</template>

<script>
import NavDots from '../components/NavDot.vue';
import RecipeStep from '../components/RecipeStep';

export default {
  name: 'Recipe',
  props: {
    recipeId: String,
    step: {
      type: String,
      default: '0'
    }
  },
  components: {
    NavDots,
    RecipeStep
  },
  data() {
    return {
        currentStep: 0,
        scroll2: 0,
        currentRecipe: null,
    }
  },

  computed: {
    recipeSteps() {
      let steps = this.currentRecipe.steps;
      steps.splice(0, 1);
      return steps;
    }
  },
  created(){
    this.loadRecipe(this.recipeId);
    this.currentStep = this.step;
    console.log(this.step);
  },
  mounted(){
    // this.scroll(this.step);
    
  },
  methods: {
    loadRecipe(recipeId){
       fetch('http://localhost:3080/recipes/' + recipeId)

       .then((response) => {
         return response.json();
       })
       .then((data) => {
         this.currentRecipe = data;
         this.scroll(this.step);
       });
    },
    scroll(scrollValue){
      var scrollLength = window.innerWidth * scrollValue;

      this.scroll2 = scrollLength;

      
      document.querySelector("#recipe").scrollTo(this.scroll2, 0);
    }
  },
  watch: {
    recipeId(newId){
      this.loadRecipe(newId);
    },
    $route (to){
      this.scroll(to.params.step);
      this.currentStep = to.params.step;
    }
  }
}
</script>

<style>
.recipe{
  transition: scroll 1s ease-in;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-behavior: smooth;
}
</style>
