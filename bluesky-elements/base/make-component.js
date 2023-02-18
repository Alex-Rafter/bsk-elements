import { baseEl } from "./base-class.js";

export function makeComponent(tagName, templateId, state = {}) {
  const className = `${tagName.replace(/-([a-z])/, (v) => v[1].toUpperCase())}`;
  const obj = {};
  const definingAttr =  Object.keys(state).length !== 0 ? 'bsk-advanced' : 'bsk-simple'

  obj[className] = class extends baseEl {
    constructor() {
      super();
      this.mountEl(templateId, state);
    }
    connectedCallback() {
      this.setAttribute(definingAttr, '');
      if (Object.keys(state).includes('mounted')) {
        this.state.mounted()
      }
    }
    disconnectedCallback() {
      if (Object.keys(state).includes('unmounted')) {
        this.state.unmounted()
      }
    }
  };

  customElements.define(tagName, obj[className]);
}

