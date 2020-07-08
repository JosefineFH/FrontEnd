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

$post->readAboutAuthor();

$post_arr = array(
    'author' => $post->author,
    'about' => $post->about,
    'gender' => $post->gender,
    'img' => $post->img,

);

// Make json
print_r(json_encode($post_arr));