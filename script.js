// klik buka undangan 
let btnBukaUndangan = document.getElementById('bukaundangan');

btnBukaUndangan.addEventListener('click', function() {
  let displayshow = document.getElementById('content');
  displayshow.classList.remove('d-none')
  let cover = document.getElementById('cover')
  cover.classList.add('d-none');
})