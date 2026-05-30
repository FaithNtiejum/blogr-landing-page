/* ============================================
   BLOGR LANDING PAGE - main.js
   Handles: Desktop dropdowns, Mobile nav toggle,
            Mobile sub-dropdowns
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------
     DESKTOP DROPDOWN MENUS
  ---------------------------------------- */
  const navItems = document.querySelectorAll('.nav__item');

  navItems.forEach(function (item) {
    const btn = item.querySelector('.nav__dropdown-btn');

    btn.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      // Close all open dropdowns first
      navItems.forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.nav__dropdown-btn').setAttribute('aria-expanded', 'false');
      });

      // Toggle the clicked one
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close desktop dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav__item')) {
      navItems.forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.nav__dropdown-btn').setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close desktop dropdowns on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      navItems.forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.nav__dropdown-btn').setAttribute('aria-expanded', 'false');
      });
    }
  });


  /* ----------------------------------------
     MOBILE NAV TOGGLE (Hamburger)
  ---------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger.addEventListener('click', function () {
    const isOpen = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', function (e) {
    if (
      !e.target.closest('.mobile-nav') &&
      !e.target.closest('#hamburger')
    ) {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    }
  });


  /* ----------------------------------------
     MOBILE SUB-DROPDOWN MENUS
  ---------------------------------------- */
  const mobileDropdownBtns = document.querySelectorAll('.mobile-nav__dropdown-btn');

  mobileDropdownBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const parentItem = btn.closest('.mobile-nav__item');
      const subMenu = parentItem.querySelector('.mobile-nav__dropdown');
      const isOpen = subMenu.classList.contains('open');

      // Close all mobile sub-menus first
      document.querySelectorAll('.mobile-nav__dropdown').forEach(function (menu) {
        menu.classList.remove('open');
      });
      document.querySelectorAll('.mobile-nav__dropdown-btn').forEach(function (b) {
        b.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
      });

      // Toggle the clicked one
      if (!isOpen) {
        subMenu.classList.add('open');
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

});
