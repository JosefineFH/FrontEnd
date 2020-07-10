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

$post->author = isset($_GET['author']) ? $_GET['author'] : die();

// Blog post query
$result = $post->getPostsByAuthor();
// Get row count
$num = $result->rowCount();

// Check if any posts
if($num > 0){
    // Post array
    $posts_arr = array();
    $posts_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_item = array(
            'category_name' => $category_name,
            'category_id' => $category_id,
            'author_id' => $author_id,
            'title' => $title,
            'body' => html_entity_decode($body),
            'author' => $author,
            'created_at' => $created_at,
            'img' => $img,


        );

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