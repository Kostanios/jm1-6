function showMoreTechnique() {
  const btn = document.querySelectorAll('.btn--type-showmore')[1];
  let techItem = document.querySelectorAll('.technique__hidden');
  let opened = false;
  btn.addEventListener('click', function() {
    if (!opened) {
      techItem.forEach(item => {
        item.classList.remove('technique__hidden');
        btn.textContent = 'Свернуть';
        opened = true;
      })
    } else {
      techItem.forEach(item => {
        item.classList.add('technique__hidden');
        btn.textContent = 'Показать все';
        opened = false;
      })
    }
  })
}

showMoreTechnique();