const EVENT_NAME = "keydown";

export function useKeyboard() {
  // To store the registered event listeners
  // Take in KeyboardEvent as a param
  const listeners = [] as ((e: KeyboardEvent) => void)[];

  // Take in a listener function as a param
  // Registers it with the "window" object using addEventListner
  // Returns the index of the listener in the listeners Array
  function addListener(listener: (e: KeyboardEvent) => void) {
    const listenerIndex = listeners.length;
    listeners.push(listener);
    window.addEventListener(EVENT_NAME, listener);
    return listenerIndex;
  }

  // Takes in listeberIndex as a param
  // If the param index exists, it will removed from the "windown" object
  // Using 'splice' method
  function removeListener(listenerIndex: number) {
    if (!listeners[listenerIndex]) return;

    window.removeEventListener(EVENT_NAME, listeners[listenerIndex]);
    listeners.splice(listenerIndex, 1);
  }

  // Remove all registered listeners by iterating over the listners Array
  // Using 'removeEventListener'
  function removeAllListeners() {
    listeners.forEach((listener) => {
      window.removeEventListener(EVENT_NAME, listener);
    });
  }

  return { addListener, removeListener, removeAllListeners };
}