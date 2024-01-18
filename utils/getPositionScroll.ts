export default function () {
  const position = ref(0);
  window.addEventListener("scroll", () => {
    const positionScroll = window.scrollY;
    position.value = positionScroll;
  });
  return position;
}
