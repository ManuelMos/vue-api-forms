<script lang="ts">
import { defineComponent, h, PropType } from "vue";
import { ControlData } from "@/types";

export default defineComponent({
  name: "Control",
  props: {
    data: {
      type: Object as PropType<ControlData>,
      required: true
    }
  },
  render() {
    const on: Record<string, any> = {};
    if (this.data.click) {
      on.click = new Function(this.data.click.arguments, this.data.click.body);
    }
    return h(this.data.type, { on }, this.data.text);
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
