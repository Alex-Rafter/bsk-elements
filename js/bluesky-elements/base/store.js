import { createApp, reactive } from "petite-vue";

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
