// ==========================
// Course Data
// ==========================

const courses = [
{
id:1,
title:"React Development Bootcamp",
category:"Development",
price:"₹2,999",
thumbnail:"image/courses/react.jpeg",
description:"Master modern React.js by building real-world projects. Learn Components, Hooks, Routing, State Management, REST APIs, and create responsive applications ready for production.",
instructor:"Rahul Sharma",
duration:"10 Weeks",
level:"Intermediate"
},

{
id:2,
title:"JavaScript Mastery",
category:"Development",
price:"₹2,499",
thumbnail:"image/courses/java.jpg",
description:"Build a strong JavaScript foundation from beginner to advanced. Learn ES6+, DOM Manipulation, Events, APIs, Async Programming, Fetch API and practical coding exercises.",
instructor:"Amit Verma",
duration:"8 Weeks",
level:"Beginner"
},

{
id:3,
title:"UI / UX Design with Figma",
category:"Design",
price:"₹1,999",
thumbnail:"image/courses/ui-ux.jpeg",
description:"Design attractive and user-friendly interfaces using Figma. Understand design systems, wireframes, prototypes, color theory, typography and responsive layouts.",
instructor:"Priya Singh",
duration:"6 Weeks",
level:"Beginner"
},

{
id:4,
title:"Graphic Design Professional",
category:"Design",
price:"₹2,199",
thumbnail:"image/courses/graphics.jpg",
description:"Learn Adobe Photoshop, Illustrator and branding principles to create stunning posters, logos, banners and social media creatives for professional projects.",
instructor:"Neha Kapoor",
duration:"7 Weeks",
level:"Intermediate"
},

{
id:5,
title:"Digital Marketing Complete Course",
category:"Marketing",
price:"₹2,799",
thumbnail:"image/courses/D.M.jpg",
description:"Become a Digital Marketing expert by learning SEO, Social Media Marketing, Google Ads, Email Marketing, Content Strategy and campaign optimization.",
instructor:"Karan Mehta",
duration:"9 Weeks",
level:"Beginner"
},

{
id:6,
title:"SEO Masterclass",
category:"Marketing",
price:"₹1,799",
thumbnail:"image/courses/SEO.jpg",
description:"Learn advanced SEO strategies including keyword research, technical SEO, on-page optimization, backlinks and website ranking techniques for Google.",
instructor:"Anjali Gupta",
duration:"5 Weeks",
level:"Advanced"
}
];


// ==========================
// Elements
// ==========================

const courseContainer=document.getElementById("courseContainer");
const searchInput=document.getElementById("searchInput");
const categoryFilter=document.getElementById("categoryFilter");


// ==========================
// Render Courses
// ==========================

function displayCourses(courseArray){

courseContainer.innerHTML="";

if(courseArray.length===0){

courseContainer.innerHTML=`
<h3 style="grid-column:1/-1;text-align:center;">
No Course Found
</h3>
`;

return;

}

courseArray.forEach(course=>{

courseContainer.innerHTML+=`

<div class="course-card">

<img src="${course.thumbnail}" alt="${course.title}">

<div class="course-content">

<span class="${course.category.toLowerCase()}">
${course.category}
</span>

<h4>${course.title}</h4>

<p>${course.description}</p>

<div class="price">
₹${course.price}
</div>

<a href="course-detail.html?id=${course.id}"
class="btn btn-primary">

View Details

</a>

</div>

</div>

`;

});

}


// ==========================
// Search + Filter
// ==========================

function filterCourses(){

const searchValue=
searchInput.value.toLowerCase();

const categoryValue=
categoryFilter.value;

const filtered=courses.filter(course=>{

const matchTitle=
course.title.toLowerCase().includes(searchValue);

const matchCategory=
categoryValue==="all" ||
course.category===categoryValue;

return matchTitle && matchCategory;

});

displayCourses(filtered);

}


// ==========================
// Events
// ==========================

searchInput.addEventListener("input",filterCourses);

categoryFilter.addEventListener("change",filterCourses);


// ==========================
// Initial Load
// ==========================

displayCourses(courses);