document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  var hero = document.getElementById("hero");

  // Function to handle scroll events
  function handleScroll() {
    // Get the bottom position of the first page
    var page1Bottom = page1.getBoundingClientRect().bottom;

    // Check if the bottom of page 1 is above the viewport
    if (page1Bottom <= window.innerHeight) {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  }

  // Attach the handleScroll function to the scroll event
  window.addEventListener("scroll", handleScroll);

  // Initial check when the page is loaded
  handleScroll();
});

// Fungsi untuk menambahkan komentar ke LocalStorage
function addComment() {
  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;

  var comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push({ name: name, comment: comment });

  localStorage.setItem("comments", JSON.stringify(comments));

  updateCommentList();

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}

// Fungsi untuk memperbarui tampilan daftar komentar dari LocalStorage
function updateCommentList() {
  var commentListElement = document.getElementById("commentList");
  commentListElement.innerHTML = "";

  var comments = JSON.parse(localStorage.getItem("comments")) || [];

  comments.forEach(function (commentObj) {
    var commentElement = document.createElement("div");
    commentElement.className = "card mt-2";

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var nameElement = document.createElement("h5");
    nameElement.className = "card-title";
    nameElement.innerText = commentObj.name;

    var commentText = document.createElement("p");
    commentText.className = "card-text";
    commentText.innerText = commentObj.comment;

    cardBody.appendChild(nameElement);
    cardBody.appendChild(commentText);
    commentElement.appendChild(cardBody);

    commentListElement.appendChild(commentElement);
  });
}

// Memanggil fungsi untuk memperbarui tampilan daftar komentar saat halaman dimuat
updateCommentList();
