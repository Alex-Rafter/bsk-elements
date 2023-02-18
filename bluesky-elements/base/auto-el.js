import { makeComponent } from "./make-component.js";
import { stateObjects } from "../state-objects/index.js";

export function autoGenerateBskElements() {
  window.addEventListener("DOMContentLoaded", () => {
    const ts = Array.from(document.querySelectorAll("template[bsk-element]"));
    const tagName = (t) => t.getAttribute("bsk-element");
    const camelCaseTagName = (t) =>
      `${tagName(t).replace(/-([a-z])/g, (v) => v[1].toUpperCase())}`;

    const quickComponent = async (t) => {
      const state = !stateObjects[camelCaseTagName(t)]
        ? {}
        : stateObjects[camelCaseTagName(t)];

      makeComponent(
        `${tagName(t)}`,
        `template[bsk-element="${tagName(t)}"]`,
        state
      );
    };

    ts.forEach(quickComponent);
  });
}
