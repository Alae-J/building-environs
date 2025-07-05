
  var containerId = "buzzsprout-player-16064071"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/16064071-talking-with-robert-pradolin-about-australia-s-housing-crisis-compassionate-capitalism-and-private-sector-solutions?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2Fepisodes%2F16064071-talking-with-robert-pradolin-about-australia-s-housing-crisis-compassionate-capitalism-and-private-sector-solutions.js%3Fcontainer_id%3Dbuzzsprout-player-16064071%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Robert Pradolin about Australia’s Housing Crisis, Compassionate Capitalism, and Private Sector Solutions\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

