document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundColor = "#000000"; // Neon black background
    document.body.style.color = "black"; // Neon green text
    document.body.style.fontFamily = "'Arial', sans-serif"; // Change this to your desired font
    document.body.style.fontWeight = "bold"; // Make the text bold
    document.body.style.fontSize = "16px";
    document.body.style.backgroundImage = "url('R.jpeg')";
    document.body.style.backgroundSize = "cover"; // Optional: to cover the entire screen
    
    var h1 = document.createElement('h1');
    h1.textContent = " ";
    document.body.appendChild(h1);

    document.body.appendChild(imageDiv);

    // Append the rest of the content
    var h2 = document.createElement('h2');
    h2.textContent = " ";
    document.body.appendChild(h2);

    var h2About = document.createElement('h2');
    h2About.textContent = " ";
    document.body.appendChild(h2About);

    var pAbout = document.createElement('p');
    pAbout.textContent = " ";
    document.body.appendChild(pAbout);

    var h2Working = document.createElement('h2');
    h2Working.textContent = " ";
    document.body.appendChild(h2Working);

    var pWorking = document.createElement('p');
    pWorking.textContent = (` `);
    document.body.appendChild(pWorking);
});
