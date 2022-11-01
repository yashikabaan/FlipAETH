<template>
  <div class="header">
    <n-button strong secondary type="primary" @click="connect()">{{
      accountAddress
    }}</n-button>
  </div>
</template>

<script>
import { NButton } from "naive-ui";
import { mapActions, mapState } from "vuex";
export default {
  name: "AppHeader",
  components: {
    NButton,
  },
  methods: {
    ...mapActions({
      connect: "connect",
    }),
  },
  computed: {
    ...mapState({
      account: "account",
    }),
    accountAddress() {
      if (this.account != "") {
        let s = this.account;
        return s.slice(0, 4).concat(".......").concat(s.slice(38, 42));
      } else {
        return "Connect Wallet";
      }
    },
  },
};
</script>
