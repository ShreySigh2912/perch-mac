/* Perch site analytics (PostHog). No cookies, no session recording, no autocapture:
   page views, and which download button was clicked. */
(function () {
  var KEY = 'phc_p6KHo375gyWLZqE7tH33zEU55Q8bhoYkWwYknFx7FrVW'; // PostHog project "Perch" (public ingestion key)
  var HOST = 'https://us.i.posthog.com';
  if (!/^phc_/.test(KEY)) return;
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  window.posthog.init(KEY, {
    api_host: HOST,
    cookieless_mode: 'always',
    autocapture: false,
    capture_pageview: true,
    capture_pageleave: true,
    disable_session_recording: true,
    disable_surveys: true,
    person_profiles: 'identified_only'
  });
  window.posthog.register({ site: 'agentperch.in' });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href$=".dmg"], a[href$=".exe"]');
    if (!a) return;
    window.posthog.capture('download_clicked', {
      platform: /\.exe$/.test(a.getAttribute('href')) ? 'windows' : 'mac',
      place: a.getAttribute('data-dl') || a.className || 'link',
      page: location.pathname
    });
  }, true);
})();
