let complaintElements = document.getElementsByClassName("complaints")

complaintAmt = () => document.getElementById('complaint-amount').value

function changeToComplaints(d, numOfComplaints) {
    for (i = 0; i < numOfComplaints; i++) {
        complaintElements[i].innerHTML = d[i].descriptor + `<button onclick="document.getElementById('complaint-${i}').innerHTML = '${d[i].resolution_description}'">toggle police response</button>` + `<p id="complaint-${i}"></p>`
    }
}

function complaintsList(borough, amt) {
    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}&agency=NYPD`)
        .then(response => response.json())
        .then(data => changeToComplaints(data, amt))
        .then(data => changeToComplaints(data, amt))
        .catch(error => console.log(error))
}

function changeBoroughHeading(boroughName) {
    document.getElementById('borough-heading').innerHTML = boroughName
}










// complaintValue = document.getElementById("complaint-amount").value
// displayResolution = () => complaintElements.innerHTML += d.resolution_description

// function createNewContent(parent, newTagName, newContent) {
//     document.getElementById(parent).appendChild(document.createElement(newTagName).appendChild(document.createTextNode(newContent)))
// 