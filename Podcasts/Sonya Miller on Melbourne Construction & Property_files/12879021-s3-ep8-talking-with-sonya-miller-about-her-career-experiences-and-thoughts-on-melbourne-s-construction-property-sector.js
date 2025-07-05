
  var containerId = "buzzsprout-player-12879021"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/12879021-talking-with-sonya-miller-about-her-career-experiences-and-thoughts-on-melbourne-s-construction-property-sector?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F12879021-s3-ep8-talking-with-sonya-miller-about-her-career-experiences-and-thoughts-on-melbourne-s-construction-property-sector.js%3Fcontainer_id%3Dbuzzsprout-player-12879021%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Sonya Miller about her career, experiences, and thoughts on Melbourne&#39;s Construction &amp; Property sector\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

