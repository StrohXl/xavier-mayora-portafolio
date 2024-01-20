import itemForms from "~/data/itemForms";

const eventListenerLabel = () => {
  const labelFirstName = document.getElementById(itemForms[0].idLabel);
  const labelLastName = document.getElementById(itemForms[1].idLabel);
  const labelEmail = document.getElementById(itemForms[2].idLabel);
  const labelBody = document.getElementById(itemForms[3].idLabel);
  const firstName: HTMLElement | null | { value: string } =
    document.getElementById(itemForms[0].for);
  const lastName = document.getElementById(itemForms[1].for);
  const email = document.getElementById(itemForms[2].for);
  console.log(email);
  const body = document.getElementById(itemForms[3].for);
  window.addEventListener("click", (item) => {
    if (item.target) {
      if (item.target == labelBody || item.target == body) {
        moveLabelForm("label-body", "click");
        moveLabelForm("label-firstName", "");
        moveLabelForm("label-lastName", "");
        moveLabelForm("label-email", "");
      }
      if (item.target == labelEmail || item.target == email) {
        moveLabelForm("label-email", "click");
        moveLabelForm("label-firstName", "");
        moveLabelForm("label-lastName", "");
        moveLabelForm("label-body", "");
      }
      if (item.target == labelFirstName || item.target == firstName) {
        moveLabelForm("label-firstName", "click");
        moveLabelForm("label-body", "");
        moveLabelForm("label-lastName", "");
        moveLabelForm("label-email", "");
      }
      if (item.target == labelLastName || item.target == lastName) {
        moveLabelForm("label-lastName", "click");
        moveLabelForm("label-firstName", "");
        moveLabelForm("label-body", "");
        moveLabelForm("label-email", "");
      }
      if (
        item.target != firstName &&
        item.target != lastName &&
        item.target != email &&
        item.target != body
      ) {
        if (firstName) {
          moveLabelForm("label-firstName", "");
        }
        moveLabelForm("label-lastName", "");
        moveLabelForm("label-email", "");
        moveLabelForm("label-body", "");
      }
    }
  });
};
export default eventListenerLabel;
