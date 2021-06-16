<template>
 <div class="flex flex-col px-8 min-w-full box-border pb-8">
  <img :src="'http://localhost:3080' + currentRecipeStep.image" class="rounded"/>
    <ul class="mt-5">
      <li class="flex">
        <h1 class="font-bold text-5xl text-black mx-5">{{ currentRecipeStep.step }}</h1>
        <h2 class="font-semibold text-2xl mx-5 text-black">{{ currentRecipeStep.title }}</h2>
      </li>
      <li class="mx-16 my-8">
        {{ currentRecipeStep.description }}
      </li>
    </ul>
</div>
</template>

<script>
export default{
    props: ['currentRecipeStep']
}
</script>