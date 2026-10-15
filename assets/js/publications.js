/* Publications page: By Year / By Topic toggle, topic filter chips, and search.
   State is mirrored in the URL (?view=topic&topic=graph&q=...) so filtered views can be shared. */
(function () {
  var root = document.getElementById('pub-controls');
  if (!root) return;

  var views = { year: document.getElementById('view-year'), topic: document.getElementById('view-topic') };
  var toggles = root.querySelectorAll('.pub-toggle__btn');
  var chips = root.querySelectorAll('.pub-chip');
  var search = document.getElementById('pub-search');

  var params = new URLSearchParams(window.location.search);
  var state = {
    view: params.get('view') === 'topic' ? 'topic' : 'year',
    topic: params.get('topic') || 'all',
    q: params.get('q') || ''
  };
  if (state.topic !== 'all' && !root.querySelector('.pub-chip[data-topic="' + state.topic + '"]')) state.topic = 'all';
  search.value = state.q;

  function norm(s) { return (s || '').toLowerCase(); }

  function syncUrl() {
    var p = new URLSearchParams();
    if (state.view !== 'year') p.set('view', state.view);
    if (state.topic !== 'all') p.set('topic', state.topic);
    if (state.q) p.set('q', state.q);
    var qs = p.toString();
    history.replaceState(null, '', window.location.pathname + (qs ? '?' + qs : '') + window.location.hash);
  }

  function apply() {
    Object.keys(views).forEach(function (k) { views[k].hidden = (k !== state.view); });
    toggles.forEach(function (b) {
      var on = b.getAttribute('data-view') === state.view;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    chips.forEach(function (c) { c.classList.toggle('is-active', c.getAttribute('data-topic') === state.topic); });

    var view = views[state.view];
    var q = norm(state.q).trim();
    view.querySelectorAll('.pub-group').forEach(function (group) {
      var groupTopic = group.getAttribute('data-group-topic');
      var groupAllowed = !groupTopic || state.topic === 'all' || groupTopic === state.topic;
      var visible = 0;
      group.querySelectorAll('.pub').forEach(function (li) {
        var topics = (li.getAttribute('data-topics') || '').split(' ');
        var ok = groupAllowed &&
          (state.topic === 'all' || topics.indexOf(state.topic) !== -1) &&
          (!q || norm(li.textContent).indexOf(q) !== -1);
        li.hidden = !ok;
        if (ok) {
          visible++;
        }
      });
      group.hidden = visible === 0;
      var link = view.querySelector('.pub-jump a[href="#' + group.id + '"]');
      if (link) link.hidden = visible === 0;
    });

    syncUrl();
  }

  toggles.forEach(function (b) {
    b.addEventListener('click', function () { state.view = b.getAttribute('data-view'); apply(); });
  });
  chips.forEach(function (c) {
    c.addEventListener('click', function () { state.topic = c.getAttribute('data-topic'); apply(); });
  });
  document.querySelectorAll('.pub__topic').forEach(function (t) {
    t.addEventListener('click', function () {
      state.topic = t.getAttribute('data-topic');
      apply();
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  var timer;
  search.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () { state.q = search.value; apply(); }, 120);
  });

  apply();
})();
