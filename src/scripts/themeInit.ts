export const initializeTheme = () => {
  const savedTheme = localStorage.getItem("color-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  } else if (prefersDark) {
    document.documentElement.classList.add("dark");
  }
};
