
  var containerId = "buzzsprout-player-11412273"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/11412273-talking-with-tony-isaacson-about-his-40-year-career-at-kane-construction-and-his-love-for-all-things-construction?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F11412273-s2-ep15-talking-with-tony-isaacson-about-his-40-year-career-at-kane-construction-and-his-love-for-all-things-construction.js%3Fcontainer_id%3Dbuzzsprout-player-11412273%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Tony Isaacson about his 40-year career at Kane Construction and his love for all things construction\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

