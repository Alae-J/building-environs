
  var containerId = "buzzsprout-player-13984039"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/13984039-timber-tales-talking-with-nick-hewson-about-all-things-engineered-timber-and-the-evolution-of-tall-mass-timber-buildings-in-australia?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F13984039-timber-tales-talking-with-nick-hewson-about-all-things-engineered-timber-and-the-evolution-of-tall-mass-timber-buildings-in-australia.js%3Fcontainer_id%3Dbuzzsprout-player-13984039%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Timber Tales: Talking with Nick Hewson about all things &#39;Engineered Timber&#39;, and the evolution of Tall Mass Timber Buildings in Australia\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

