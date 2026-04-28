const root = document.documentElement;
const body = document.body;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const profileToggle = document.querySelector("[data-profile-toggle]");
const profilePanel = document.getElementById("profile-panel");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeToggleCopy = document.querySelector(".theme-toggle-copy");

const sideNav = document.querySelector(".side-nav");
const sideNavLinks = document.querySelectorAll("[data-section-link]");
const siteNavLinks = document.querySelectorAll(".site-nav a, .side-nav a, .footer-links a");
const revealElements = document.querySelectorAll(".reveal");
const stripTrack = document.querySelector(".strip-track");
const interactiveShells = document.querySelectorAll(
  ".interactive-shell, .portrait-orbit, .identity-card, .project-card"
);
const tiltItems = document.querySelectorAll("[data-tilt]");
const customCursor = document.querySelector(".cursor-glow");

const motionEnabled = () =>
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches &&
  window.matchMedia("(pointer: fine)").matches &&
  window.innerWidth > 820;

let pointerX = window.innerWidth / 2;
let pointerY = window.innerHeight / 2;
let scrollFrame = false;
let lastScrollY = window.scrollY;

const setTheme = (theme) => {
  root.dataset.theme = theme;
  window.localStorage.setItem("portfolio-theme", theme);

  if (themeToggleCopy) {
    themeToggleCopy.textContent = theme === "light" ? "Dark" : "Light";
  }
};

const savedTheme = window.localStorage.getItem("portfolio-theme");
setTheme(savedTheme || "dark");


const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

if (stripTrack) {
  stripTrack.innerHTML += stripTrack.innerHTML;
}

const setSectionLinkState = (activeId) => {
  sideNavLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.sectionLink === activeId);
  });
};

setSectionLinkState("top");

const sectionIds = ["experience", "whoami", "skills", "terminal", "contact"];

const updateActiveSection = () => {
  const scrollY = window.scrollY;
  const headerOffset = 116;

  for (const id of sectionIds) {
    const section = document.getElementById(id);
    if (!section) continue;

    const sectionTop = section.offsetTop - headerOffset - 100;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      setSectionLinkState(id);
      return;
    }
  }

  if (scrollY < 300) {
    setSectionLinkState("top");
  }
};

updateActiveSection();

const closeProfilePanel = () => {
  if (!profilePanel || !header) {
    return;
  }

  profilePanel.hidden = true;
  header.classList.remove("is-profile-open");
  profileToggle?.setAttribute("aria-expanded", "false");
};

const openProfilePanel = () => {
  if (!profilePanel || !header) {
    return;
  }

  profilePanel.hidden = false;
  header.classList.add("is-profile-open");
  profileToggle?.setAttribute("aria-expanded", "true");
};

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  setTheme(nextTheme);
});

navToggle?.addEventListener("click", () => {
  const navOpen = header?.classList.toggle("is-nav-open");
  navToggle.setAttribute("aria-expanded", String(Boolean(navOpen)));
});

profileToggle?.addEventListener("click", () => {
  if (!profilePanel) {
    return;
  }

  if (profilePanel.hidden) {
    openProfilePanel();
  } else {
    closeProfilePanel();
  }
});

document.addEventListener("click", (event) => {
  if (!header || !profilePanel || profilePanel.hidden) {
    return;
  }

  if (!header.contains(event.target)) {
    closeProfilePanel();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProfilePanel();
    header?.classList.remove("is-nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

siteNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("is-nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});



const updatePointer = () => {
  root.style.setProperty("--cursor-x", `${pointerX}px`);
  root.style.setProperty("--cursor-y", `${pointerY}px`);
};

window.addEventListener("pointermove", (event) => {
  pointerX = event.clientX;
  pointerY = event.clientY;
  updatePointer();
});

interactiveShells.forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    item.style.setProperty("--mx", `${x}%`);
    item.style.setProperty("--my", `${y}%`);
  });
});

tiltItems.forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    if (!motionEnabled()) {
      return;
    }

    const rect = item.getBoundingClientRect();
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
    const elevate = item.classList.contains("identity-card") ? -6 : -4;

    item.style.transform =
      `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${elevate}px)`;
  });

  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
});

const updateChrome = () => {
  const currentScrollY = window.scrollY;
  const isCompact = currentScrollY > 8;
  const isMobile = window.innerWidth <= 820;
  const navIsOpen = header?.classList.contains("is-nav-open");
  const profileIsOpen = header?.classList.contains("is-profile-open");

  if (header) {
    header.classList.toggle("is-compact", isCompact);

    if (navIsOpen || profileIsOpen || currentScrollY < 110 || currentScrollY < lastScrollY - 2) {
      header.classList.remove("is-hidden");
    } else if (currentScrollY > lastScrollY + 2) {
      header.classList.add("is-hidden");
    }
  }

  if (sideNav) {
    sideNav.classList.toggle("is-visible", !isMobile && currentScrollY > window.innerHeight * 0.45);
  }

  lastScrollY = currentScrollY;
};

const handleScrollEffects = () => {
  updateChrome();
  updateActiveSection();
  scrollFrame = false;
};

const requestScrollFrame = () => {
  if (scrollFrame) {
    return;
  }

  scrollFrame = true;
  window.requestAnimationFrame(handleScrollEffects);
};

window.addEventListener("scroll", requestScrollFrame, { passive: true });
window.addEventListener("resize", () => {
  header?.classList.remove("is-nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  requestScrollFrame();
});

updatePointer();
updateChrome();




// Hide custom cursor over iframe to allow native interaction without visual bugs
const pContainer = document.querySelector('.pacman-container');
if (pContainer && customCursor) {
  pContainer.addEventListener('mouseenter', () => {
    customCursor.style.opacity = '0';
  });
  pContainer.addEventListener('mouseleave', () => {
    customCursor.style.opacity = '1';
  });
}

