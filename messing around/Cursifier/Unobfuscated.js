let v = prompt("Text to cursify with:");
    let a = prompt("Color: (MUST BE VERY DIRECT, leave blank for no change)"); 
    for (let x = 0; x < document.getElementsByTagName("p").length; x++) {
      document.querySelectorAll("p","h1","h2","h3","h4","h5")[x].innerHTML = v;
        document.querySelectorAll("p","h1","h2","h3","h4","h5")[x].style.color = a;
    };
