function projectSearch(){
    const projectsContainer = document.getElementById("projects-container");

     if(!projectsContainer){
        console.log("Projects search not found");
        return;
    }
    projectsContainer.innerHTML = "";
    projectsData.forEach(function(project){
         const card = document.createElement("div");
         card.className = "p-8 text-center bg-white shadow-lg";

         const iconBox = document.createElement("div");
         iconBox.className = "w-20 h-20 mx-auto mb-4  rounded-2xl flex items-center justify-center";

         const iconText = document.createElement("span");
         iconText.className = "text-2xl text-white font-bold";
         iconText.textContent = project.longLabel;

         iconBox.appendChild(iconText);
         const projectName = document.createElement("h3");
         projectName.className = "text-xl font-bold mb-5";
         projectName.textContent = project.name;

         const projectDescription = document.createElement("p");
         projectDescription.className = "text-sm";
         projectDescription.textContent = project.description;

        card.appendChild(iconBox);
        card.appendChild(projectName);
        card.appendChild(projectDescription);
        projectsContainer.appendChild(card);
    });
    console.log("projects searched successfully");
}