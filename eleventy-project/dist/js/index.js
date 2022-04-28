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

function myFunction() {
  // Declare variables
  var input, filter, ul, h3, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementsByClassName("article");
  h3 = h3.getElementsByTagName("h3");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = h3[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      h3[i].style.display = "";
    } else {
      h3[i].style.display = "none";
    }
  }
}

document
  .querySelector(".input")
  .addEventListener("input", "onclickup", function () {
    myFunction();
  });
