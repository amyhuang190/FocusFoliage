

const urlArray = [];
let urlIndex = 0;

for(let i = 0; i < urlArray.length; i++) {
    console.log(urlArray[i]);
}

const submitButton = document.getElementById("submitButton");



function displayInput() {
    console.log("test");
    if(checkArray(urlArray, document.getElementById("url").value)) {
        let inputString = document.getElementById("url").value;
        urlArray[urlIndex] = document.getElementById("url").value;
        urlIndex = urlIndex + 1;
        addToList(inputString);
        console.log(urlIndex);
        printUrls();
        if (urlIndex == 1) {
            addStartButton();
        }
    }
       
}

submitButton.onclick = function () {
    console.log(getCurrentTab);
}

function checkArray(array, string) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].localeCompare(string) == 0) {
            return false;
        }
    }
    return true;
}

function printUrls() {
    for (let i = 0; i < urlArray.length; i++) {

        console.log(urlArray[i]);
    
    }
}

function addStartButton() {
    const buttonDiv = document.getElementById("startButtonHolder");

    const startButton = document.createElement('button');
    const textNode = document.createTextNode("Start Focusing");
    startButton.appendChild(textNode);
    startButton.setAttribute('id','startButton');

    buttonDiv.appendChild(startButton);
}

function addToList(string) {
    const urlList = document.getElementById("urlList");

    const holder = document.createElement('div');
    const link = document.createElement('a');
    const linkText = document.createTextNode(string);
    link.appendChild(linkText);
    link.setAttribute('href',string);
    link.setAttribute('target','_blank');
    holder.setAttribute('class','listItem');
    holder.appendChild(link);
    urlList.appendChild(holder);
}


