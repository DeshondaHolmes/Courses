"use strict";

const tbody = document.getElementById("courseDetails");

window.onload = init;

function init() {
    showCourses();
}

function showCourses() {
    console.log("clicked");

    let theUrl = "http://localhost:8081/api/courses";
    fetch(theUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            for (let i = 0; i < data.length; i++) {
                debugger
                let row = tbody.insertRow(-1);
                let anchor = document.createElement("a");
                anchor.href = `http://localhost:8081/details.html?courseid=${data[i].id}`;
                anchor.text = "See details";
                let cell1 = row.insertCell();
                let cell2 = row.insertCell();
                let cell3 = row.insertCell();
                let cell4 = row.insertCell();


                cell1.innerHTML = data[i].courseName;
                cell2.innerHTML = data[i].dept;
                cell3.innerHTML = data[i].courseNum;
                cell4.innerHTML = "See details"

            }
        });



}

//   let row = table.insertRow(-1);
//   let cell0 = row.insertCell(0);
//   let cell1 = row.insertCell(1);
//   let cell2 = row.insertCell(2);
//   let cell3 = row.insertCell(3);
//   let cell4 = row.insertCell(4);
//   let cell5 = row.insertCell(5);
//   let cell6 = row.insertCell(6);

//   cell0.innerHTML = data.id;
//   cell1.innerHTML = data.name;
//   cell2.innerHTML = data.email;
//   cell3.innerHTML = data.phone;
//   cell4.innerHTML = data.website;
//   cell5.innerHTML = data.company.name;
//   cell6.innerHTML = data.company.catchPhrase;