const menuOpen =  document.querySelector('.menu_btn');
const sideMenu = document.querySelector('.sideMenu');
const menuClose = document.querySelector('#close_menu');



//if user click handMenu Icon
menuOpen.addEventListener('click', () =>{
    sideMenu.classList.add('active')
})

//if user close menu slide menu
menuClose.addEventListener('click', () =>{
    sideMenu.classList.remove('active')
})

//if user click any Escape button on keyboard close slide menu
document.addEventListener('keydown', (e) => {
    console.log(e.key);
  
    if (e.key === 'Escape') {
        sideMenu.classList.remove('active')
    }
  });
