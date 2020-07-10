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

// Get ID
$post->id = isset($_GET['id']) ? $_GET['id'] : die();

// Get Post
$post->readSinglePost();
//Create array
$post_arr = array(
    'author_id' => $post->author_id,
    'id' => $post->id,
    'title' => $post->title,
    'body' => $post->body,
    'author' => $post->author,
    'category_id' => $post->category_id,
    'category_name' => $post->category_name,
    'img' => $post->img,


);

// Make json
print_r(json_encode($post_arr));