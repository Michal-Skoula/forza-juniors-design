function nav() {
  let button = document.querySelector('.nav-menu'); 
  let navmenu = document.querySelector('.mobile-nav');
  console.log(button);
  console.log(navmenu);
  navmenu.classList.toggle('open');
}