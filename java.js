const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}


const likeBtns = document.querySelectorAll('.like-btn');

likeBtns.forEach(btn => {
    const likes = btn.nextElementSibling;
    let count = 0;
    
    btn.addEventListener('click', () => {
        btn.classList.toggle('liked');
        
        if (btn.classList.contains('liked')) {
            count++;
        } else {
            count--;
        }
        
        likes.textContent = count;
    });
});


const stars = document.querySelectorAll('.bx-star');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    for (let i = 0; i <= index; i++) {
      stars[i].style.setProperty('--rating', '100%');
    }
    for (let i = index + 1; i < stars.length; i++) {
      stars[i].style.removeProperty('--rating');
    }
  });
});
