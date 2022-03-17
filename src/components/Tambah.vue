<template>
  <div class="p-5">
    <fieldset>
      <legend>Tambah Barang</legend>
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
        {{ selected.text }} {{selected.quantity}}
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
      quantity: "",
      selected: "",
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
      // this.quantity++;
      this.quantity++;
    },
    kurangItem() {
      if (this.quntity > 0) this.quantity--;
      else {
        this.quantity = 0;
      }
    },
  },
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
