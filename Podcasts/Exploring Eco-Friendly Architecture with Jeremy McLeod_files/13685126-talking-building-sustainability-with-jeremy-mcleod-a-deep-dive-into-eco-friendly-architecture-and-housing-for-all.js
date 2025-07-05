
  var containerId = "buzzsprout-player-13685126"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/13685126-talking-with-jeremy-mcleod-about-building-sustainability-a-deep-dive-into-eco-friendly-architecture-and-housing-for-all?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F13685126-talking-building-sustainability-with-jeremy-mcleod-a-deep-dive-into-eco-friendly-architecture-and-housing-for-all.js%3Fcontainer_id%3Dbuzzsprout-player-13685126%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Jeremy McLeod about Building Sustainability: A Deep Dive into Eco-Friendly Architecture and Housing for All\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

