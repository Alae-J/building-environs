
  var containerId = "buzzsprout-player-17359259"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/17359259-talking-with-liam-carmody-about-property-investment-buyer-s-agents-and-building-a-property-portfolio-for-long-term-growth?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2Fepisodes%2F17359259-talking-with-liam-carmody-about-property-investment-buyer-s-agents-and-building-a-property-portfolio-for-long-term-growth.js%3Fcontainer_id%3Dbuzzsprout-player-17359259%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Liam Carmody about Property Investment, Buyer&#39;s Agents and Building a Property Portfolio for Long-Term Growth\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

