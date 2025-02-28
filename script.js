// 1.Select the target element

const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("generateBtn");

// 2.Create new HTMl elements (document.createElement())

function createProfileCard() {
    // create the profile card container
    const profileCard = document.createElement("div");
    // add class
    profileCard.className = "profile-card";
    // create an image element for the profile card
    const profileImage = document.createElement("img");
    // add img to the created img element
    profileImage.src = "https://cdn.pixabay.com/photo/2022/03/15/09/07/animal-7069834_1280.jpg";
    //  create the heading element
    const profileName = document.createElement("h3");
    profileName.textContent = "BATTINA VARUN";
    // create a paragraph element for description
    const profileDescription = document.createElement("p");
    profileDescription.textContent = "I am a passionate web developer with a solid understanding of Data Structures and efficient problem-solving skills."
   
// 3.Add content to the element  created (innerHTML/textContent)
// 4.Add classes or id's if needed  //  add any attribute
//  append all the elements to the profile card
// 5.Append the elements to build the structure
profileCard.appendChild(profileImage);
profileCard.appendChild(profileName);
profileCard.appendChild(profileDescription);
// append the profile card to the container

// append to the DOM
appContainer.appendChild(profileCard);
console.log(appContainer);
}

// add event listener
generateBtn.addEventListener('click',createProfileCard);



