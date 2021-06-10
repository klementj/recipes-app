<template>
  <div class="sliderContainer">
    <div class="scrolling-wrapper">
      <slot class="card lg:min-w-full">

      </slot>
    </div>
    <div class="flex justify-between pr-6">
      <button class="invisible md:visible" @click="prevBtn()"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg></button>
      <button class="invisible  md:visible" @click="nextBtn()"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></button>
    </div>
  </div>
</template>
<script>
   export default {
     data(){
       return {
         scroll: 0,
       };
     },
     methods: {
       nextBtn(){
         var scrollLength = (window.innerWidth / 100) * 30;
         this.scroll = this.scroll + scrollLength;
         document.querySelector(".scrolling-wrapper").scrollTo(this.scroll + scrollLength, 0);
       },
       prevBtn(){
         var scrollLength = (window.innerWidth / 100) * 30;
         this.scroll = this.scroll - scrollLength;
         document.querySelector(".scrolling-wrapper").scrollTo(this.scroll - scrollLength, 0);
       }
     }
   }
</script>

<style>
.scrolling-wrapper {
  
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  /*
  scroll-snap-type: mandatory;
  scroll-snap-points-x: repeat(50%);
  scroll-snap-type: x mandatory;*/
  
}
.scrolling-wrapper::-webkit-scrollbar {    display: none;}
.card {
    margin: 20px;
    display: inline-block;
    min-width: 60%;
    scroll-snap-align: start;
  }
  @media only screen and (min-width: 1553px){
    .card {
    min-width: 40%;
  }
}
</style>
