(function() {
    let switcher = document.querySelector(".switch__checkbox");
    let root = document.querySelector(':root');
    let isDark = false;

    document.addEventListener("DOMContentLoaded", () => {
        isDark = (localStorage.getItem("isDark") === "true");
        applyTheme();
    });

    switcher.addEventListener("input", () => {
        isDark = (!isDark);

        localStorage.clear();
        localStorage.setItem("isDark", isDark.toString());
        
        applyTheme();
    });

    function applyTheme() {
        if(isDark){
            switcher.checked = true;
            root.classList.add("theme-dark");
        }
        else {
            switcher.checked = false;
            root.classList.remove("theme-dark");
        }
    }
}())