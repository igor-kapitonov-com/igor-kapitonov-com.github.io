(function()
{
    const theme = localStorage.getItem("theme");
    if(theme === null) // First visit / no localStorage
    {
        const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
        localStorage.setItem("theme", themePreference === "dark" ? "dark" : "light");
        this.document.querySelector("[data-theme]").dataset.theme = themePreference ? "dark" : "light";
    }
    else // Subsequent visits with localStorage
    {
        this.document.querySelector("[data-theme]").dataset.theme = theme;
    }
    const themeToggleIcon = document.getElementById("theme-toggle-icon");
    themeToggleIcon.textContent = (this.localStorage.getItem("theme") === "dark") ? "🌞" : "🌙";

    return;
})();