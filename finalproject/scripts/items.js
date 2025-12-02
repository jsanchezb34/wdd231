async function showprojects() {
    try {
        const response = await fetch("motorcycles.json");
        const projects = await response.json();

        const slideSection = document.querySelector(".slide");
        slideSection.innerHTML = ""; 

        projects.forEach(project => {
            const container = document.createElement("div");

            container.innerHTML = `
            <img src="${project.image}" alt="${project.projectName}">
            <h3>${project.projectName}</h3>
            <p><strong>Builder:</strong> ${project.builderName}</p>
            <p><strong>Workshop:</strong> ${project.workshopName}</p>
            <p>${project.description}</p>
            `;

            slideSection.appendChild(container);
        });
    }  catch (error) {
        console.error("error loading projects: ", error);
    } 
    
}

showprojects();