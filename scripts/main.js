

// Project List Script

const myProjects =[
    //{title:"", description: "", img=""}
    {
        title: "A Foxy Pet Project", 
        description: "A Python-Based Pet simulation",
        img:"images/foxy-pet.png"
    },
    {
        title:"Weather API App",
        description: "Weather Tracker with user input", 
        img: "images/weather-app.png"
    },
    {
        title:"Weather API App",
        description: "Weather Tracker with user input", 
        img: "images/weather-app.png"
    },
    {
        title:"Weather API App",
        description: "Weather Tracker with user input", 
        img: "images/weather-app.png"
    },
    {
        title:"Weather API App",
        description: "Weather Tracker with user input", 
        img: "images/weather-app.png"
    }    
];

const listScrollBox = document.getElementById('project-list');

myProjects.forEach((project) => {
    const item = document.createElement('div');
    item.className = 'project-item'; //Css styled later
    item.innerHTML = `<h4>${project.title}</h4>`; // For inner use backticks

    item.onclick = () => {
        document.getElementById('display-title').innerText = project.title;
        document.getElementById('display-description').innerText = project.description;
        
        const imgDiv = document.getElementById('display-image');
        imgDiv.style.backgroundImage = `url('${project.img}')`;
        imgDiv.style.backgroundSize = "cover";
        imgDiv.style.backgroundPosition = "center";
    }

    listScrollBox.appendChild(item)
})
