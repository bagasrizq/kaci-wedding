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
// Fungsi untuk menambahkan komentar ke daftar komentar
function addComment() {
  // Mengambil nilai dari input nama dan komentar
  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;

  // Membuat objek komentar
  var commentObj = {
    name: name,
    comment: comment,
  };

  // Mengecek apakah sudah ada komentar sebelumnya di localStorage
  var comments = JSON.parse(localStorage.getItem("comments")) || [];

  // Menambahkan komentar baru ke daftar komentar
  comments.push(commentObj);

  // Menyimpan daftar komentar ke localStorage
  localStorage.setItem("comments", JSON.stringify(comments));

  // Memperbarui tampilan daftar komentar
  updateCommentList();

  // Membersihkan input setelah komentar dikirim
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}

// Fungsi untuk memperbarui tampilan daftar komentar dari localStorage
function updateCommentList() {
  var commentListElement = document.getElementById("commentList");
  commentListElement.innerHTML = ""; // Mengosongkan daftar komentar sebelum memperbarui

  // Mendapatkan daftar komentar dari localStorage
  var comments = JSON.parse(localStorage.getItem("comments")) || [];

  // Menambahkan komentar ke daftar komentar di HTML
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
