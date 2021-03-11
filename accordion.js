function expand(event){
    event.currentTarget.classList.toggle('expand');
}

var faqs = document.querySelectorAll("section.accordion > main > section");

for(let i = 0; i < faqs.length; i++) {
    const e = faqs[i];

    e.addEventListener("click", expand);
}
