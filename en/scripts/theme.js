// window.onload = (event) =>
document.addEventListener("DOMContentLoaded", function()
{
    // Theme selector
    const theme = localStorage.getItem("theme");
    const themeElement = document.documentElement;
    const themeToggleIcon = document.getElementById("theme-toggle-icon");

    if(theme === null) // First visit / no localStorage
    {
        const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        localStorage.setItem("theme", themePreference);
        themeElement.dataset.theme = themePreference;
    }
    else // Subsequent visits with localStorage
    {
        themeElement.dataset.theme = theme;
    }
    themeToggleIcon.textContent = (localStorage.getItem("theme") === "dark") ? "🌞" : "🌙";

    return;
});

const themeToggle = document.getElementById("theme-toggle");
if(themeToggle)
{
    themeToggle.addEventListener("click", function ()
    {
        const themeElement = document.querySelector("[data-theme]");
        const themeToggleIcon = document.getElementById("theme-toggle-icon");
        if(themeElement.dataset.theme === "dark")
        {
            themeElement.dataset.theme = "light";
            themeToggleIcon.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
        else // light
        {
            themeElement.dataset.theme = "dark";
            themeToggleIcon.textContent = "🌞";
            localStorage.setItem("theme", "dark");
        }
        return;
    });
}