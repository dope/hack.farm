<?php
  $rss = new DOMDocument();
  // pull in the feed
  $rss->load('https://news.ycombinator.com/rss');
  $feed = array();
  foreach ($rss->getElementsByTagName('item') as $node) {

    // parse content
    $item = array (
      'title' => $node->getElementsByTagName('title')->item(0)->nodeValue,
      'link' => $node->getElementsByTagName('link')->item(0)->nodeValue,
      'date' => $node->getElementsByTagName('pubDate')->item(0)->nodeValue,
      );
    array_push($feed, $item);
  }
  $limit = 30;
  for($x=0;$x<$limit;$x++) {

    // variables for pulling th stuff
    $title = str_replace(' & ', ' &amp; ', $feed[$x]['title']);
    $link = $feed[$x]['link'];
    $date = date('jS M Y', strtotime($feed[$x]['date']));

    // dump content
    echo '<div class="post"><a href="'.$link.'" title="'.$title.'" target="_blank">'.$title.'</a>';
    echo '<span class="date">Posted on '.$date.'</span></div>';
  }
?>