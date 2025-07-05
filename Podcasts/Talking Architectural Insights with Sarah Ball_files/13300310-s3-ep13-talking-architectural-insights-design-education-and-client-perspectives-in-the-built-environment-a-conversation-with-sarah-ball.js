
  var containerId = "buzzsprout-player-13300310"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/13300310-talking-architectural-insights-design-education-and-client-perspectives-in-the-built-environment-a-conversation-with-sarah-ball?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F13300310-s3-ep13-talking-architectural-insights-design-education-and-client-perspectives-in-the-built-environment-a-conversation-with-sarah-ball.js%3Fcontainer_id%3Dbuzzsprout-player-13300310%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking Architectural Insights: Design, Education, and Client Perspectives in the Built Environment - A Conversation with Sarah Ball\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

