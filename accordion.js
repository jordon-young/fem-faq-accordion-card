function collapseAll(event) {
  document.querySelectorAll(`.accordion article:not(${event.currentTarget})`).forEach((el) => {
    el.classList.remove("expand");
  });
}

function expand(event) {
  collapseAllOthers(event);
  event.currentTarget.classList.toggle("expand");
}

function collapseOne(element) {
  element.classList.remove("expand");
}

const faqs = document.querySelectorAll(".accordion article");
faqs.forEach((faq) => {
  faq.addEventListener("click", expand);
});
