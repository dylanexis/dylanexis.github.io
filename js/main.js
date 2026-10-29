const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Highlight the resume section currently in view
const resumeLinks = document.querySelectorAll("#resume-nav a");

if (resumeLinks.length > 0) {
    const sections = [...resumeLinks].map((link) =>
        document.querySelector(link.getAttribute("href"))
    );

    const setActive = () => {
        let current = sections[0];
        for (const section of sections) {
            if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) {
                current = section;
            }
        }
        resumeLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + current.id);
        });
    };

    window.addEventListener("scroll", setActive);
    setActive();
}
