import EasyMDE from "easymde";
import "easymde/dist/easymde.min.css";

/**
 * @param {any} element
 */
export function initializeEasyMDE(element, options = {}) {
  return new EasyMDE({
    element,
    ...options,
  });
}
