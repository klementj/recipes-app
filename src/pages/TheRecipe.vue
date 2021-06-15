<template>
 <div v-if="currentRecipe !== null" class="flex flex-col p-8">
  <img :src="'http://localhost:3080' + currentRecipe.steps[currentStep].image" class="rounded"/>
    <ul class="mt-5">
      <li class="flex">
        <h1 v-if="currentStep != 0" class="font-bold text-5xl text-black mx-5">{{ currentStep }}</h1>
        <h2 class="font-semibold text-2xl mx-5 text-black">{{ currentRecipe.steps[currentStep].title }}</h2>
      </li>
      <li class="mx-16 my-8">{{ currentRecipe.steps[currentStep].description }}</li>
    </ul>

    <ul v-if="currentRecipe.steps[currentStep].step == '0'">
      <li class="mx-10 m-3" v-for="ingredient in currentRecipe.ingredients" :key="ingredient.name">{{ ingredient.amount }} {{ ingredient.type }}</li>
    </ul>

    <div class="flex mx-auto">
    <router-link 
      v-if="currentRecipe.steps[currentStep].step == '0' && currentRecipe.steps.length > 1" 
      :to="'/recipe/' + this.recipeId + '/' + 1"
      class="self-center rounded-full px-12 py-5 my-5 bg-black text-white font-bold uppercase">
        Start Cooking
    </router-link>
    <p v-else-if="currentRecipe.steps[currentStep].step == '0'">This recipe has no steps. Sorry.</p>
    <span v-if="currentRecipe.steps[currentStep].step != '0'" class="flex mx-auto items-center">
      <NavDots :key="step.step" v-for="step in recipeSteps" :pageIndex="step.step" :id="recipeId" :dotIndex="currentStep"></NavDots>
    </span>
    </div>
    <router-link v-if="currentRecipe.steps[currentStep].step == '0' && currentRecipe.steps.length == 1" class="self-center rounded-full px-12 py-5 my-5 bg-black text-white font-bold uppercase" to="/">Front Page</router-link>

</div>
</template>

<script>
import NavDots from '../components/NavDot.vue';

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
    NavDots
  },
  data() {
    return {
        currentStep: 0,
        currentRecipe: null,
    }
  },

  computed: {
    recipeSteps() {
      return this.currentRecipe.steps;
      
    }
  },
  created(){
    this.loadRecipe(this.recipeId);
  },
  mounted(){
    this.currentStep = this.step;
  },
  methods: {
    loadRecipe(recipeId){
       fetch('http://localhost:3080/recipes/' + recipeId)

       .then((response) => {
         return response.json();
       })
       .then((data) => {
         this.currentRecipe = data;
       });
    }
  },

  watch: {
    recipeId(newId){
      this.loadRecipe(newId);
    },
    $route (to){
      this.currentStep = to.params.step;
    }
  }
}
</script>
