function collapseAllOthers(event) {
  document.querySelectorAll(`.accordion > article:not(#${event.currentTarget.id})`).forEach((el) => {
    el.classList.remove("expand");
  });
}

function toggle(event) {
  collapseAllOthers(event);
  event.currentTarget.classList.toggle("expand");
}

/*
    Setup
*/
const faqs = document.querySelectorAll(".accordion article");
faqs.forEach((faq) => {
  faq.addEventListener("click", collapseAllOthers);
  faq.addEventListener("click", toggle);
});
