document.querySelector(".theme").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});

/* const blog = document.getElementsByClassName("article-title");

const arrayofBlog = Array.from(blog).forEach(function (element) {
  console.log(element);
}); */

document.getElementById("filter").onkeyup = function () {
  searchProduct();
};

function searchProduct() {
  const input = document.getElementById("filter").value.toUpperCase();
  const blogContainer = document.getElementsByClassName("articles");
  console.log(blogContainer);

  const blog = blogContainer.getElementsByClassName("article");
  console.log(blog);

  for (let i = 0; i < blog.length; i++) {
    let title = blog[i].querySelector(".article-text h3.article-title");
    console.log(title);
  }
}
