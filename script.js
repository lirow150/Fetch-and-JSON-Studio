// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    response.json().then(function(json) {
    //loop
        <div class="astronaut">
        <div class="bio">
           <h3>${json.firstName} ${jason.lastName}</h3>
           div.inneerHTML = `
           <ul>
              <li>Hours in space: ${json.hoursInSpace}</li>
              <li>Active: ${json.active}</li>
              <li>Skills: ${json.skills}</li>
           </ul>
           `;
        </div>
        <img class="avatar" src="${json.picture}">
     </div>

