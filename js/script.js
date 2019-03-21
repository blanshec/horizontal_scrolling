const menu_link = document.getElementsByClassName("menu_link");

meun_link[3].addEventListener("click", function() {
    document.querySelector('#tables').scrollIntoView({ 
        behavior: 'smooth' 
      });
})
