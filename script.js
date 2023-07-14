function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img") 
  
  if (html.classList.contains('light')){
    img.setAttribute(
      "src",
      "https://media.licdn.com/dms/image/D4D35AQGmyMdvQhe2WA/profile-framedphoto-shrink_200_200/0/1688071936798?e=1689818400&v=beta&t=p3KzQ2-kQ3sFuiTDfZe_eKfLSRTfVH52gD4xkxgPS9w"
    )
    img.setAttribute("alt", "Perfil")
  }else{
    img.setAttribute(
      "src",
      "https://media.licdn.com/dms/image/D4D35AQGmyMdvQhe2WA/profile-framedphoto-shrink_200_200/0/1688071936798?e=1689818400&v=beta&t=p3KzQ2-kQ3sFuiTDfZe_eKfLSRTfVH52gD4xkxgPS9w"
    )
    img.setAttribute("alt", "Perfil")
  }
  
}