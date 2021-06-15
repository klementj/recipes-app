<template>
  <section class="content-center relative parallaxContainer">
    <h2 class="text-white text-6xl font-sans">{{ title }}</h2>
    <div class="parallax" :style="{'background-image':'url('+ image + ')'}"></div>
  </section>
</template>

<script>

export default {
    props: {
    title: {
      type: String,
      default: "Banner Text",
    },
    image: { 
        type: String,
        default: "https://www.vitruvianpartners.com/wp-content/uploads/placeholder-banner.png" 
    },
  },
    
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');


.a {
  fill: none;
  stroke: #000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
}
.parallax {
  position: absolute;
  z-index: 10;
  height: 500px;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(1px);
}
.parallax h2{
  z-index: 20;
}
.parallaxContainer{
  position: relative;
  height: 500px;
}
.parallaxContainer h2{
  z-index: 20;
  align-self: center;
  font-family: 'Indie Flower', cursive;
  margin-left: 100px;
}
</style>
