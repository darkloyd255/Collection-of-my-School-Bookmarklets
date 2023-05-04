const link = prompt("Enter the link you want to open:");
let myWindow = window.open(link);

if (!myWindow) {
  alert("Please allow popups to use this feature.");
} else {
  const checkWindow = setInterval(() => {
    if (myWindow.closed) {
      myWindow = window.open(link);
    } else if (myWindow.location.href !== link) {
      myWindow.location.href = link;
    }
  }, 1000);
}
