document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const saveForm = document.querySelector('#new-mission-form')
    saveForm.addEventListener('submit',handleSave)

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAll)

});

const handleSave = function(event){
    event.preventDefault();

    //make new list item with h2, h3 & p in this.
    const newMissionListItem = document.createElement('li');
    const nameInput = document.createElement('h2');
    const missionDateInput = document.createElement('h3');
    const planetInput = document.createElement('p');
    const visitedInput = document.createElement('h3')

    // console.dir(event)

    //append this to the ul already in the html
    newMissionListItem.appendChild(nameInput);
    newMissionListItem.appendChild(missionDateInput);
    newMissionListItem.appendChild(planetInput);
    newMissionListItem.appendChild(visitedInput)


    //create missionList
    const missionList = document.querySelector('#mission-list');


    //grab values from the form and put them in the list.
    // newMissionListItem.className = "mission-item"
    newMissionListItem.classList.add("mission-item")
    nameInput.textContent = this.name.value;
    missionDateInput.textContent = this.date.value;
    planetInput.textContent = this.planet.value;
    visitedInput.textContent = this.visited.value;


    //append the values to the missionList.
    missionList.appendChild(newMissionListItem);

    event.target.reset();
};

const handleDeleteAll = function(){
    const missionList = document.querySelector('#mission-list');
  missionList.innerHTML = '';
};