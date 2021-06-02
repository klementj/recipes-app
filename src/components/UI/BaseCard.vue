<template>
<div :class="cardClass" class="base-card">
    <div class="favorite-banner" v-if="isFavorite">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
    </div>
    <div  :class="height" class="image-container">
        <img class="w-full" :src="'http://localhost:3080/' + image">
    </div>
    <div class="vegan-banner" v-if="isVegan">
        <svg class="inline-block h-8 w-8 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.024 15.606"><g transform="matrix(0.574, 0.819, -0.819, 0.574, 2612.476, -2550.069)"><path class="line-a" d="M1455.333,844.409s-1.175.108-2.209.108a2.525,2.525,0,0,1-2.755-2.464,6.766,6.766,0,0,1,1.3-4c1.343-2.068,3.4-4.743,3.66-4.743s1.989,2.468,3.3,4.743a6.971,6.971,0,0,1,1.236,4,2.26,2.26,0,0,1-2.466,2.356Z" transform="translate(-853.693 2761.673)"/><line class="line-a" y2="8.384" transform="translate(601.427 3600.7)"/><line class="line-a" x1="2.368" y2="2.086" transform="translate(601.427 3601.743)"/><line class="line-a" x2="2.368" y2="2.086" transform="translate(599.059 3601.743)"/></g></svg>
        <h5>Vegan</h5>
    </div>
    <div :class="textClass"  class="card-text-container">
        <h3 class="text-2xl font-bold py-2">{{title}}</h3>
        <div class="flex">
            <svg class="mr-1 h-5 w-5 text-xl" xmlns="http://www.w3.org/2000/svg" width="13" height="14.531" viewBox="0 0 13 14.531">
                <g transform="translate(-576 -3580.469)"><g transform="translate(-886.693 2747.694)"><g class="a" transform="translate(1462.693 834.306)"><circle class="c" cx="6.5" cy="6.5" r="6.5"/><circle class="d" cx="6.5" cy="6.5" r="5.9"/></g><line class="b" y2="0.45" transform="translate(1469.273 833.806)"/><line class="b" x1="4" transform="translate(1467.193 833.275)"/><line class="b" x1="2" transform="translate(1470.693 840.806)"/><g class="a" transform="translate(1467.693 839.306)"><circle class="c" cx="1.5" cy="1.5" r="1.5"/><circle class="d" cx="1.5" cy="1.5" r="0.9"/></g></g></g>
            </svg> 
            <p>{{time}} min</p>
        </div>
    </div>
</div>
</template>

<script>
    export default{

        props: {
            id: {
                type: String
            }, 
            title: {
                type: String,
                default: 'Recipe Title'
            }, 
            image: {type: String}, 
            time: {type: String}, 
            mode: {type: String}, 
            isVegan: {
                type: Boolean,
                default: false
            }, 
            isFavorite: {
                type: Boolean,
                default: false
            }, 
            height: {
                type: String,
                default: 'h-60'
            }
        },
        computed: {
            textClass(){
                return this.mode === "focus" ? "highlignted" : null; 
            },
            cardClass(){
                return this.mode === "focus" ? "bg-gray-100" : null; 
            }
        }
    }
</script>

<style scoped>
    /*Svg styling start*/
    .line-a{fill:none;stroke:#fff;stroke-linecap:round;}

    .a,.b,.d{fill:none;}.a,.b{stroke:#3d3d3d;}.a{stroke-width:1.2px;}.b{stroke-linecap:round;}.c{stroke:none;}
    /*Svg styling end*/

    .base-card{
        @apply rounded-lg relative pb-8;
    }

    .card-text-container{
        max-width: 70%;
    }

    .highlignted{
        @apply m-5;
    }

    .image-container{
        @apply rounded-lg flex justify-items-center items-center overflow-hidden;
        overflow: hidden;
    }

    .image-container img{
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
    }

    .vegan-banner{
        @apply bg-green-600 absolute right-10 w-16 py-2  text-center text-white text-xs;
    }
    .vegan-banner:before{
        /*Banner Tail*/
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        bottom: -1.5rem;
        right: 0;
        border-right: 2rem solid rgba(5, 150, 105);
        border-bottom: 1.5rem solid transparent;
        border-left: 2rem solid rgba(5, 150, 105);
        margin: -10px 0px 0 0px;
    }

    .favorite-banner{
        @apply text-white bg-red-600 rounded-full inline-block p-1 absolute left-3 top-3;
    }
</style>