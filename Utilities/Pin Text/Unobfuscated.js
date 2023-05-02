
    const elements = document.querySelectorAll("p");
for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function() {
    pinElement(this);
  };
};

function pinElement(a) {
  const newElement = document.createElement("p");
  newElement.textContent = a.textContent;
  document.body.insertBefore(newElement, document.body.firstChild);
};

    alert("Click on text to pin it to the top! -Darkloyd255");
    
