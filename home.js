function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var menuToggleInput = document.querySelector("#menuToggle input");

    menuToggleInput.addEventListener("change", function() {
        if (this.checked) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollStep = 300; // Adjust scroll step as needed

    document.querySelector('.arrow-left').addEventListener('click', function() {
        document.querySelector('.products-list').scrollBy({
            left: -scrollStep,
            behavior: 'smooth'
        });
    });

    document.querySelector('.arrow-right').addEventListener('click', function() {
        document.querySelector('.products-list').scrollBy({
            left: scrollStep,
            behavior: 'smooth'
        });
    });
});
