document.querySelector(".theme").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});

document.getElementById("filter").onkeyup = function () {
  searchProduct();
};

function searchProduct() {
  const input = document.getElementById("filter").value.toUpperCase();

  const blogs = document.querySelectorAll(".article,.article-text");

  for (let i = 0; i < blogs.length; i++) {
    let title = blogs[i].querySelector(".article-text h3.article-title");
    console.log(title);

    if (title.innerText.toUpperCase().indexOf(input) > -1) {
      blogs[i].style.display = "";
    } else {
      blogs[i].style.display = "none";
    }
  }
}
