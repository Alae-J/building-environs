
  var containerId = "buzzsprout-player-13900519"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/13900519-talking-with-matthew-mackey-about-the-construction-boom-collaboration-and-industry-challenges-in-queensland?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F13900519-talking-with-matthew-mackey-about-the-construction-boom-collaboration-and-industry-challenges-in-queensland.js%3Fcontainer_id%3Dbuzzsprout-player-13900519%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Matthew Mackey about the Construction Boom, Collaboration, and Industry Challenges in Queensland\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

