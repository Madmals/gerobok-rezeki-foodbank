<template>
  <div class="p-5">
    <fieldset>
      <legend class="text-2xl font-bold">Tambah Barang</legend>
      <label for="name"
        >Barang:
        <input
          v-model="barang"
          class="border-2 border-black rounded"
          type="text"
        />
      </label>
      <label for="quantity" class="pl-2"
        >Quantity:
        <span>
          <button class="p-2" @click="tambahItem">
            <i class="fas fa-plus"></i>
          </button>
          <input
            type="text"
            v-model="quantity"
            class="w-[5vw] border-2 border-black rounded text-center"
          />
          <button class="p-2" @click="kurangItem">
            <i class="fas fa-minus"></i>
          </button>
        </span>
      </label>
    </fieldset>
    <button
      class="w-[12vw] h-[7vh] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      @click="addBarang"
    >
      ADD
    </button>
    <div class="p-4 pl-0">
      <v-select label="text" v-model="selected" :options="listbarang">
      </v-select>
      <div v-if="selected" class="border-2 border-gray-800 mt-4 p-1 flex">
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
          @click="test"
            class="rounded-full bg-indigo-500 px-4 py-2 text-white"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";
import { db } from "../db/db";
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";

export default {
  name: "add",
  data() {
    return {
      barang: "",
      quantity: 0,
      selected: "",
      updateQuantity:""
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
  methods: {
    addBarang() {
      db.addBarang(this.barang, this.quantity);
    },
    tambahItem() {
      this.quantity++;
    },
    kurangItem() {
      if (this.quantity > 0) this.quantity--;
      else {
        this.quantity = 0;
      }
    },
    test() {
      db.listbarang.update(this.selected.id, {
        quantity: parseInt(this.selected.quantity) + parseInt(this.quantity),
      });
    },
   async render2(){
      const ab = await db.listbarang.get(this.selected.id)
      this.updateQuantity = ab.quantity
    },
  },
  // updated(){
  //   console.log(this.selected)
  //   if(typeof this.selected.text === 'string')
  //     return this.render2()
  // }
};
</script>

<style>
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
