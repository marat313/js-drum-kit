window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector('.key')
  if(!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.toggle('playing')

  console.log(audio);
})