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
        .then((courses) => {
            console.log(courses);

            for (let i = 0; i < courses.length; i++) {
            
                let row = tbody.insertRow(-1);

                
                
                
                
                let cell1 = row.insertCell();
                cell1.className = "py-2";
                cell1.innerHTML = courses[i].courseName;
                
                let cell2 = row.insertCell();
                cell2.className = "py-2";
                cell2.innerHTML = courses[i].dept;
                
                let cell3 = row.insertCell();
                cell3.className = "py-2";
                cell3.innerHTML = courses[i].courseNum;
                
                let anchor = document.createElement("a");
                anchor.href = `http://localhost:8081/details.html?courseid=${courses[i].id}`;
                // anchor.className = "col-6";
                anchor.className = "py-2";
                cell3.appendChild(anchor);
                anchor.text = courses[i].courseName;
               



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