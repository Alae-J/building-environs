
  var containerId = "buzzsprout-player-11484830"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/11484830-talking-with-dan-gaebler-about-his-book-the-centred-tradie-rage-and-anxiety-in-the-construction-industry-and-how-he-overcame-them?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F11484830-s2-ep16-talking-with-dan-gaebler-about-his-book-the-centred-tradie-rage-and-anxiety-in-the-construction-industry-and-how-he-overcame-them.js%3Fcontainer_id%3Dbuzzsprout-player-11484830%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Dan Gaebler about his book The Centred Tradie, rage and anxiety in the construction industry and how he overcame them\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

