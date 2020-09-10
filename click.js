//클릭 요소
const linkItems = document.querySelectorAll("#linkItem");
const dropdownMenus = document.querySelectorAll("#dropdown");
// dropdowm 요소
const loginMenu = document.querySelector("#link__login__menu");
const langeMenu = document.querySelector("#link__language__menu");
// 보여주게할
const active = "active";

// linkItems를 클릭했을때
linkItems.forEach((item) => {
  // 각각
  item.addEventListener("click", (e) => {
    e.preventDefault();

    let dropdown = this.nextElementSibling;

    
    dropdown.classList.toggle(active);
  });
});
