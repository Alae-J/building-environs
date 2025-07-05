
  var containerId = "buzzsprout-player-10258367"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/10258367-talking-with-jason-folino-about-being-an-effective-leader-in-the-construction-industry?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F10258367-s2-ep4-talking-with-jason-folino-about-being-an-effective-leader-in-the-construction-industry.js%3Fcontainer_id%3Dbuzzsprout-player-10258367%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Jason Folino about being an effective leader in the construction industry\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

