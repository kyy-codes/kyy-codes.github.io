/* Builds the page from SITE (see data.js). You normally don't need to edit this file. */

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tags = (list) => `<ul class="tags">${list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;

const ICONS = {
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>'
};

/* ---------- Light / dark mode ---------- */
const THEME_ICONS = {
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>'
};

function setupTheme() {
  const button = $("#theme");
  const apply = (theme) => {
    document.documentElement.dataset.theme = theme;
    const dark = theme === "dark";
    button.innerHTML = dark ? THEME_ICONS.sun : THEME_ICONS.moon;
    button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    button.title = dark ? "Light mode" : "Dark mode";
  };
  apply(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) { }
  });
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2600);
}

function setLink(el, url, icon) {
  el.innerHTML = icon;
  if (url) { el.href = url; return; }
  el.href = "#";
  el.addEventListener("click", (e) => { e.preventDefault(); toast("Add this link in js/data.js"); });
}

/* ---------- Main page ---------- */
const screen = (cls, src, alt) =>
  `<div class="${cls}${src ? "" : " empty"}">${src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">` : ""}</div>`;

/* Draws a laptop and/or phone frame around the project's screenshots */
const renderMock = (p) => {
  const laptop = `<div class="laptop">${screen("laptop-screen", p.thumb, `${p.title} website`)}<div class="laptop-base"></div></div>`;
  const phone = screen("phone", p.thumbPhone, `${p.title} mobile screen`);
  return p.mockup === "phone" ? phone : p.mockup === "laptop" ? laptop : laptop + phone;
};

const renderJob = (j) => `
  <article class="job">
    <div>
      <h3>${esc(j.title)}</h3>
      <div class="meta">${esc(j.org)} &middot; ${esc(j.date)}</div>
      <ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
    </div>
    ${(j.photos || []).length ? `<div class="gallery">${j.photos.slice(0, 3).map((src) =>
  `<figure><img src="${esc(src)}" alt="${esc(j.title)}, ${esc(j.org)}" loading="lazy"></figure>`).join("")}</div>` : ""}
  </article>`;

/* If a photo file is missing, show a neat placeholder tile instead of a broken image */
function handleMissingPhotos() {
  document.querySelectorAll(".gallery img, .mock img, .ophoto img").forEach((img) => {
    const fail = () => { img.parentNode.classList.add("empty"); img.remove(); };
    if (img.complete && !img.naturalWidth) fail();
    else img.addEventListener("error", fail, { once: true });
  });
}
function renderHome() {
  $("#h-name").textContent = `Hello, I’m ${SITE.name}.`;
  $("#h-role").textContent = SITE.role;
  $("#h-intro").textContent = SITE.intro;
  const light = SITE.photoLight || SITE.photo, dark = SITE.photoDark || light;
  $("#photo").innerHTML = light
    ? `<img class="ph-light" src="${esc(light)}" alt="Portrait of ${esc(SITE.name)}"><img class="ph-dark" src="${esc(dark)}" alt="" aria-hidden="true">`
    : "<div>SA<small>Profile photo placeholder</small></div>";

  ["#h-li", "#c-li"].forEach((s) => setLink($(s), SITE.linkedin, ICONS.linkedin));

  $("#about-text").innerHTML = SITE.about.map((p) => `<p>${esc(p)}</p>`).join("");

  $("#exp").innerHTML =
    `<div class="tabs" role="tablist">${SITE.experience.map((g, i) =>
      `<button class="tab${i ? "" : " on"}" role="tab" data-t="${i}" aria-selected="${!i}">${esc(g.group)}</button>`).join("")}</div>` +
    SITE.experience.map((g, i) =>
      `<div class="exp-group" role="tabpanel" data-p="${i}"${i ? " hidden" : ""}>${g.items.map(renderJob).join("")}</div>`).join("");
  $("#exp").addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    document.querySelectorAll(".tab").forEach((t) => { t.classList.toggle("on", t === tab); t.setAttribute("aria-selected", t === tab); });
    document.querySelectorAll(".exp-group").forEach((p) => { p.hidden = p.dataset.p !== tab.dataset.t; });
  });

  $("#proj").innerHTML = SITE.projects.map((p, i) => `
    <a class="pcard" href="#project-${p.id}" aria-label="View ${esc(p.title)} details">
      <span class="pnum">${String(i + 1).padStart(2, "0")}</span>
      <div class="mock mock-${p.mockup || "both"}">${renderMock(p)}</div>
      <div class="pcap"><strong>${esc(p.title)}</strong><span>${esc(p.category || "")}</span></div>
    </a>`).join("");

  $("#skills-grid").innerHTML = Object.entries(SITE.skills)
    .map(([group, items]) => `<div><h3>${esc(group)}</h3>${tags(items)}</div>`).join("");

  const e = SITE.education;
  $("#edu").innerHTML = `<h3>${esc(e.degree)}</h3><p>${esc(e.school)}</p><p class="muted">${esc(e.year)} &middot; ${esc(e.gpa)}</p>`;

  $("#c-text").textContent = SITE.contactText;
  const mail = $("#c-mail");
  mail.href = `mailto:${SITE.email}`;
  mail.textContent = SITE.email;
  $("#foot").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;
}

/* ---------- Other projects page ---------- */
function renderOthers() {
  const o = SITE.otherProjects;
  $("#o-intro").textContent = o.intro;
  $("#o-list").innerHTML = o.items.map((p) => `
    <article class="ocard">
      <figure class="ophoto${p.photo ? "" : " empty"}">${p.photo ? `<img src="${esc(p.photo)}" alt="${esc(p.title)}" loading="lazy">` : ""}</figure>
      <div class="obody">
        <h3>${esc(p.title)}</h3>
        <div class="ocat">${esc(p.category)}</div>
        <p>${esc(p.desc)}</p>
        ${p.tech ? tags(p.tech) : ""}
        ${p.link ? `<a class="btn ghost sm" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkLabel || "View project")}</a>` : ""}
      </div>
    </article>`).join("");
}

/* ---------- Navigation and CV buttons ---------- */
const SECTION_IDS = ["home", "about", "experience", "projects", "skills", "contact"];

function setupNav() {
  $("#navlinks").innerHTML = SECTION_IDS
    .map((id) => `<a href="#${id}" data-s="${id}">${id[0].toUpperCase() + id.slice(1)}</a>`).join("");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll("#navlinks a").forEach((a) => a.classList.toggle("on", a.dataset.s === entry.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  SECTION_IDS.forEach((id) => observer.observe(document.getElementById(id)));

  document.querySelectorAll("[data-cv]").forEach((a) => {
    if (SITE.cv) { a.href = SITE.cv; a.setAttribute("download", ""); return; }
    a.addEventListener("click", (e) => { e.preventDefault(); toast("CV file not linked yet. Set cv in js/data.js"); });
  });
}

/* ---------- Project page ---------- */
const section = (title, html) => `<h4>${title}</h4>${html}`;
const isImage = (s) => /\.(png|jpe?g|webp|svg)$/i.test(s);

function renderProject(p, index) {
  $("#dtitle").textContent = p.title;
  $("#dsub").innerHTML = tags(p.tech);

  $("#dbody").innerHTML =
    section("Overview", `<p>${esc(p.overview)}</p>`) +
    section("Problem statement", `<p>${esc(p.problem)}</p>`) +
    (p.objectives ? section("Objectives", `<p>${esc(p.objectives)}</p>`) : "") +
    (p.features ? section("Features", `<p>${esc(p.features)}</p>`) : "") +
    section("My role", `<p>${esc(p.role)}</p>`) +
    section("Process", `<ul>${p.process.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`) +
    section("Tools &amp; technologies", tags(p.tech)) +
    section("Final outcome", `<p>${esc(p.outcome)}</p>`) +
    (p.extra || []).map((x) => section(esc(x.h), `<p>${esc(x.p)}</p>`)).join("") +
    section("Screenshots", `<div class="shots">${p.shots.map((s) =>
      `<div class="shot">${isImage(s) ? `<img src="${esc(s)}" alt="${esc(p.title)} screenshot">` : `${esc(s)} placeholder`}</div>`).join("")}</div>`);

  const prev = SITE.projects[index - 1], next = SITE.projects[index + 1];
  $("#dnav").innerHTML =
    (prev ? `<a href="#project-${prev.id}">&larr; ${esc(prev.title)}</a>` : "<span></span>") +
    (next ? `<a href="#project-${next.id}">${esc(next.title)} &rarr;</a>` : "<span></span>");
}

/* ---------- Routing: #project-<id> shows a project page ---------- */
const mainEl = document.querySelector("main");
const detailEl = $("#detail");
const othersEl = $("#others");
const baseTitle = document.title;

function route() {
  const hash = location.hash.slice(1);
  const index = SITE.projects.findIndex((p) => `project-${p.id}` === hash);
  const project = SITE.projects[index];
  const isOthers = hash === "other-projects";

  mainEl.hidden = Boolean(project) || isOthers;
  detailEl.hidden = !project;
  othersEl.hidden = !isOthers;

  if (project) {
    renderProject(project, index);
    document.title = `${project.title} | ${SITE.name}`;
    window.scrollTo(0, 0);
  } else if (isOthers) {
    document.title = `Other projects | ${SITE.name}`;
    window.scrollTo(0, 0);
  } else {
    document.title = baseTitle;
    const target = hash && document.getElementById(hash);
    if (target) target.scrollIntoView();
  }
}

setupTheme();
renderHome();
renderOthers();
handleMissingPhotos();
setupNav();
window.addEventListener("hashchange", route);
route();
