import { createApp } from "petite-vue";
import { store } from "./store.js";

export class baseEl extends HTMLElement {
  constructor() {
    super();
    const attrsUsed = this.getAttributeNames();
    this.state = {};
    for (const attr of attrsUsed) {
      // loop through all attributes and add them to state
      // if the value is true or false, convert to boolean
      let attrValue = this.attributes.getNamedItem(attr).value;
      let isTrueOrFalse = (/^(true|false)$/).test(attrValue.toLowerCase());
      attrValue = (isTrueOrFalse) ? attrValue.toLowerCase() === "true" : attrValue;
      this.state[attr.replace(/-([a-z])/g, (v) => v[1].toUpperCase())] = attrValue
    }
  }
  mount(templateContentHTML, state) {
    this.state = { ...state, ...this.state };
    const template = document.createElement("template");
    template.innerHTML = templateContentHTML();
    this.appendChild(template.content.cloneNode(true));
    createApp(this.state).mount(this);
  }

  mountEl(selector, state) {
    const ComponentState = { ...state, ...this.state }
    const template = document.querySelector(`${selector}`);
    this.appendChild(template.content.cloneNode(true));
    createApp({ComponentState, store}).mount(this);
  }
}
