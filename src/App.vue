<template>
  <AppHeader />

  <AppBody />
  <AppFooter />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppBody from "./components/AppBody.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppBody,
    AppFooter,
  },
};
</script>
