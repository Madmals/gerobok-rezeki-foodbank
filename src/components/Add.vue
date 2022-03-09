<template>
  <div class="container p-2 ">
    <nav class="h-[10vh] flex justify-center place-items-center bg-gray-200 border-black">
      <h4 class="w-[70vw] text-left p-2 pl-4">Gerobok Rezeki Tok Din</h4>
      <marqueeText :repeat="5" class="w-[35vw] border-black border-2 p-3">
        <h1 class="text-red-300">Hidup Tok Din 
          | Kami belia menyokong pimpinan Tok Din</h1>
        
      </marqueeText>
    </nav>
    <section class="h-[80vh] border-2 border-black bg-gray-400 p-4">
      <aside class="w-[20vw] bg-gray-600 h-[70vh] flex">
        <button>+ Add</button>
        <button>- Donate</button>
      </aside>
    </section>
  </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "Add",
  components: {
    MarqueeText,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
