
  var containerId = "buzzsprout-player-14997112"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/14997112-unlocking-australian-property-development-challenges-in-depth-discussion-with-industry-expert-illan-samuel?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F14997112-unlocking-australian-property-development-challenges-in-depth-discussion-with-industry-expert-illan-samuel.js%3Fcontainer_id%3Dbuzzsprout-player-14997112%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Unlocking Australian Property Development Challenges: In-Depth Discussion with Industry Expert Illan Samuel\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

