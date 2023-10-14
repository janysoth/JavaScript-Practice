import { onMounted, onUnmounted } from "vue";

export default function useWindowEvent(eventName, handleEvent) {
  onMounted(() => window.addEventListener(eventName, handleEvent));
  onUnmounted(() => window.addEventListener(eventName, handleEvent));
}