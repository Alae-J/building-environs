
  var containerId = "buzzsprout-player-11302399"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/11302399-talking-with-ruth-wilson-about-the-role-of-an-architect-and-architectural-practice-in-the-built-environment-the-process-of-designing-buildings-and-21-years-of-architectus?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F11302399-s2-ep14-talking-with-ruth-wilson-about-the-role-of-an-architect-and-architectural-practice-in-the-built-environment-the-process-of-designing-buildings-and-21-years-of-architectus.js%3Fcontainer_id%3Dbuzzsprout-player-11302399%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Ruth Wilson about the role of an Architect and Architectural practice in the Built Environment, the process of designing buildings, and 21 years of Architectus  \"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

