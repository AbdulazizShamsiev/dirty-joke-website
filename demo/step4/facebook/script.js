const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
/*document.body.addEventListener('keydown',e=>{
    console.log(`siz bu tushu basdiniz: `,e.key);
})*/

const buton = document.getElementById('buton')
buton.addEventListener('keyup',e=>{
    console.log(e.target.value);
})



document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Fare sağ tıklama menüsünü engelle
    alert("Fare sağ tıklama engellendi!");
  });

  // Klavye olaylarını dinle
  document.addEventListener("keydown", function(event) {
    // Eğer Ctrl tuşu ve "u" tuşuna basıldıysa uyarıyı göster
    if (event.ctrlKey && event.key === "u") {
      event.preventDefault(); // Ctrl+U kombinasyonunun varsayılan işlevini engelle
      alert("Ctrl+U engellendi!");
    }
  });