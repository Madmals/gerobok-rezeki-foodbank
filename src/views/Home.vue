<template>
  <div class="container">
    <Add />
  </div>
</template>

<script>
// @ is an alias to /src
import Add from "@/components/Add.vue";

export default {
  name: "Home",
  components: {
    Add,
  },
};
</script>
