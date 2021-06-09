<template>
 <div class="border-gray-300 border flex flex-col py-20 p-8">

 <img :src="'http://localhost:3080' + Recipe.steps[currentStep].imagerecipes[currentStep].steps[currentStep].image" class="rounded"/>

    <ul class="p-5 mt-5">
      <li class="flex">
        <h1 v-if='currentStep != 0' class="font-bold text-5xl text-black mx-5">{{ currentStep }}</h1>
        <h2 class="font-semibold text-2xl mx-5 text-black">{{ Recipe.steps[currentStep].title }}</h2>
      </li>
      <li class="mx-10 m-3" :key="ingredient.name" v-for="ingredient in Recipe.ingredients">{{ ingredient.amount }} {{ ingredient.type }}</li>
      <li class="font-semibold mx-16 my-8">{{ Recipe.steps[currentStep].description }}</li>
    </ul>
    <div class="flex flex-col">
    <button class="self-center rounded-full px-12 py-5 my-5 bg-black text-white font-bold">START COOKING</button>
    <span class="flex space-x-2 mx-auto">
      <svg :key="step.step" v-for="step in Recipe.steps" xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5"><defs></defs><g class="a"><circle class="b" cx="2.5" cy="2.5" r="2.5"/><circle class="c" cx="2.5" cy="2.5" r="2"/></g></svg>
    </span>
</div>
</div>
    
   

</template>


<style>.a{fill:#fff;stroke:#707070;}.b{stroke:none;}.c{fill:none;}</style>

<script>

export default {
  name: 'RecipeNavigation',
props: {
  Recipe: Array
},
  data() {
    return {
        currentStep: 0,
        recipes: [
            {
            id: '1',
            name: 'Pasta Carbonara',
            time: '30min',
            date: '2020-04-23T18:25:43.511Z',
            isFavorite: 'false',
            category: ['pork', 'pasta'],
            featuredImage: '/images/featured-pasta-carbonara.jpg',
            ingredients: [
                {
                amount: '4',
                type: 'egg yolks'
                },
                {
                amount: '350g',
                type: 'spaghetti'
                },
                {
                amount: '50g',
                type: 'pecorino romano'
                },
                {
                amount: '180g',
                type: 'guanciale (pork)'
                },
                {
                amount: null,
                type: 'black pepper to taste'
                },
                {
                amount: null,
                type: 'salt for boiling water'
                },
                {
                amount: null,
                type: 'parmesan (optional)'
                }
            ],
            steps: [
                {
                step: '0',
                image: '/images/pasta-recipe-step0.jpg',
                title: 'Ingredients'
                },
                {
                step: '1',
                image: '/images/pasta-recipe-step1.jpg',
                title: 'Boil the pasta water',
                description: "Fill a large pot with clean cold water, put it on the stove, heat and let it come to a gentle boil."
                },
                {
                step: '2',
                image: '/images/pasta-recipe-step2.jpg',
                title: 'Chop pork',
                description: "While the water is on, take the <strong>guanciale</strong> and chop it into small chunks, about .5cm * 1cm. </br> Don't worry about the size, it is just to give a scale, this is a homemade dish and perfection is not necessary."
                },
                {
                step: '3',
                image: '/images/pasta-recipe-step3.jpg',
                title: 'Mix the sauce',
                description: "Take a large bowl and whish the <strong>egg yolks</strong> together so they amalgamate into each other. </br> Add the <strong>pecorino</strong>, a pinch of <strong>salt</strong> and a pinch of <strong>black pepper</strong>. </br> Mix everything well together."
                },
                {
                step: '4',
                image: '/images/pasta-recipe-step4.jpg',
                title: 'Boil the pasta',
                description: "Set the timer to about 7 minutes so you can taste them at that point and see how they are getting on. </br>Overall cooking time depends on the brand and consistency you like the most. "
                },
                {
                step: '5',
                image: '/images/pasta-recipe-step5.jpg',
                title: 'Cook the pork',
                description: "Heat up a pan on the stove. Do not add oil or butter </br>Cook the <strong>guanciale</strong> in its own fat. </br>Stir often and let it cook for about <strong>7minutes</strong> </br> Let it cool for a few minutes. Then add it to the eff mixture and stir well."
                },
                {
                step: '6',
                image: '/images/pasta-recipe-step6.jpg',
                title: 'Coat the pasta with the egg mix',
                description: "Heat up a pan on the stove. Do not add oil or butter. </br>Cook the guanciale in its own fat. </br>Stir often and let it cook for about 7minutes </br>Let it cool for a few minutes. Then add it to the eff mixture and stir well."
                },
            ]
            },
            {
            id: '2',
            name: 'Fladbrød med Aubergine',
            time: '30min',
            date: '2021-04-23T18:25:43.511Z',
            isFavorite: 'false',
            category: ['vegan'],
            featuredImage: './images/featured-fladbroed.jpg',
            ingredients: [
                {
                amount: '4',
                type: 'egg yolks'
                }
            ],
            steps: [
                {
                step: '0',
                image: './images/pasta-recipe-step0.jpg',
                title: 'Ingridients'
                }
            ]
            },
            {
            id: '3',
            name: 'Dutch baby au natural',
            time: '60min',
            date: '2021-02-23T18:25:43.511Z',
            isFavorite: 'true',
            category: ['desert'],
            featuredImage: './images/featured-featured-dutch-baby.jpg',
            ingredients: [
                {
                amount: '4',
                type: 'egg yolks'
                }
            ],
            steps: [
                {
                step: '0',
                image: './images/pasta-recipe-step0.jpg',
                title: 'Ingridients'
                }
            ]
            },
            {
            id: '4',
            name: 'Baguette with figs, lemon and mint',
            time: '30min',
            date: '2012-04-23T18:25:43.511Z',
            isFavorite: 'true',
            category: ['vegan'],
            featuredImage: './images/featured-baguette-figs.jpg',
            ingredients: [
                {
                amount: '4',
                type: 'egg yolks'
                }
            ],
            steps: [
                {
                step: '0',
                image: './images/pasta-recipe-step0.jpg',
                title: 'Ingridients'
                }
            ]
            },
            {
            id: '5',
            name: 'Pasta pesto med kvalderkål',
            time: '40min',
            date: '2018-02-20T18:25:43.511Z',
            isFavorite: 'true',
            category: ['vegetarian', 'pasta'],
            featuredImage: './images/featured-pasta-pesto.jpg',
            ingredients: [
                {
                amount: '4',
                type: 'egg yolks'
                }
            ],
            steps: [
                {
                step: '0',
                image: './images/pasta-recipe-step0.jpg',
                title: 'Ingridients'
                }
            ]
            }
            ]
    }
  }
}
    var recipes;
fetch('http://localhost:3080/recipes')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    recipes = data;
    console.log(recipes);
  });
</script>
