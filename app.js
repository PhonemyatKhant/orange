const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");
console.log(toggleBtn);

toggleBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

const clientsArray = [
  {
    image: "/images/image-emily.jpg",
    name: "Emily R.",
    job: "Marketing Director",
  },
  {
    image: "/images/image-thomas.jpg",
    name: "Thomas S.",
    job: "Chef Operation Officer",
  },
  {
    image: "/images/image-jennie.jpg",
    name: "Jennie S.",
    job: "Business Owner",
  },
];

const clientContainer = document.querySelector(".client-container");

const displayClients = clientsArray
  .map(function (item) {
    return `<div class="client-item">
          <div class="img-container">
            <img src=${item.image} alt=${item.name} />
            <p
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto, sapiente recusandae. Sint praesentium necessitatibus,
              dolor debitis reiciendis quam?</p
            >
            <h3>${item.name}</h3>
            <h4>${item.job}</h4>
          </div>
        </div>`;
  })
  .join("");
clientContainer.innerHTML += displayClients;

const projects = document.querySelector(".projects");

window.addEventListener("resize", function () {
  if (window.innerWidth > 765) {
    projects.innerHTML = `<img
        class="img1"
        src="/images/desktop/image-gallery-milkbottles.jpg"
        alt=""
      />
      <img class="img2" src="/images/desktop/image-gallery-orange.jpg" alt="" />
      <img class="img3" src="/images/desktop/image-gallery-cone.jpg" alt="" />
      <img
        class="img4"
        src="/images/desktop/image-gallery-sugarcubes.jpg"
        alt=""
      />`;
  }
});
