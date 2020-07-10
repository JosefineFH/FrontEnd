const getBtn = document.getElementById("get-btn");

let id = "";
let author = "";
let output = ``;

// Gets All the post & category list for menu on index.html
function getPosts() {
  axios
    .get("http://192.168.64.2/php_rest_myblog/api/post/read.php")
    .then((res) => {
      objects = res.data.data;

      let output = `<h1 class="main-header">Articles</h1>`;

      objects.forEach((post) => {
        output += `
        <div class="card">
          <img src="${post.img}">
          <div>
            <h2 class="title"> ${post.title}</h2>
            <span> written by <a onclick="goToAboutAuthor('${post.author}')" href="#"> ${post.author}</a></span>
            <p>${post.body}</p>
            <a class="category" onclick="goToPostCategoryName('${post.category_id}')" href="#">${post.category_name}</a>
            | <a class="readMore" onclick="goToPost('${post.id}')" href="#">Read More</a>
          </div>
        </div>`;
      });
      document.getElementById("output").innerHTML = output;
    });

  // Get category menu from DB
  axios
    .get("http://localhost:8080/php_rest_myblog/api/post/getCategorys.php")
    .then((res) => {
      categorys = res.data.data;
      let output = "";
      categorys.forEach((category) => {
        output += `<a onclick="goToPostCategoryName('${category.id}')" href="#">${category.name}</a>`;
      });
      document.getElementById("categoryList").innerHTML = output;
    });
}

// Gets post by ID - Ferdig
function getPostById() {
  let postId = sessionStorage.getItem("postId");

  axios
    .get(
      "http://192.168.64.2/php_rest_myblog/api/post/readSinglePost.php?id=" +
        postId
    )
    .then((res) => {
      let post = res.data;
      let output = `
      <div class="card">
        <img src="${post.img}">
        <h1>${post.title}</h1>
        <ul class="list-group">
        <span> written by <a onclick="goToAboutAuthor('${post.author}')" href="#"> ${post.author}</a> | 
        <a class="category" onclick="goToPostCategoryName('${post.category_id}')" href="#">${post.category_name}</a>
        </span>
        <p >${post.body}</p>
        <a href="index.html">Back</a>
      </div>`;
      document.getElementById("output").innerHTML = output;
    });
}

// Gets post by category
function getPostByCategory() {
  let postCategoryName = sessionStorage.getItem("category_id");

  axios
    .get(
      "http://localhost:8080/php_rest_myblog/api/post/postByCategory.php?category_id=" +
        postCategoryName
    )
    .then((res) => {
      let objects = res.data.data;

      output = `<h1 class="main-header">${objects[0].category_name}</h1>      
      <a href="index.html">Back</a>`;

      objects.forEach((post) => {
        output += `
        <div class="card">
            <img src="${post.img}">
          <div>                
            <h2 class="title">${post.title}</h2>
            <a onclick="goToAboutAuthor('${post.author}')" class="btn btn-primary" href="#">${post.author}</a>
            <p>${post.body}</p>
            <a onclick="goToPost('${post.id}'s)" class="btn btn-primary" href="#">Read More</a>
          </div>
        </div>`;
      });
      document.getElementById("output").innerHTML = output;
    });

  // Get category menu from DB
  axios
    .get("http://localhost:8080/php_rest_myblog/api/post/getCategorys.php")
    .then((res) => {
      categorys = res.data.data;

      categorys.forEach((category) => {
        output += `<a onclick="goToPostCategoryName('${category.id}')" href="#">${category.name}</a>`;
      });
      document.getElementById("categoryList").innerHTML = output;
    });
}

// Gets abour author
function getAboutAuthor() {
  let authorNameAbout = sessionStorage.getItem("authorName");

  axios
    .get(
      "http://localhost:8080/php_rest_myblog/api/post/aboutAuthor.php?author=" +
        authorNameAbout
    )
    .then((res) => {
      let aboutAuthor = res.data;

      let output = `
      <div class="cardAuthor">
      <a href="index.html">Back</a>

      <img class="profileImg" src="${aboutAuthor.img}">
      <h1 class="title">${aboutAuthor.author}</h1>
        <p>${aboutAuthor.about}</p>
      </div>`;

      document.getElementById("output").innerHTML = output;
    });

  // Get posts by authors
  axios
    .get(
      "http://localhost:8080/php_rest_myblog/api/post/getPostByAuthor.php?author=" +
        authorNameAbout
    )
    .then((res) => {
      let authorPosts = res.data.data;
      let output2 = "<h1>Articles</h1>";

      authorPosts.forEach((post) => {
        output2 += `
        <div class="card">
          <img src="${post.img}">
          <div>
            <h1 class="title">${post.title}</h1>
            <p>${post.body}</p>
            <a class="category" onclick="goToPostCategoryName('${post.category_id}')" href="#">${post.category_name}</a>
          </div>                
        </div>`;
      });

      document.getElementById("output2").innerHTML = output2;
    });
}

// Go to another page functions:
// Gets the ID from a post end takes it to post.html
function goToPost(id) {
  sessionStorage.setItem("postId", id);
  window.location = "post.html";
}

// Gets category end takes it to category.html
function goToPostCategoryName(category_id) {
  sessionStorage.setItem("category_id", category_id);
  window.location = "category.html";
}

// Gets Author end takes it to author.html
function goToAboutAuthor(author) {
  sessionStorage.setItem("authorName", author);
  window.location = "author.html";
}
