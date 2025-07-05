
  var containerId = "buzzsprout-player-13547917"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/13547917-talking-with-ryan-treweek-about-building-trust-and-relationships-profits-pitfalls-progress-quality-control-revolution-and-construction-culture-innovation?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F13547917-s3-ep15-a-conversation-with-ryan-treweek-about-building-trust-and-relationships-profits-pitfalls-progress-quality-control-revolution-and-construction-culture-innovation.js%3Fcontainer_id%3Dbuzzsprout-player-13547917%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Ryan Treweek about Building Trust and Relationships, Profits, Pitfalls, &amp; Progress, Quality Control Revolution, and Construction Culture &amp; Innovation\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

