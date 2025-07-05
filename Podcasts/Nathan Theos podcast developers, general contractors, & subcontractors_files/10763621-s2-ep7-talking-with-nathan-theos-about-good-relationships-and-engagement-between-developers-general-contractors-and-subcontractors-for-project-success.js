
  var containerId = "buzzsprout-player-10763621"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/10763621-talking-with-nathan-theos-about-good-relationships-and-engagement-between-developers-general-contractors-and-subcontractors-for-project-success?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F10763621-s2-ep7-talking-with-nathan-theos-about-good-relationships-and-engagement-between-developers-general-contractors-and-subcontractors-for-project-success.js%3Fcontainer_id%3Dbuzzsprout-player-10763621%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Nathan Theos about good relationships and engagement between developers, general contractors, and subcontractors for project success\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

