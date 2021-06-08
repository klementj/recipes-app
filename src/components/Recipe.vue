<template>
    <div class="mx-5">
        <img :src="'http://localhost:3080/'+currentRecipe.featuredImage" class="rounded"/>
        <ul class="p-5">
        <li class="flex">
            <h2>{{ currentRecipe.name }}</h2>
        </li>

        <li class="font-semibold mx-16 my-8">
        </li>
        </ul>
    </div>

</template>

<script>
  export default {
    props: ['recipeId'],

    data(){
        return{
            currentRecipe: [],
        };
    },
    created(){
        this.loadRecipe(this.recipeId);
    },
    methods: {
        loadRecipe(recipeId){
            fetch('http://localhost:3080/recipes/' +recipeId)
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
