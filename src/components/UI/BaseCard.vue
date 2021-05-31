<template>
<div class="base-card">
    <div class="favorite-banner" v-if="isFavorite">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
    </div>
    <img class="w-full" src="https://via.placeholder.com/150">
    <div class="relative">
        <div class="vegan-banner" v-if="isVegan">
            <svg class="inline-block w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.024 15.606"><g transform="matrix(0.574, 0.819, -0.819, 0.574, 2612.476, -2550.069)"><path class="a" d="M1455.333,844.409s-1.175.108-2.209.108a2.525,2.525,0,0,1-2.755-2.464,6.766,6.766,0,0,1,1.3-4c1.343-2.068,3.4-4.743,3.66-4.743s1.989,2.468,3.3,4.743a6.971,6.971,0,0,1,1.236,4,2.26,2.26,0,0,1-2.466,2.356Z" transform="translate(-853.693 2761.673)"/><line class="a" y2="8.384" transform="translate(601.427 3600.7)"/><line class="a" x1="2.368" y2="2.086" transform="translate(601.427 3601.743)"/><line class="a" x2="2.368" y2="2.086" transform="translate(599.059 3601.743)"/></g></svg>
            <h5 class="text-sm">Vegan</h5>
        </div>

        <h3 class="text-2xl font-bold py-2">{{title}}</h3>
        <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>  
            <p>{{time}} min</p>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        props: ['id', 'title', 'image', 'time', 'isVegan', 'isFavorite']
    }
</script>

<style>
    .a{fill:none;stroke:#fff;stroke-linecap:round;}

    .base-card{
        @apply relative rounded bg-gray-400;
    }

    .vegan-banner{
        @apply bg-green-600 absolute right-10 w-16 py-2  text-center text-white;
    }
    .vegan-banner:before{
        /*Banner Tail*/
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        bottom: -40px;
        right: 0;
        border-right: 2rem solid rgba(5, 150, 105);
        border-bottom: 40px solid transparent;
        border-left: 2rem solid rgba(5, 150, 105);
        margin: -10px 0px 0 0px;
    }

    .favorite-banner{
        @apply bg-red-600 rounded-full inline-block p-1 absolute text-white top-4 left-4;
    }
</style>