import { createApp } from "petite-vue";
import { store } from "./store.js";
import { transitionDirective } from "vue-petite-transition";

export class baseEl extends HTMLElement {
  constructor() {
    super();
    const attrsUsed = this.getAttributeNames();
    this.state = {};
    for (const attr of attrsUsed) {
      // loop through all attributes and add them to state
      // if the value is true or false, convert to boolean
      let attrValue = this.attributes.getNamedItem(attr).value;
      let isTrueOrFalse = /^(true|false)$/.test(attrValue.toLowerCase());
      attrValue = isTrueOrFalse
        ? attrValue.toLowerCase() === "true"
        : attrValue;
      this.state[attr.replace(/-([a-z])/g, (v) => v[1].toUpperCase())] =
        attrValue;
    }
  }
  mountEl(selector, state) {
    const statesMerged = { ...state, ...this.state };
    const ComponentState = () => statesMerged;
    const template = document.querySelector(`${selector}`);
    this.appendChild(template.content.cloneNode(true));
    this.setAttribute("v-scope", "ComponentState()");
    createApp({ ComponentState, store })
      .directive("transition", transitionDirective)
      .mount(this);
  }
}
