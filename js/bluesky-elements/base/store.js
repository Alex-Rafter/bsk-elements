import { createApp, reactive } from "petite-vue";

export const store = reactive({
    count: 0,
    msg : 'hello store world',
    inc() {
      console.log("click");
      this.count++;
      console.log(this.count);
    },
  });

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
