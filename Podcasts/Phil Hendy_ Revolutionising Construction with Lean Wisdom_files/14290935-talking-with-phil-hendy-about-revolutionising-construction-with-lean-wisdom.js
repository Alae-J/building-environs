
  var containerId = "buzzsprout-player-14290935"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/14290935-talking-with-phil-hendy-about-revolutionising-construction-with-lean-wisdom?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F14290935-talking-with-phil-hendy-about-revolutionising-construction-with-lean-wisdom.js%3Fcontainer_id%3Dbuzzsprout-player-14290935%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Phil Hendy about Revolutionising Construction with Lean Wisdom\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

