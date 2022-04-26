document.querySelector(".theme").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});

const blog = document.getElementsByClassName("article-title");

const arrayofBlog = Array.from(blog).forEach(function (element) {
  console.log(element);
});
