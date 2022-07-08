//images variables
var p = document.createElement("img");
p.src = "./github.png";
p.width = 35;
p.height = 35;
//======================
var imagen2 = document.createElement("img");
imagen2.src = "./playstore.png";
imagen2.width = 35;
imagen2.height = 35;

//add the images to the footer
//add child to the github id
var githubFooter = document.getElementById("github");
githubFooter.appendChild(p);

//add child to linkdn id
var linkdnFooter = document.getElementById("linkdn");

linkdnFooter.appendChild(imagen2);

//add images to all classes with playstore or github name
var projects = [
  {
    name: "Promedy",
    text: "This project was made with pure Flutter and Dart",
    githubLink: "https://github.com/claudioHernandezZavala/Promedy.git",
  },
];
for (var i = 0; i < projects.length; i++) {
  //adding the project cards to the projects section
  var projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  var divsci = document.createElement("div");
  divsci.classList.add("sci");

  //here i create the anchor tag for the images
   let anchorGithub = document.createElement("a");
  anchorGithub.href = projects[i]["githubLink"];
  let anchorPlaystore =  document.createElement("a");

  //creating the div with playstore class
  var divwithImage = document.createElement("div");
  divwithImage.classList.add("v");
  divwithImage.classList.add("playstore");
  //creating the div with github class
  var divwithImageg = document.createElement("div");
  divwithImageg.classList.add("v");
  divwithImageg.classList.add("github");
  anchorGithub.appendChild(divwithImageg);

  //i create here the title p element

  let text = document.createElement("p");
  text.classList.add("projectInfo");

  let textnode = document.createTextNode(projects[i]["name"]);
  //here i create the list of links tags, the unordered list
  let listImagesLink = document.createElement("ul");
  listImagesLink.classList.add("v");
  //here i append the divs with the corrresponding images tags with to the links list
  listImagesLink.appendChild(divwithImage);
  listImagesLink.appendChild(anchorGithub);
  projectCard.appendChild(text);
  projectCard.appendChild(listImagesLink);

  text.appendChild(textnode);
  document.getElementById("projects").appendChild(projectCard);
}

var playstoreElements = document.getElementsByClassName("playstore");
console.log(playstoreElements.length);
for (var i = 0; i < playstoreElements.length; i++) {
  let img = document.createElement("img");
  img.src = "./playstore.png";
  img.width = 35;
  img.height = 35;
  playstoreElements[i].appendChild(img);
}
var githubElements = document.getElementsByClassName("github");

for (var i = 0; i < githubElements.length; i++) {
  let img2 = document.createElement("img");
  img2.src = "./github.png";
  img2.width = 35;
  img2.height = 35;
  githubElements[i].appendChild(img2);
}
