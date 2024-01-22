export default function (position: string) {
  const item = document.getElementById(position);
  if (position == "Contact") {
    if (item?.offsetTop) {
      window.scrollTo({ top: item?.offsetTop - 100, behavior: "smooth" });
    }
  } else {
    item?.scrollIntoView({ behavior: "smooth" });
  }
}
