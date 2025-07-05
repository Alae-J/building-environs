
  var containerId = "buzzsprout-player-11569857"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/11569857-talking-with-clem-newton-brown-about-the-future-of-air-taxis-and-freight-drones-and-how-the-property-industry-can-jump-into-this-billion-dollar-industry?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F11569857-s2-ep17-talking-with-clem-newton-brown-about-the-future-of-air-taxis-and-freight-drones-and-how-the-property-industry-can-jump-into-this-billion-dollar-industry.js%3Fcontainer_id%3Dbuzzsprout-player-11569857%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Clem Newton–Brown about the future of air taxis and freight drones and how the property industry can jump into this billion dollar industry\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

