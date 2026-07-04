// Courses JS// ==========================
// Elements
// ==========================

const courseContainer = document.getElementById("courseContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const courseCount = document.getElementById("courseCount");

let selectedCategory = "All";

// ==========================
// Render Courses
// ==========================

function displayCourses(courseList){

    courseContainer.innerHTML = "";

    if(courseList.length === 0){

       courseContainer.innerHTML += `
            <div class="course-card">
                <h3>No Courses Found</h3>
            </div>
        `;

        courseCount.innerHTML = "0 Courses Found";

        return;
    }

    courseCount.innerHTML = `${courseList.length} Courses Found`;

    courseList.forEach(course=>{

        courseContainer.innerHTML += `

<div class="col-lg-4 col-md-6">

<div class="card border-0 shadow-sm h-100 course-card">

<img src="${course.thumbnail}" class="card-img-top">

<div class="card-body">

<span class="badge bg-primary">

${course.category}

</span>

<h4 class="mt-3">

${course.title}

</h4>

<p>

${course.description.substring(0,80)}...

</p>

<div class="d-flex justify-content-between mb-3">

<span>⭐ ${course.rating}</span>

<span>₹${course.price}</span>

</div>

<p>

<strong>Instructor:</strong>

${course.instructor}

</p>

<a href="course-detail.html?id=${course.id}"

class="btn btn-primary w-100 mt-3">

View Details

</a>

</div>

</div>

</div>

`;

    });

}

// ==========================
// Filter Logic
// ==========================

function filterCourses(){

    const searchValue = searchInput.value.toLowerCase();

    const filtered = courses.filter(course=>{

        const matchTitle = course.title.toLowerCase().includes(searchValue);

        const matchCategory =

        selectedCategory==="All"

        ||

        course.category===selectedCategory;

        return matchTitle && matchCategory;

    });

    displayCourses(filtered);

}

// ==========================
// Search
// ==========================

searchInput.addEventListener("keyup",filterCourses);

// ==========================
// Category Filter
// ==========================

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

selectedCategory = button.dataset.category;

filterCourses();

});

});

// ==========================
// Initial Load
// ==========================

displayCourses(courses);