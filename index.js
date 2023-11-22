const updateSkill = (id, value) => {
  const skillBar = document.getElementById(id).querySelector('.skill__progress')
  const skillValue = document.getElementById(id).querySelector('.skill__value')
  
  skillBar.style.width = value + '%'
  skillValue.textContent = value + ' / 100'
}

const userValueHTML = prompt("Zadej úroveň dovednosti HTML v čísle 0-100:")
const updatedHTML = updateSkill('skill1', userValueHTML)

const userValueCSS = prompt("Zadej úroveň dovednosti CSS v čísle 0-100:")
const updatedCSS = updateSkill('skill2', userValueCSS)

const userValueJS = prompt("Zadej úroveň dovednosti JS v čísle 0-100:")
const updatedJS = updateSkill('skill3', userValueJS)
