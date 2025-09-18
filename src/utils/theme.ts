

export function setDarkMode(isDark: boolean) {
  localStorage.setItem("darkMode", String(isDark));
  document.documentElement.classList.toggle("dark", isDark);
}

export function toggleDarkMode(currentMode: boolean): boolean {
  const newMode = !currentMode;
  setDarkMode(newMode);
  return newMode;
}
