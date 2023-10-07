let infoListLis = document.querySelectorAll(".info-list li");

let infoDivs = document.querySelectorAll(".info-content div");

infoListLis.forEach((li) => {
  li.onclick = function () {
    infoListLis.forEach((li) => {
      li.classList.remove("selected");
    });

    li.classList.add("selected");

    infoDivs.forEach((div) => {
      div.style.display = "none";
    });

    document.querySelector(
      `.info-content .${li.innerHTML.toLowerCase()}`
    ).style.display = "block";
  };
});
