"use strict";


//tbody element defined by html element id 
const tbody = document.getElementById("courseDetails");



//arrow function , when window finish loading execute function 
window.onload = () => {
    console.log("First console Window load");

    //show all courses 
    showAllCourses();
}


//function to show all courses
function showAllCourses() {

    console.log("second console this is show all courses function");


    //fetch method , url to get api with courses
    fetch("http://localhost:8081/api/courses")

        .then((response) => response.json())

        .then((courses) => {
            console.log(courses);

            //for loop, used to loop through values starting at index
            for (let i = 0; i < courses.length; i++) {

                buildRowForCourse(courses[i]);

            }
        });
}

function buildRowForCourse(course) {

    //define row to be inside table body for each course
    let row = tbody.insertRow(-1);

    //method insert new td into table row
    let cell1 = row.insertCell(0);
    cell1.className = "text-center px-1";
    cell1.innerHTML = course.courseName;

    let cell2 = row.insertCell(1);
    cell2.className = "text-center px-1";
    cell2.innerHTML = course.dept;


    // let cell3 = row.insertCell(2);
    // cell3.className = "text-center mx-5";
    // cell3.innerHTML = courses[i].courseNum + "/";


    let cell3 = row.insertCell(2);
    cell3.className = "text-center mx-3";
    cell3.innerHTML = course.courseNum;

    let cell4 = row.insertCell(3);
    cell4.className = "text-center mx-3";


    let anchor = document.createElement("a");
    anchor.href = `details.html?courseid=${course.id}`;
    anchor.text = course.courseName;  
    
    // anchor.className = "col-6";
    // anchor.className = "container-fluid";

    // const coursesLink = document.getElementById("coursesLink");
    cell4.appendChild(anchor);



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