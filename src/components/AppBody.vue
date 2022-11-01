<template>
  <div class="body">
    <div class="inside">
      <img v-if="!loading" src="../../public/still.png" style="height: 200px" />
      <img
        v-if="loading"
        src="../../public/55417-8-bit-coin-flipping-horizontally.gif"
        style="height: 200px"
      />
      <n-button type="primary" @click="Flip">Flip</n-button>
      <h1 v-if="flipOutput != ''">You got : {{ flipOutput }}</h1>
      <h1 v-if="flipCount != ''">Coin flipped : {{ flipCount }}</h1>
    </div>
  </div>
</template>

<script>
import { NButton } from "naive-ui";
import { mapActions, mapState } from "vuex";
export default {
  name: "AppBody",
  components: {
    NButton,
  },
  data() {
    return {
      out: "",
      count: "",
    };
  },
  methods: {
    ...mapActions({
      Flip: "Flip",
    }),
  },
  computed: {
    ...mapState({
      flipOutput: "flipOutput",
      flipCount: "flipCount",
      loading: "loading",
    }),
  },
};
</script>
