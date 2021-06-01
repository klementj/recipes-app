<!-- IMPORTANT STYLE INFO -->
<!-- Centering of section is p-10 -->

<template>

  <div class="dark:bg-gray-700">
      
    <header class="flex justify-between px-10">
      <h2 class="font-semibold text-3xl">Recipes</h2>
      <img alt="Vue logo" src="./assets/Path181.svg">
      
    </header>
    <main>
      <section class="px-10 mt-10">
          <h3 class="font-semibold text-gray-500">New recipes</h3>
          <Slideshow>
            <test/>
            <test/>
            <test/>

          </Slideshow>
      </section>
      <section class="px-10 mt-10">
          <h3 class="font-semibold text-gray-500">Favorites</h3>

      </section>
    </main>
  </div>
</template>

<script>
  import Slideshow from './components/slideshow.vue';
  import test from './components/HelloWorld';
  export default {
    components: {
      Slideshow,
      test
    }
  }

  
  fetch('http://localhost:3080/recipes')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

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
</style>
