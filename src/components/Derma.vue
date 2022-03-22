<template>
  <div class="p-5">
    <fieldset class="p-5">
      <legend class="text-2xl font-bold">Derma</legend>
      <button @click="newDerma= !newDerma"
        class="w-[10vw] rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
      >
        Derma Baru
      </button>
    </fieldset>

    <section v-if="newDerma">
      <v-select label="text" v-model="selected" :options="listbarang">
      </v-select>

      <section v-if="selected" class="border-2 border-gray-800 mt-4 p-1 flex">
        <div  class="w-[70vw]  p-2">
          {{ selected.text }}
        </div>
        <div class="invisible">
          {{render2()}}
        </div>
        <div
          class="w-[50vw] h-[7vh] text-center flex items-center justify-center bg-gray-200"
        >
          <div class="border-2 border-black p-1" >
            Quantity:
            {{ updateQuantity}}
          </div>

          <button class="p-2" @click="tambahItem">
            <i class="fas fa-plus"></i>
          </button>
          <input
            type="text"
            v-model="quantity"
            class="w-[3vw] border-2 border-black rounded text-center"
          />

          <button class="p-2" @click="kurangItem">
            <i class="fas fa-minus"></i>
          </button>
          <button
          @click="derma"
            class="rounded-full bg-indigo-500 px-4 py-2 text-white"
          >
            Derma
          </button>
        </div>
      </section>



    </section>
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";
import { db } from "../db/db";
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";


export default {
  name: "Derma",
  data(){
    return{
      newDerma:false,
      selected:'',
      updateQuantity:"",
      quantity:0,
    }
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
  methods: {
    tambahItem() {
      this.quantity++;
    },
    kurangItem() {
      if (this.quantity > 0) this.quantity--;
      else {
        this.quantity = 0;
      }
    },
    derma() {
      db.listbarang.update(this.selected.id, {
        quantity: parseInt(this.selected.quantity) - parseInt(this.quantity),
      });
    },
   async render2(){
      const ab = await db.listbarang.get(this.selected.id)
      this.updateQuantity = ab.quantity
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}


</style>
