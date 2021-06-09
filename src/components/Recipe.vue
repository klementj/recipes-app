<template>
 <div class="flex flex-col p-8">
 <img :src="'http://localhost:3080' + currentRecipe.steps[currentStep].image" class="rounded"/>

    <ul class="mt-5">
      <li class="flex">
        <h1 v-if="currentStep != 0" class="font-bold text-5xl text-black mx-5">{{ currentStep }}</h1>
        <h2 class="font-semibold text-2xl mx-5 text-black">{{ currentRecipe.steps[currentStep].title }}</h2>
      </li>
      <li class="mx-16 my-8">{{ currentRecipe.steps[currentStep].description }}</li>
    </ul>

    <ul v-if="currentStep == 0">
      <li class="mx-10 m-3" :key="ingredient.name" v-for="ingredient in currentRecipe.ingredients">{{ ingredient.amount }} {{ ingredient.type }}</li>
    </ul>

    <div class="flex mx-auto">
    <button v-if="currentStep == 0" v-on:click="currentStep++" class="self-center rounded-full px-12 py-5 my-5 bg-black text-white font-bold">START COOKING</button>
    <span v-if="currentStep != 0" class="flex mx-auto">
      <NavDots :key="step.step" v-for="step in currentRecipe.steps" :pageIndex="currentStep" :dotIndex="step.step"></NavDots>
    </span>
    </div>
</div>
</template>


<style>.a{fill:#fff;stroke:#707070;}.b{stroke:none;}.c{fill:none;}</style>

<script>
import NavDots from './NavDot.vue';

export default {
  name: 'RecipeNavigation',
props: {
  recipeId: String
},
components: {
  NavDots
},
  data() {
    return {
        currentStep: 0,
        currentRecipe: [],
    }
  },

  created(){
    this.loadRecipe(this.recipeId);
  },
  
  methods: {
    loadRecipe(recipeId){
       fetch('http://localhost:3080/recipes/' + recipeId)

       .then((response) => {
         return response.json();
       })
       .then((data) => {
         this.currentRecipe = data;
         
         console.log(this.currentRecipe);
       });
    }
  },

  watch: {
    recipeId(newId){
      this.loadRecipe(newId);
    }
  }
}
</script>
