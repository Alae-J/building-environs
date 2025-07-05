
  var containerId = "buzzsprout-player-15123974"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/15123974-solving-australia-s-construction-labour-shortage-insights-from-robert-sobyra-of-buildskills-australia?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F15123974-solving-australia-s-construction-labour-shortage-insights-from-robert-sobyra-of-buildskills-australia.js%3Fcontainer_id%3Dbuzzsprout-player-15123974%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Solving Australia&#39;s Construction Labour Shortage: Insights from Robert Sobyra of BuildSkills Australia\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

