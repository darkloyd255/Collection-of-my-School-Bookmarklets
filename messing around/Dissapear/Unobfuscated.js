const elements = document.getElementsByTagName('*');
let i = 0;

const interval = setInterval(() => {
  if (i >= elements.length) {
    clearInterval(interval);
    return;
  }

  elements[i].style.display = 'none';
  i++;
}, 500);
