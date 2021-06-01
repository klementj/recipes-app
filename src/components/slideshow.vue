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
  scroll-snap-points-x: repeat(300px);
  scroll-snap-type: x mandatory;
  
}
.scrolling-wrapper::-webkit-scrollbar {    display: none;}
.card {
    display: inline-block;
    width: 300px;
    scroll-snap-align: start;
  }
</style>
