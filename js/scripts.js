const changeThemeBtn = document.querySelector("#change-theme");

// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Save theme mode
function saveThemeMode() {
    const darkMode = localStorage.getItem("dark");

    if(darkMode) {
        toggleDarkMode();
    }
}

saveThemeMode();


changeThemeBtn.addEventListener("change", function () {
    toggleDarkMode();

    // Aqui estamos removendo a propriedade dark, para que se no futuro for trocado, ela seja substituida
    localStorage.removeItem("dark");
// Aqui estamos salvando a propriedade que é a classe dark se ela tiver sido ativada
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
});

