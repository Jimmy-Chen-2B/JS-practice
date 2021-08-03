document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#start-btn')
  btn.addEventListener('click', () => {
    setInterval(() => {
      const sec = document.querySelector('#timer')
      sec.innerHTML = Number(sec.innerHTML) + 1
    }, 1000)
  })
})