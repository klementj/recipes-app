<template>
<div class="border-gray-300 border flex flex-col py-20 p-8">

 <img :src="step.image" class="rounded"/>

    <ul class="p-5">
      <li class="flex">
        <h1 class="font-bold text-5xl text-black mx-5">{{ step.step }}</h1>
        <h2 class="font-semibold text-2xl text-black">step key.title</h2>
      </li>

      <li class="font-semibold mx-16 my-8">
          step key.description
      </li>
    </ul>
</div>

</template>

<script>
  export default {
    props: {
      steps: {
        type: Array
      }
    }
  }

</script>

<style>.a{fill:#fff;stroke:#707070;}.b{stroke:none;}.c{fill:none;}</style>