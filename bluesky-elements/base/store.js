import { createApp, reactive } from "https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js";

export function createGlobalState() {
  window.store = reactive({
    count: 0,
    inc() {
      console.log("click");
      this.count++;
      console.log(this.count);
    },
  });

  createApp({ store }).mount();
}
