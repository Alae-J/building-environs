
  var containerId = "buzzsprout-player-16294067"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/16294067-episode-7-how-to-be-a-property-developer-series-talking-with-steve-chandler-about-taking-your-first-steps-into-property-development?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2Fepisodes%2F16294067-episode-7-how-to-be-a-property-developer-series-talking-with-steve-chandler-about-taking-your-first-steps-into-property-development.js%3Fcontainer_id%3Dbuzzsprout-player-16294067%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Episode 7:  How to BE a Property Developer Series:  Talking with Steve Chandler About Taking Your First Steps into Property Development\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

