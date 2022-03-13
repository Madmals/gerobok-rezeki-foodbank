<template>
  <div class="home">
    <!-- <div class="area">
      <Tambah v-if="showTambah" />
    </div> -->
    <div class="container p-2">
      <nav
        class="h-[10vh] flex justify-center place-items-center bg-gray-200 border-black"
      >
        <h4 class="w-[70vw] text-left p-2 pl-4 text-2xl">
          Gerobok Rezeki Tok Din
        </h4>
        <marqueeText
          :repeat="5"
          class="w-[35vw] border-black border-2 p-3 bg-gray-500"
        >
          <h1 class="text-black-300 text-3xl font-bold">
            Hidup Tok Din | Kami belia menyokong pimpinan Tok Din |
          </h1>
        </marqueeText>
      </nav>
      <section class="h-[80vh] border-2 border-black bg-gray-400 p-4 flex">
        <aside
          class="w-[20vw] bg-gray-600 h-[70vh] flex flex-col align-middle items-center p-2"
        >
          <router-link
            class="h-[5vh] w-[10vw] mt-4 text-center bg-indigo-700"
            to="/"
            >Home</router-link
          >
          <router-view />
          <button class="h-[5vh] w-[10vw] bg-blue-400 mt-4"  @click="showTambah = !showTambah; showDerma = false">+ Tambah</button>
          <button class="h-[5vh] w-[10vw] bg-indigo-500 mt-4" @click="showDerma = !showDerma; showTambah = false">
            - Donate
          </button>
        </aside>

        <section class="h-[70vh] w-[80vw] bg-white">
          <Tambah v-if="showTambah" />
          <Derma v-if="showDerma" />
        </section>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Tambah from "../components/Tambah.vue";
import Derma from "../components/Derma.vue";
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "Home",
  components: {
    Tambah,
    MarqueeText,
    Derma,
  },
  data() {
    return {
      showDerma: false,
      showTambah: false,
    };
  },
};
</script>

<style></style>
