document.querySelector(".theme").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});

const arrayBlog = document.getElementsByClassName("article");
const blog = Array.from(arrayBlog);
