<head>
<script>
document.title = prompt("Rename tab to...")
    // create the head element
const head = document.createElement("head");

// add the head element to the DOM
document.querySelector("html").appendChild(head);
    
const pL = ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Google_Classroom_Logo.svg/512px-Google_Classroom_Logo.svg.png?20221017163738",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEVChfT///89gvPa5v1ZkvXm7/3///5hmPVnnPXk7f1yovbg6/09g/P8/f9DhfO80vv2+f80ffOtyfqWufhelfVJifTK3PuiwPlMjPS3z/uMs/hXkfUsfPNzpPbu9P7V4vzC1/t6qffWqFqTAAADkUlEQVR4nO3d0XKjIBiG4R+6qVkFAqLRaKLJ/d/kYptNTdLu7HYGUPZ7jtqj+g5VWyRI7JEczvZS1bQ2dXay+0E+9dD9t7oos6PhXMQ+3m/g3BhTlRv9h0I92t4IUir2wX6TckduajvqrwqLpudCrXH4ZhTx1hafFupDzmmtozfnGvKdfC7Utl356H1QvG3kY+HQrff0+4zqhvvCIVdrPwHvuGtOPswLZUd1SoE0nY2d/ijUTVoj+EYpq2+FuzalU/CmPshrYeFuEykS2+K9UFuR5BC6v+Ma/VY4trGPxBfVj1OhtjzRISRl3MWG2KZO6lY/p6gtXGFpUg2cBrFkJKvYh+GREJmk4ZjuELpBPA60T/iX1DFnapK9kk4Ut3RKulDwC2Vp/sX2m6hofdOG/yb1PgAAAAAAAAAAAIgn9poN7z9fTKscIwqw5ECoKounqv0vLuTV7iWe89b/4l6evbDnpcZhSFacghTKiIV5mDGMB4UoRCEKUYhCFKIQhShEIQpRiEIUohCF88LXWMIUVuef8ewDzJdSnW0jCvI5OxHzsUX0J0MAAAAAAAAAABBM5G2zQsxEXefablNuQb8IkCeo/xFPH2BvQF7tN/GMW/9bsUR9MvMa6MlMrCXCDE/XUIhCFKIQhShEIQpRiEIUohCFKEQhCu8KMU+z9sLk50upjjjlHWLOWyT/3CL6KuTYPx8AAAAAAAAAAMLx9Hl8IZYyyeRrT4VqKa8G97QvRlGU9ULexOhrbxO2W1KhB1KiMBgUohCF8aEQhSiMD4UoRGF8KEQhCuNDYRKFPt73tKxCH+/skuy8mEJf711bzHypt3fnhdjy4m/4e//hYh5beDyOpSQCAAAAAAAAAADAf6qOfQCe1VQt5GmBJyKjS9qF/ESWx91F3i/FLZ1N0oVmT8Mx6cLjQDLEvkTRiEoSKxP+NVWmZMSKNuHndvXGFWqb7CAqY7UrZGOfaiG1I5sKdZPqtUa4IZwKWZFHfneMH0rkBXsvlIckLzaq3bFrobvYqOQGUSjV6Fsh0x0llihq0b0FXgvZkCc2iopOA5sXsqFL6V9hN1rdNfBW6O4ZbTL/RynRWs0eC5nc5akU8vxwC5wVuvuibfnq74xK8L6ZL2OeFzI92tpwpZRYYag7Yne15Ly3o2ZfFbrGTVkZM62EXFuimnazMMdtWej7pIfC6Xwc9jbP2pWNoqK6utjz8LxA+xf3EnYyP4clyAAAAABJRU5ErkJggg==",
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png"];
    
var a = prompt("Type a number between 0 and 2, \n0 = google classroom \n1 = google docs\n2 = google");

if (a < 0 || a > 2 || isNaN(a)) {
    alert("You entered something wrong. Make sure that your number is 0, 1, or 2 and make sure you put nothing else.");
} else {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = pL[a];
    document.head.appendChild(link);
}
</script>
</head>
