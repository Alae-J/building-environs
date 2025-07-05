
  var containerId = "buzzsprout-player-14376225"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/14376225-talking-with-simon-mcfadden-about-designing-building-and-other-considerations-that-go-into-creating-data-centres?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F14376225-talking-with-simon-mcfadden-about-designing-building-and-other-considerations-that-go-into-creating-data-centres.js%3Fcontainer_id%3Dbuzzsprout-player-14376225%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Simon McFadden about Designing, Building and Other Considerations that go into Creating Data Centres\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

