function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img") 
  
  if (html.classList.contains('light')){
    img.setAttribute(
      "src",
      https://media.licdn.com/dms/image/C4D03AQENPb5cpiKNng/profile-displayphoto-shrink_800_800/0/1635558426541?e=2147483647&v=beta&t=sdBqf2PTAYyHR60RjnKJH93EPGNS6YjjvcNjpxkbG4k"
    )
    img.setAttribute("alt", "Perfil")
  }else{
    img.setAttribute(
      "src",
      "https://media.licdn.com/dms/image/C4D03AQENPb5cpiKNng/profile-displayphoto-shrink_800_800/0/1635558426541?e=2147483647&v=beta&t=sdBqf2PTAYyHR60RjnKJH93EPGNS6YjjvcNjpxkbG4k"
    )
    img.setAttribute("alt", "Perfil")
  }
  
}
