
function complaintsList(borough) {
    let limit = document.getElementById('complaint-amount').value;
    limit === '' ? limit = 10 : limit = document.getElementById('complaint-amount').value

    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${limit}&borough=${borough.toUpperCase()}&agency=NYPD`)
        .then(response => response.json())
        .then(data => changeToComplaints(data))
        .catch(error => console.log(error))
}
function changeToComplaints(data) {
    let list = document.getElementById('complaints')
    list.innerHTML = ''
    for (i = 0; i < data.length; i++) {
        list.innerHTML += `<li>${data[i].descriptor} <button onclick="document.getElementById(complaint-${i})${data[i].resolution_description}">toggle police response</button> <span id="complaint-${i}></span></li>`
    }
}
