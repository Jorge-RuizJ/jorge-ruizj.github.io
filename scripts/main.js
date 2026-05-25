// Variables 

let currentProjectIndex = 0;
let currentImgIndex = 0;

// Project List Script

const myProjects =[
    //{title:"", description: "", img=""}
    {
        title: "A Foxy Pet Project", 
        images: [   
            "petproject1.png",
            "petproject2.png",
            "petproject3.png",
            "petproject4.png",
            "petproject5.png"
        ],
        shortDesc: "A Python-Based Pet simulation",
        longDesc: "A python-based virtual pet game built using Pygame. The program simulates the care of a pet. The program gives the user the option of feeding the pet, sleeping the pet, and paying minigames on the side for a reward (Food).",
        githubLink: "https://github.com"
    },  
    {
        title: "Weather API App", 
        images: ["weatherapp1.png","weatherapp2.png","weatherapp3.png"],
        shortDesc: "Weather Tracker with User Input",
        longDesc: "Long description placeholder",
        githubLink: "https://github.com"
    }
];

// Main list function

function loadProjectList() {
    const list = document.getElementById('project-list');
    myProjects.forEach((proj, index) => {
        const div = document.createElement('div');
        div.className = 'project-item';
        div.innerHTML = `<h4>${proj.title}</h4><p>${proj.shortDesc}</p>`;
        div.onclick = () => displayProject(index);
        list.appendChild(div);
    });
}

function displayProject(index) {
    currentProjectIndex = index;
    currentImgIndex = 0;

    const p = myProjects[index];
    document.getElementById('display-title').innerHTML = `<a href="${p.githubLink}">${p.title} (Github)</a>`;
    document.getElementById('display-description').innerText = p.longDesc;

    updateImageDisplay();
}

// Image Update
function updateImageDisplay() {
    const p = myProjects[currentProjectIndex];
    const imgDiv = document.getElementById('display-image');

    imgDiv.style.backgroundImage = `url('images/${p.images[currentImgIndex]}')`;
}

// Arrow Logic
function changeImage(step) {
    const p = myProjects[currentProjectIndex];

    currentImgIndex += step;

    if (currentImgIndex >= p.images.length) {
        currentImgIndex = 0;
    } else if (currentImgIndex < 0) {
        currentImgIndex = p.images.length - 1;
    }

    updateImageDisplay();
}


loadProjectList();
displayProject(0); // Default Image

