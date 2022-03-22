<template>
  <div class="home">
    <div class="container p-2">
      <nav
        class="h-[10vh] flex justify-center place-items-center bg-gray-200 border-black"
      >
        <h4 class="w-[70vw] text-left p-2 pl-4 text-2xl">
          Gerobok Rezeki Tok Din
        </h4>
        <marqueeText
          :repeat="5"
          class="w-[40vw] h-[10vh] m-2 mb-3 border-black border-2 p-3 bg-gray-500"
        >
          <h1 class="text-black-300 text-3xl font-bold">
            <i class="fas fa-grip-lines-vertical text-blue-500"></i>
            Hidup Tok Din
            <i class="fas fa-grip-lines-vertical text-blue-500"></i> Kami belia
            menyokong pimpinan Tok Din
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
            @click="
              (showTambah = false), (showDerma = false), (homesArea = true)
            "
            >Home</router-link
          >
          <router-view />
          <button
            class="h-[5vh] w-[10vw] bg-blue-400 mt-4"
            @click="
              (showTambah = !showTambah),
                (showDerma = false),
                (homesArea = false)
            "
          >
            + Tambah
          </button>
          <button
            class="h-[5vh] w-[10vw] bg-indigo-500 mt-4"
            @click="
              (showDerma = !showDerma),
                (showTambah = false),
                (homesArea = false)
            "
          >
            - Donate
          </button>
        </aside>

        <section class="h-[70vh] w-[80vw] text-center bg-white">
          <Tambah v-if="showTambah" />
          <Derma v-if="showDerma" />
          <section v-if="homesArea" class="p-2 w-70vw]">
            <div class="flex justify-center">
              <img
                class="bg-black h-[15vh]"
                src="https://img.icons8.com/external-becris-flat-becris/64/000000/external-charity-business-world-becris-flat-becris.png"
              />
            </div>
            <h1 class="h-[8vh] text-xl font-extrabold bg-indigo-200 p-2 mt-7 mb-4">
              Senarai Barang
            </h1>
            <section class="flex justify-center">

            <table class="w-[50vw] flex flex-col border-2 border-black shadow-lg bg-white border-separate overflow-scroll" >
              <tr class="flex justify-around content-center bg-blue-100">
                <th class="w-[20vw] py-4">Barang</th>
                <th class="py-4">Quantity</th>
              </tr>
              <tr class="flex justify-around content-center p-1"  v-for="list in listbarang" :key="list.id">
                <td class="w-[20vw]">{{list.text}}</td>
                <td>{{list.quantity}}</td>
              </tr>
            </table>

            </section>
          </section>
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
import { db } from "../db/db";
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";

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
      homesArea: true,
    };
  },
  setup() {
    return {
      listbarang: useObservable(
        liveQuery(async () => {
          return await db.listbarang.toArray();
        })
      ),
    };
  },
};
</script>

<style></style>
