/* Renders DATA (data.js) into the page. No dependencies. */
(function () {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));
  const el = sel => document.querySelector(sel);
  const heading = label =>
    `<h2 class="sec"><span class="br">[</span> ${esc(label)} <span class="br">]</span></h2>`;
  const meta = parts => parts.filter(Boolean).map(esc).join(', ');

  /* ---------- icon wall (hero) ---------- */
  function renderWall(projects) {
    const apps = (projects || []).flatMap(p => p.apps || []);
    if (!apps.length) return '';
    const tiles = apps.map(a => `
      <a class="tile" href="https://apps.apple.com/app/id${esc(a.id)}" target="_blank" rel="noopener"
         title="${esc(a.name)}" aria-label="${esc(a.name)} on the App Store">
        <img loading="lazy" src="${esc(a.icon)}" alt=""
             onerror="this.closest('.tile').classList.add('noimg')">
        <span>${esc(a.name)}</span>
      </a>`).join('');
    const codebases = (projects || []).filter(p => p.apps && p.apps.length).length;
    return `
      <section class="wall" aria-label="Apps on the App Store">
        <div class="grid">${tiles}</div>
        <p class="wall-cap">
          <strong>${apps.length} apps live on the App Store</strong>, every one a brand built as an
          Xcode target over a shared core, across ${codebases} codebases. Each icon opens its store page.
        </p>
      </section>`;
  }

  /* ---------- projects ---------- */
  function renderProjects(list) {
    if (!list || !list.length) return '';
    return heading('Projects') + list.map(p => `
      <article class="entry">
        <header class="entry-head">
          <h3>${esc(p.name)}${p.status ? ` <em class="badge">${esc(p.status)}</em>` : ''}</h3>
          <span class="when">${meta([p.org, p.period])}</span>
        </header>
        ${p.summary ? `<p class="lead">${p.summary}</p>` : ''}
        ${(p.bullets || []).map(b => `<p>${b}</p>`).join('')}
        ${p.links && p.links.length
          ? `<p class="plinks">${p.links.map(l =>
              `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('')}</p>`
          : ''}
        ${p.apps && p.apps.length
          ? `<p class="tech">${p.apps.length} live app${p.apps.length === 1 ? '' : 's'} on the App Store — see the wall above.</p>` : ''}
        ${p.tech && p.tech.length ? `<p class="tech">${p.tech.map(esc).join(', ')}</p>` : ''}
      </article>`).join('');
  }

  /* ---------- experience ---------- */
  function renderExperience(list) {
    if (!list || !list.length) return '';
    return heading('Experience') + list.map(j => `
      <article class="entry">
        <header class="entry-head">
          <h3>${esc(j.company)}</h3>
          <span class="when">${meta([j.period, j.location])}</span>
        </header>
        ${(j.paragraphs || []).map(p => `<p>${p}</p>`).join('')}
      </article>`).join('');
  }

  /* ---------- skills ---------- */
  function renderSkills(list) {
    if (!list || !list.length) return '';
    return heading('Skills') + `<dl class="skills">` +
      list.map(s => typeof s === 'string'
        ? `<dd>${s}</dd>`
        : `<dt>${esc(s.label)}</dt><dd>${esc(s.items)}</dd>`).join('') + `</dl>`;
  }

  /* ---------- writing ---------- */
  function renderWriting(list) {
    if (!list || !list.length) return '';
    return heading('Writing') + list.map(w => `
      <article class="entry">
        <header class="entry-head">
          <h3>${w.url ? `<a href="${esc(w.url)}" target="_blank" rel="noopener">${esc(w.title)}</a>` : esc(w.title)}</h3>
        </header>
        ${w.summary ? `<p>${w.summary}</p>` : ''}
      </article>`).join('');
  }

  if (typeof DATA === 'undefined') return;
  const wall = el('#wall'); if (wall) wall.innerHTML = renderWall(DATA.projects);
  const main = el('#content');
  if (main) main.innerHTML =
      renderProjects(DATA.projects)
    + renderExperience(DATA.experience)
    + renderWriting(DATA.writing)
    + renderSkills(DATA.skills);
})();
