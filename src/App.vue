<template>
  <div id="app">
    <Control :data="button" />
    <Control :data="div" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Control from "./components/Control.vue";

export default defineComponent({
  components: {
    Control,
  },
  data() {
    return {
      button: {
        type: "button",
        text: "button of the beast",
        click: { arguments: "a", body: "alert('666');" },
      },
      div: {
        type: "div",
        text: "div of the beast",
      },
    };
  },
  methods: {
    yeah() {
      alert("yeah");
    },
  },
});
</script>
