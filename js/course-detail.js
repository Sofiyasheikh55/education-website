// URL se ID lena

const params = new URLSearchParams(window.location.search);

const courseId = Number(params.get("id"));


// Course Find

const course = courses.find(item => item.id === courseId);


// Agar Course Nahi Mila

if (!course) {

    document.querySelector(".course-detail").innerHTML = `

    <div class="container text-center py-5">

        <h2>Course Not Found</h2>

        <a href="courses.html" class="btn btn-primary mt-3">

            Back to Courses

        </a>

    </div>

    `;

} else {

    // Data Show

    document.getElementById("coursethumbnail").src = course.thumbnail;

    document.getElementById("courseCategory").textContent = course.category;

    document.getElementById("courseTitle").textContent = course.title;

    document.getElementById("coursePrice").textContent = course.price;

    document.getElementById("courseDescription").textContent = course.description;

    document.getElementById("courseInstructor").textContent = course.instructor;

    document.getElementById("courseDuration").textContent = course.duration;

    document.getElementById("courseLevel").textContent = course.level;

}


// Enroll Button

document.getElementById("enrollBtn").addEventListener("click", () => {

    alert("🎉 Congratulations! You have successfully enrolled in this course.");

});