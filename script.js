const myProjects = document.getElementById("myProjects");
const aboutMe = document.getElementById("aboutMe");
const contact = document.getElementById("contact");

function scroll(selector, i) {
    i = 0;
    const selectors = document.querySelectorAll(selector);  
    if (selectors.length > i) {
        selectors[i].scrollIntoView({ behavior: 'smooth' });
    }
}

aboutMe.addEventListener("click", () => {scroll('.header');});
myProjects.addEventListener("click", () => {scroll('.header', 1);});
contact.addEventListener("click", () => {scroll('.socialmedia');});
