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
    playstoreLink:"https://play.google.com/store/apps/details?id=com.promedy.Promedy",
    imageurl:"https://play-lh.googleusercontent.com/aBrzPzP22Tbw1HUguUKUSpENF-6sAiXb180uZfhLCU7_vouInbJnN6XAbvhQBsQLiYo=w240-h480-rw"
  },
  {
    name:"Planetae",
    text:"Learning app about solar system made with flutter and dart",
    imageurl:"https://play-lh.googleusercontent.com/9vKF_jptoNlJtYI6IMvR5nAij0h3a_dsJXxNW-vmjCn6fnWfi4Wn62MeSl3WV9Yl6A=w240-h480-rw",
    playstoreLink:"https://play.google.com/store/apps/details?id=com.ICMA.planetea",
    githubLink:"https://github.com/claudioHernandezZavala/Planetae"
  },
  {
    name:"ICMA NOTES",
    text:"Notes app connected with firestore api and synchronized with your email",
    imageurl:"https://play-lh.googleusercontent.com/aMnehwE1p-EXpngZlDbMx2Boa1q9Fh3zHXHwxrB2kp5lSedYANf0rR2Yv5TGJ_3Vae4=w240-h480-rw",
    playstoreLink:"https://play.google.com/store/apps/details?id=com.ICMA.icma_notes",
    githubLink:"https://github.com/claudioHernandezZavala/icma_notes"
  }
];
for (var i = 0; i < projects.length; i++) {
  //adding the project cards to the projects section
  var projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

 

  //here i create the anchor tag for the images
   let anchorGithub = document.createElement("a");
  anchorGithub.href = projects[i]["githubLink"];
  anchorGithub.target="_blank";
  let anchorPlaystore =  document.createElement("a");
  anchorPlaystore.href=projects[i]["playstoreLink"];
  anchorPlaystore.target="_blank";
  //creating the div with playstore class
  //sss
  var divwithImage = document.createElement("div");
  divwithImage.classList.add("v");
  divwithImage.classList.add("playstore");
  //creating the div with github class
  //ss
  var divwithImageg = document.createElement("div");
  divwithImageg.classList.add("v");
  divwithImageg.classList.add("github");
  anchorGithub.appendChild(divwithImageg);
  anchorPlaystore.appendChild(divwithImage);
  //i create here the title p element

  let text = document.createElement("h2");
  text.classList.add("projectName");

  let textnode = document.createTextNode(projects[i]["name"]);

  //here i add the description of the project
  let description = document.createElement("p");
  description.classList.add("projectDescription");
  //
  let textnodeDescription = document.createTextNode(projects[i]["text"]);
  description.appendChild(textnodeDescription);

  //here i create the list of links tags, the unordered list
  let listImagesLink = document.createElement("div");
  listImagesLink.classList.add("vlist");
  //here i append the divs with the corrresponding images tags with to the links list
  listImagesLink.appendChild(anchorPlaystore);
  listImagesLink.appendChild(anchorGithub);

  //apending image of project
  let imageProject=  document.createElement("img");
  imageProject.src=projects[i]["imageurl"];
  imageProject.classList.add("projectImg");
  imageProject.width=130;
  imageProject.height=130;

  
  //
  projectCard.appendChild(text);
  projectCard.appendChild(imageProject);
  projectCard.appendChild(description);
  projectCard.appendChild(listImagesLink);

  text.appendChild(textnode);
  document.getElementById("projects").appendChild(projectCard);
}

var playstoreElements = document.getElementsByClassName("playstore");
console.log(playstoreElements.length);
for (var i = 0; i < playstoreElements.length; i++) {
  let img = document.createElement("img");
  img.src = "./playstore.png";
  img.width = 45;
  img.height = 45;
  playstoreElements[i].appendChild(img);
}
var githubElements = document.getElementsByClassName("github");

for (var i = 0; i < githubElements.length; i++) {
  let img2 = document.createElement("img");
  img2.src = "./github.png";
  img2.width = 45;
  img2.height = 45;
  githubElements[i].appendChild(img2);
}
