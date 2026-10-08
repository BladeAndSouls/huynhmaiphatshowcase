/**
 * ====================================================================
 * CONTROLLER TUẦN 4: DESIGN SYSTEM & TƯ DUY RESPONSIVE
 * Tác giả: Huỳnh Mai Phát
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initHamburgerMenu();
  initDarkThemeToggle();
});

// Bài 3: Smart Navigation Bar (Toggle menu hamburger trên di động)
function initHamburgerMenu() {
  const hamburgerBtn = document.querySelector('.btn-hamburger');
  const mobileNavPanel = document.querySelector('.mobile-nav-panel');

  if (hamburgerBtn && mobileNavPanel) {
    hamburgerBtn.addEventListener('click', () => {
      mobileNavPanel.classList.toggle('is-open');
      const isOpen = mobileNavPanel.classList.contains('is-open');
      hamburgerBtn.textContent = isOpen ? '✕' : '☰';
    });
  }
}

// Bài 4: Dark/Light Mode Theme System
// Tạo class .dark-theme để ghi đè biến màu tại body
function initDarkThemeToggle() {
  const themeToggleBtn = document.querySelector('.btn-theme-toggle');
  if (!themeToggleBtn) return;

  const isDarkMode = localStorage.getItem('theme_dark_mode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-theme');
    themeToggleBtn.textContent = '☀️ Chế Độ Sáng';
  }

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const hasDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme_dark_mode', hasDark);
    themeToggleBtn.textContent = hasDark ? '☀️ Chế Độ Sáng' : '🌙 Chế Độ Tối';
  });
}
