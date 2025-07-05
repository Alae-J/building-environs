
  var containerId = "buzzsprout-player-11584070"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/11584070-talking-with-charles-hammersla-about-managing-large-portfolio-s-of-properties-and-all-things-facilities-management?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F11584070-s2-ep18-talking-with-charles-hammersla-about-managing-large-portfolio-s-of-properties-and-all-things-facilities-management.js%3Fcontainer_id%3Dbuzzsprout-player-11584070%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Charles Hammersla about managing large portfolio&#39;s of properties, and all things Facilities Management\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

