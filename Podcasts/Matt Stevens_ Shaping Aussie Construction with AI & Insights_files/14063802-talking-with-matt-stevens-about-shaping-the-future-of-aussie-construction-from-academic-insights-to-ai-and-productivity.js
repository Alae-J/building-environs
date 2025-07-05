
  var containerId = "buzzsprout-player-14063802"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/14063802-talking-with-matt-stevens-about-shaping-the-future-of-aussie-construction-from-academic-insights-to-ai-and-productivity?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F14063802-talking-with-matt-stevens-about-shaping-the-future-of-aussie-construction-from-academic-insights-to-ai-and-productivity.js%3Fcontainer_id%3Dbuzzsprout-player-14063802%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Matt Stevens about Shaping the Future of Aussie Construction: From Academic Insights to AI and Productivity\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

