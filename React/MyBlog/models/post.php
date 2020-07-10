<?php
class post
{
  // DB Stuff
  private $conn;
  private $table = 'posts';
  private $table2 = 'aboutAuthors';

  // Post Properties
  public $id;
  public $category_id;
  public $category_name;
  public $title;
  public $body;
  public $author;
  public $created_at;

  // Constructor with DB
  public function __construct($db)
  {
    $this->conn = $db;
  }

  // Get Posts 
  public function readPosts()
  {
    // Create query
    $query = 'SELECT c.name as category_name, p.id, p.category_id, p.author_id, p.title, p.body, p.img, p.author, p.created_at
        FROM ' . $this->table . ' p
        LEFT JOIN
          categories c ON p.category_id = c.id
        ORDER BY
          p.created_at DESC';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }

  // Get Single Post
  public function readSinglePost()
  {
    $query =
      'SELECT c.name as category_name, p.id, p.category_id, p.author_id, p.title,p.img,  p.body, p.author, p.created_at
      FROM ' . $this->table . ' p
      LEFT JOIN
      categories c ON p.category_id = c.id
      WHERE p.id = ?
      LIMIT 0,1';

    // Prepare statment
    $stmt = $this->conn->prepare($query);

    // Bind ID
    $stmt->bindParam(1, $this->id);

    // Execute query
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // Set properties
    $this->title = $row['title'];
    $this->body = $row['body'];
    $this->author = $row['author'];
    $this->category_id = $row['category_id'];
    $this->category_name = $row['category_name'];
    $this->author_id = $row['author_id'];
    $this->img = $row['img'];
  }

  // Gets about author end ther posts
  public function readAboutAuthor()
  {
    $query = 'SELECT id, author, about, gender, img 
    FROM ' . $this->table2 . ' 
    WHERE author = ?';

    // Prepare statment
    $stmt = $this->conn->prepare($query);


    // Bind Author
    $stmt->bindParam(1, $this->author);

    // Execute query
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // Set properties
    $this->author = $row['author'];
    $this->about = $row['about'];
    $this->gender = $row['gender'];
    $this->img = $row['img'];
  }

  // Get post by author 
  public function getPostsByAuthor()
  {

    $query = 'SELECT c.name as category_name, p.id, p.category_id, p.author_id, p.title, p.body,p.img, p.author, p.created_at
    FROM ' . $this->table . ' p
    LEFT JOIN
      categories c ON p.category_id = c.id
      WHERE author = ?
    ORDER BY
      p.created_at DESC';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(1, $this->author);

    // Execute query
    $stmt->execute();

    return $stmt;
  }

  // Gets post by category
  public function readPostByCategory()
  {
    $query = 'SELECT c.name as category_name, p.id, p.category_id, p.author_id, p.img,p .title, p.body, p.author, p.created_at
    FROM ' . $this->table . ' p
    LEFT JOIN
      categories c ON p.category_id = c.id
      WHERE category_id = ?
    ORDER BY
      p.created_at DESC';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(1, $this->category_id);

    // Execute query
    $stmt->execute();

    return $stmt;
  }

  public function getCategorysList()
  {
    $query = 'SELECT name, id FROM categories';

    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }
}
