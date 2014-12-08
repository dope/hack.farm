<?php
  // allow from any origin
  if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}

  ");
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400');
  // cache for 1 day
}

// access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}

");
}

$rss = new DOMDocument();
// pull in the feed
$rss->load('http://feeds.feedburner.com/newsyc100?fmt=xml');
$feed = array();
foreach ($rss->getElementsByTagName('item') as $node) {
  // parse content
  $item = array (          'title' => $node->getElementsByTagName('title')->item(0)->nodeValue,          'link' => $node->getElementsByTagName('link')->item(0)->nodeValue,          'date' => $node->getElementsByTagName('pubDate')->item(0)->nodeValue,          );
  array_push($feed, $item);
}

$limit = 25;
for($x=0;$x<$limit;$x++) {
  // variables for pulling th stuff
  $title = str_replace(' & ', ' &amp; ', $feed[$x]['title']);
  $link = $feed[$x]['link'];
  $date = date('jS M Y', strtotime($feed[$x]['date']));
  // dump content
  echo '<div class="post"><a href="'.$link.'" title="'.$title.'" target="_blank">'.$title.'</a>' . '<span class="read-btn">Read</span>';
  echo '<div class="date">Posted on '.$date.'</div></div>';
}

?>