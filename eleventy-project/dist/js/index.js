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

filterObject("all");

function filterObject(c) {
  var x, i;
  x = document.getElementsByClassName("article");
  if (c === "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while ((arr1.indexOf(arr2[i]), -1)) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

document.querySelector(".btn-one").addEventListener("click", function () {
  filterObject("food");
});

document.querySelector(".btn-two").addEventListener("click", function () {
  filterObject("culture");
});

document.querySelector(".btn-three").addEventListener("click", function () {
  filterObject("all");
});
