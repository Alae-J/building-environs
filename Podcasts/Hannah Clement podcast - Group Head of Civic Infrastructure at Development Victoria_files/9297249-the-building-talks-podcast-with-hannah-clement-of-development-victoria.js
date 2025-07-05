
  var containerId = "buzzsprout-player-9297249"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/9297249-talking-with-hannah-clement-group-head-of-civic-infrastructure-at-development-victoria-mostly-about-awesome-projects-and-her-part-in-them?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F9297249-the-building-talks-podcast-with-hannah-clement-of-development-victoria.js%3Fcontainer_id%3Dbuzzsprout-player-9297249%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Hannah Clement, Group Head of Civic Infrastructure at Development Victoria....mostly about awesome projects (and her part in them)!\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

