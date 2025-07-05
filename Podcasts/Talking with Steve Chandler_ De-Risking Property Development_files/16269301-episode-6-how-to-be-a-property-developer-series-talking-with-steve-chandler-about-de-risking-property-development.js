
  var containerId = "buzzsprout-player-16269301"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/16269301-episode-6-how-to-be-a-property-developer-series-talking-with-steve-chandler-about-de-risking-property-development?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2Fepisodes%2F16269301-episode-6-how-to-be-a-property-developer-series-talking-with-steve-chandler-about-de-risking-property-development.js%3Fcontainer_id%3Dbuzzsprout-player-16269301%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Episode 6:  How to BE a Property Developer Series:  Talking with Steve Chandler About De-Risking Property Development\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

