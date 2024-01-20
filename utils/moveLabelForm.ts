const moveLabelForm = (item: string, type: string) => {
  const label = document.getElementById(item);
  if (type == "click") {
    if (label) {
      label.classList.add("-translate-y-5");
      label.classList.add("text-xs");
      label.classList.add("-translate-x-2");
      label.classList.add("text-primary");
    }
  } else {
    if (label) {
        console.log('sdf')
      label.classList.remove("-translate-y-5");
      label.classList.remove("text-xs");
      label.classList.remove("-translate-x-2");
      label.classList.remove("text-primary");
    }
  }
};
export default moveLabelForm;
