<?php
// Header
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

include_once('../../config/database.php');
include_once('../../models/post.php');

// Instatiate DB & connect
$database = new Database();
$db = $database->connect();

// Instatiate blog post object
$post = new Post($db);

// Blog post query
$result = $post->getCategorysList();
// Get row count
$num = $result->rowCount();

// Check if any posts
if ($num > 0) {
    // Post array
    $posts_arr = array();
    $posts_arr['data'] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $post_item = array(
            'id' => $id,
            'name' => $name
        );
        $post_item;
        // Push to "data"
        array_push($posts_arr['data'], $post_item);
    }

    // Turn to JSON & outpot
    echo json_encode($posts_arr);
} else {
    // No Posts
    echo json_encode(
        array('message' => 'No Posts Found')
    );
}
