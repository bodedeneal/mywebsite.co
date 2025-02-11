document.addEventListener("DOMContentLoaded", function() {
    // Apply styles to the body
    document.body.style.backgroundColor = "tan"; // Neon black background
    document.body.style.color = "black"; // Neon green text
    document.body.style.fontFamily = "'Arial', sans-serif"; // Change this to your desired font
    document.body.style.fontWeight = "bold"; // Make the text bold
    document.body.style.textAlign = "center"; // Center the text

    var h1 = document.createElement('h1');
    h1.textContent = "Welcome To My Webstie";
    document.body.appendChild(h1);
    
    // Create and append the second div with images
    var imageDiv = document.createElement('div');
    imageDiv.style.display = "flex";
    imageDiv.style.justifyContent = "center"; // Center the images and video
    imageDiv.style.margin = "10px 0"; // Add some margin between the divs

    var img1 = document.createElement('img');
    img1.src = 'IMG_1508.jpeg';
    img1.width = 320;
    img1.height = 400;
    img1.alt = 'Image 1508';
    imageDiv.appendChild(img1);

    document.body.appendChild(imageDiv);

    // Append the rest of the content
    var h2 = document.createElement('h2');
    h2.textContent = "Hey, I'm Bode DeNeal";
    document.body.appendChild(h2);

    var h2About = document.createElement('h2');
    h2About.textContent = "About me";
    document.body.appendChild(h2About);

    var pAbout = document.createElement('p');
    pAbout.textContent = "I am a YouTuber who does track and CX.";
    document.body.appendChild(pAbout);

    var h2Working = document.createElement('h2');
    h2Working.textContent = "What I'm working on";
    document.body.appendChild(h2Working);

    var pWorking = document.createElement('p');
    pWorking.textContent = (`I'm obsessed with coding and trying to monetize it. I am open for hire, you can find me at denealbode@gmail.com. For smaller projects, I only charge $${Math.floor(Math.random() * 100)} and for larger scale projects it can cost $${Math.floor(Math.random() * 1000)}.`);
    document.body.appendChild(pWorking);

    var container = document.createElement('div');
    container.style.display = "flex";
    container.style.justifyContent = "space-between";
    container.style.margin = "0 10px";

    // Main content area
    var mainContent = document.createElement('div');
    mainContent.style.flex = "3";
    mainContent.style.marginRight = "10px";

    // Move existing content into mainContent div
    while (document.body.firstChild) {
        mainContent.appendChild(document.body.firstChild);
    }
    container.appendChild(mainContent);

    // Sidebar
    var sidebar = document.createElement('div');
    sidebar.style.flex = "1";
    sidebar.style.borderLeft = "2px solid black"; // Black dividing line
    sidebar.style.paddingLeft = "10px";
    sidebar.textContent = "Sidebar content goes here";
    container.appendChild(sidebar);

    // Append container to body
    document.body.appendChild(container);
});
