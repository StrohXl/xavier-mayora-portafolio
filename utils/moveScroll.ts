export default function (position: string) {
  const item = document.getElementById(position);
    item?.scrollIntoView({behavior:'smooth'})
}
