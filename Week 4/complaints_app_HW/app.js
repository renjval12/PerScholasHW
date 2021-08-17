let complaintElements = document.getElementsByClassName("complaints")

complaintAmt = () => document.getElementById('complaint-amount').value

function changeToComplaints(d) {
    for (i = 0; i < complaintAmt(); i++) {
        let complaintText = d[i].descriptor + `<button onmouseover="document.getElementById('complaint-${i}').innerHTML = '${d[i].resolution_description}'" onmouseout="document.getElementById('complaint-${i}').innerHTML = ''">toggle police response</button>` + `<p id="complaint-${i}"></p>`
        if (complaintElements[i].innerHTML === '') {
            complaintElements[i].innerHTML = complaintText
        } else {
            complaintElements[i].textContent = ''
        }
    }
}

function complaintsList(borough, limit) {
    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${complaintAmt()}&borough=${borough}&agency=NYPD`)
        .then(response => response.json())
        .then(data => changeToComplaints(data))
        .catch(error => console.log(error))
}

// function brooklynComplaints() {
//     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=10&borough=BROOKLYN&agency=NYPD`)
//         .then(response => response.json())
//         .then(data => changeToComplaints(data))
//         .catch(error => console.log(error))
// }
// function bronxComplaints() {
//     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=10&borough=BRONX&agency=NYPD`)
//         .then(response => response.json())
//         .then(data => changeToComplaints(data))
//         .catch(error => console.log(error))
// }
// function manhattanComplaints() {
//     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=10&borough=MANHATTAN&agency=NYPD`)
//         .then(response => response.json())
//         .then(data => changeToComplaints(data))
//         .catch(error => console.log(error))
// }
// function queensComplaints() {
//     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=10&borough=QUEENS&agency=NYPD`)
//         .then(response => response.json())
//         .then(data => changeToComplaints(data))
//         .catch(error => console.log(error))
// }
// function statenIslandComplaints() {
//     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=10&borough=STATEN ISLAND&agency=NYPD`)
//         .then(response => response.json())
//         .then(data => changeToComplaints(data))
//         .catch(error => console.log(error))
// }



// let fetch = require('node-fetch')

// fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=10&borough='BROOKLYN'&agency=NYPD`)
//     .then(response => response.json())
//     .then(data => displayData(data))
//     .catch(error => console.log(error))


// function displayData(d) {
//     for (i = 0; i < numOfComplaints; i++) {
//         console.log(d[i].descriptor)
//         console.log(d[i].resolution_description)
//     }
// }

// function changeBoroughHeading(boroughName) {
//     document.getElementById('borough-heading').innerHTML = boroughName
// 

// complaintValue = document.getElementById("complaint-amount").value
// displayResolution = () => complaintElements.innerHTML += d.resolution_description

// function createNewContent(parent, newTagName, newContent) {
//     document.getElementById(parent).appendChild(document.createElement(newTagName).appendChild(document.createTextNode(newContent)))
// 