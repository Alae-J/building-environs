
  var containerId = "buzzsprout-player-13153032"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1850552/episodes/13153032-talking-with-eliza-carbines-about-bidding-and-tendering-for-work-how-to-craft-a-great-bid-for-any-size-of-project-whilst-avoiding-the-common-pitfalls-frequently-seen-in-failed-bids?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1850552%2F13153032-s3-ep12-talking-with-eliza-carbines-about-bidding-and-tendering-work-how-to-craft-a-great-bid-for-any-size-of-project-whilst-avoiding-the-common-pitfalls-frequently-seen-in-failed-bids.js%3Fcontainer_id%3Dbuzzsprout-player-13153032%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The Building Talks Podcast, Talking with Eliza Carbines about bidding and tendering for work, how to craft a great bid for any size of project, whilst avoiding the common pitfalls frequently seen in failed bids\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

