// Live clock in the fake menu bar.
(function () {
  var el = document.getElementById('clock');
  if (!el) return;
  function tick() {
    var d = new Date();
    var day = d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }).replace(',', '');
    var t = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    el.textContent = day + '  ' + t;
  }
  tick();
  setInterval(tick, 30000);
})();
