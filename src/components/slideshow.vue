<template>
  <div class="sliderContainer">
    <div class="scrolling-wrapper">
      <slot class="card">

      </slot>
    </div>
  </div>
</template>












<script>
  


</script>

<style>
.scrolling-wrapper {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-snap-type: mandatory;
  scroll-snap-points-x: repeat(50%);
  scroll-snap-type: x mandatory;
  
}
.scrolling-wrapper::-webkit-scrollbar {    display: none;}
.card {
    margin: 20px;
    display: inline-block;
    width: 100vw;
    min-width: 60%;
    scroll-snap-align: start;
  }
</style>
