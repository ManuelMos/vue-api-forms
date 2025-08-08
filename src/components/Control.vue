<template>
  <component :is="data.type" v-on="listeners">
    {{ data.text }}
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { ControlData } from "@/types";

export default defineComponent({
  name: "Control",
  props: {
    data: {
      type: Object as PropType<ControlData>,
      required: true,
    },
  },
  setup(props) {
    const listeners = computed(() => {
      const on: Record<string, unknown> = {};
      if (props.data.click) {
        on.click = new Function(
          props.data.click.arguments,
          props.data.click.body
        );
      }
      return on;
    });

    return { listeners };
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
