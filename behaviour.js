//bar and bar window's behaviour starts here
let bar_btn = document.querySelector(".bar");
let bar_window = document.querySelector(".bar_window");
bar_btn.onclick = function () {
  bar_window.classList.toggle("translate");
  if(!contact_content_all[0].classList.contains("visibility")){
    contact_content_all[0].classList.add("visibility");
  }
};
//bar and bar window's behaviour ends here

//turn off behaviour on main starts here
let main = document.querySelector("main");
let contact_content_all = document.querySelectorAll(
  ".menu_bar > .contact_content,.bar_window > .contact_content"
);
main.onclick = function () {
  bar_window.classList.remove("translate");
  if (
    document
      .querySelector(".menu_bar > .contact_content")
      .classList.contains("visibility") != true
  ) {
    both_contact[1].classList.remove("underline");
    document
      .querySelector(".menu_bar")
      .firstElementChild.classList.add("underline");
  }
  contact_content_all.forEach((el) => el.classList.add("visibility"));
};
//turn off behaviour on main ends here

//about content popup window's behavoiur starts here
let both_contact = document.querySelectorAll(
  ".menu_bar > .contact_click, .bar_window > .contact_click"
);
both_contact.forEach(
  (element, index) =>
    (element.onclick = function (event) {
      contact_content_all[index].classList.toggle("visibility");
    })
);
//about content popup window's behavoiur starts here

// navbar menubar underline effect starts here
{
let elements = document.querySelectorAll(".menu_bar > li");
for (let i = 0; i < elements.length; i++) {
  elements[i].classList.add("pointer");
  elements[i].addEventListener("click", function () {
    this.classList.add("underline");

    for (let i = 0; i < elements.length; i++) {
      if (elements[i] != this) {
        elements[i].classList.remove("underline");
      }
    }
    if (this.textContent != both_contact[0].textContent) {
      contact_content_all.forEach((el) => el.classList.add("visibility"));
    } else if (this.textContent == both_contact[1].textContent) {
      if (contact_content_all[1].classList.contains("visibility") == true) {
        this.classList.remove("underline");
        elements[0].classList.add("underline");
      }
    }
  });
}}

let elements = document.querySelectorAll(".bar_window > li");
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    this.classList.add("touch_active");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i] != this) {
        elements[i].classList.remove("touch_active");
      }
    }
    if (this.textContent != both_contact[0].textContent) {
      contact_content_all.forEach((el) => el.classList.add("visibility"));
    } else if (this.textContent == both_contact[0].textContent) {
      if (contact_content_all[0].classList.contains("visibility") == true) {
        this.classList.remove("touch_active");
        elements[0].classList.add("touch_active");
      }
    }
  });
}
// navbar menubar underline effect ends here

// theme changer function starts here
var condition = true;
function theme() {
  document.querySelector(".light_bg").classList.toggle("bg_opacity");
  document.querySelector(".dark_bg").classList.toggle("bg_opacity");
  document.querySelector("body").classList.toggle("font_color_theme");
  document.querySelector(".btn").classList.toggle("light_btn");
  document.querySelector(".btn").classList.toggle("dark_btn");
  contact_content_all.forEach((el) => {
    el.classList.toggle("light_btn");
    el.classList.toggle("dark_btn");
  });

  let content_A = `<i class="fa-regular fa-sun"></i>`;
  let content_B = `<i class="fa-solid fa-moon"></i>`;
  let icon = document.querySelector(".theme_icon");
  if (condition) {
    icon.innerHTML = content_A;
    condition = false;
  } else {
    icon.innerHTML = content_B;
    condition = true;
  }
}
document.querySelector("nav .theme_icon").onclick = theme;
// Theme function ends here

// Touch feedback starts here
let elements_to_click = document.querySelectorAll(
  ".bar , .btn, .theme_icon,.bar_window > ul > li"
);
elements_to_click.forEach((element) => {
  element.addEventListener("touchstart", function () {
    this.classList.add("touch_active");
  });
  element.addEventListener("touchend", function () {
    this.classList.remove("touch_active");
  });
});

// Touch feedback ends here