var liElements = document.querySelectorAll(".wrapper_left ul li");
var itemElements = document.querySelectorAll(".item");
for (var i = 0; i < liElements.length; i++) {
  liElements[i].addEventListener("click", function () {
    liElements.forEach((li) => {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var liValue = this.getAttribute("data-li");
    itemElements.forEach((item) => {
      item.style.display = "none";
    });
    if (liValue == "angular") {
      document.querySelector("." + liValue).style.display = "block";
    } else if (liValue == "nodejs") {
      document.querySelector("." + liValue).style.display = "block";
    } else if (liValue == "reactjs") {
      document.querySelector("." + liValue).style.display = "block";
    } else if (liValue == "vuejs") {
      document.querySelector("." + liValue).style.display = "block";
    } else {
      console.log("");
    }
  });
}
