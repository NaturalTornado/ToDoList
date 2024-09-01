
function loadPage () {

const container = document.getElementById('container');

const header = document.getElementById('header');
const newToDoLists = document.getElementById('newToDoLists');
const activeToDos = document.getElementById('activeToDos');
const oldToDos = document.getElementById('oldToDos');
const completedLists = document.getElementById('completedLists');

container.style.display = 'grid';
container.style.gridTemplate = `

            "header header header" 1fr 
            "newToDoLists activeToDos oldToDos" 3fr
            "newToDoLists activeToDos oldToDos" 1fr
            "newToDoLists activeToDos oldToDos" 1fr 
            "newToDoLists activeToDos completedLists" 1fr 
            "newToDoLists activeToDos completedLists" 1fr
            "newToDoLists activeToDos completedLists" 1fr

    `;

container.style.gridTemplateRows = 'auto 1fr 1fr 1fr';
container.style.gridTemplateColumns = '1fr 3fr 1fr';

header.style.gridArea = 'header';
newToDoLists.style.gridArea = 'newToDoLists';
activeToDos.style.gridArea = 'activeToDos';
oldToDos.style.gridArea = 'oldToDos';

// header styling
header.style.padding = '20px';
header.style.fontSize = '24px';
header.style.display = 'flex';
header.style.flex = 'auto';
header.style.flexDirection = 'row';
header.style.justifyContent = 'center';
header.style.alignContent = 'center';
header.style.border = 'solid';
header.style.borderRadius = '6px';
header.style.borderWidth = '4px';
header.style.borderColor = 'black';
header.style.backgroundColor = 'lightgray';
header.style.margin = '14px';
header.style.fontWeight = '900';

//New To Do List Items Area Styling
newToDoLists.style.padding = '20px';
newToDoLists.style.fontSize = '24px';
newToDoLists.style.display = 'flex';
newToDoLists.style.flex = 'auto';
newToDoLists.style.flexDirection = 'column';
newToDoLists.style.justifyContent = 'center';
newToDoLists.style.alignContent = 'center';
newToDoLists.style.border = 'solid';
newToDoLists.style.borderRadius = '6px';
newToDoLists.style.borderWidth = '4px';
newToDoLists.style.borderColor = 'black';
newToDoLists.style.backgroundColor = 'lightblue';
newToDoLists.style.margin = '14px';
newToDoLists.style.fontWeight = '900';

//Active To Do List Items Area Styling
activeToDos.style.padding = '20px';
activeToDos.style.fontSize = '24px';
activeToDos.style.display = 'flex';
activeToDos.style.flex = 'auto';
activeToDos.style.flexDirection = 'column';
activeToDos.style.justifyContent = 'center';
activeToDos.style.alignContent = 'center';
activeToDos.style.border = 'solid';
activeToDos.style.borderRadius = '6px';
activeToDos.style.borderWidth = '4px';
activeToDos.style.borderColor = 'black';
activeToDos.style.backgroundColor = 'lightgreen';
activeToDos.style.margin = '14px';
activeToDos.style.fontWeight = '900';


//Old To Do Items Area Styling

oldToDos.style.padding = '20px';
oldToDos.style.fontSize = '24px';
oldToDos.style.display = 'flex';
oldToDos.style.flex = 'auto';
oldToDos.style.flexDirection = 'column';
oldToDos.style.justifyContent = 'center';
oldToDos.style.alignContent = 'center';
oldToDos.style.border = 'solid';
oldToDos.style.borderRadius = '6px';
oldToDos.style.borderWidth = '4px';
oldToDos.style.borderColor = 'black';
oldToDos.style.backgroundColor = 'lightyellow';
oldToDos.style.margin = '14px';
oldToDos.style.fontWeight = '900';

// Old To Do Lists Area Styling
completedLists.style.padding = '20px';
completedLists.style.fontSize = '24px';
completedLists.style.display = 'flex';
completedLists.style.flex = 'auto';
completedLists.style.flexDirection = 'column';
completedLists.style.justifyContent = 'center';
completedLists.style.alignContent = 'center';
completedLists.style.border = 'solid';
completedLists.style.borderRadius = '6px';
completedLists.style.borderWidth = '4px';
completedLists.style.borderColor = 'black';
completedLists.style.backgroundColor = 'orange';
completedLists.style.margin = '14px';
completedLists.style.fontWeight = '900';




// Append elements to the container
container.appendChild(header);
container.appendChild(newToDoLists);
container.appendChild(activeToDos);
container.appendChild(oldToDos);
container.appendChild(completedLists);

/*

container.appendChild(header);
container.appendChild(newToDos);
container.appendChild(activeToDos);
container.appendChild(oldToDos);

*/



};

export default loadPage;

