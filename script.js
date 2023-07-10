function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img") 
  
  if (html.classList.contains('light')){
    img.setAttribute("src", "./assets/avatar_perfil.png")
    img.setAttribute("alt", "Perfil")
  }else{
    img.setAttribute(
      "src",
      "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png"
    )
  }
  
}