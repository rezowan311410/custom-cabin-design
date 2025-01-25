// Navbar Part Start

let navItems = document.querySelectorAll(".main__item ul li");
let left__images = document.querySelectorAll(".main__nav .left__image .img");
let lift__elements = document.querySelector(".lift__elements");
let cabin__door_elements = document.querySelector(".cabin__door_elements__js__work");
let cabin__walls_elements = document.querySelector(".cabin__walls_elements");

let navItem__0 = navItems[0];
let navItem__1 = navItems[1]
let navItem__2 = navItems[2]
let navItem__3 = navItems[3]
let navItem__4 = navItems[4]
let navItem__5 = navItems[5]
let navItem__6 = navItems[6]
let navItem__7 = navItems[7]




// Initial style for navItem__0
navItem__2.style.color = "#ff1e1e";
navItem__2.style.background = "#1f1e1e";
navItem__2.style.fontWeight = "400";

// Add click event listeners to all nav items
navItems.forEach(item => {
    item.addEventListener("click", function () {
        // Reset styles for all nav items
        navItems.forEach(i => {
            i.style.color = ""; // Reset color
            i.style.background = ""; // Reset background
            i.style.fontWeight = "";
        });

        // Set styles for the clicked item
        item.style.color = "#ff1e1e";
        item.style.background = "#1f1e1e";
        navItem__0.style.fontWeight = "400";
    });
});

left__images.forEach(image__item =>{
    left__images[0].style.display = "block"
    navItem__0.addEventListener("click",function(){
        left__images[0].style.display = "block";
        lift__elements.style.display = "block";
        cabin__door_elements.style.display = "none"
        left__images[1].style.display = "none";
        left__images[2].style.display = "none";
        cabin__walls_elements.style.display = "none";
        cabin__floor_elements__js__work.style.display = "none";
        cabin__celling_elements__js__work.style.display = "none";
        cabin__Handrail_elements__js__work.style.display = "none";
        cabin__COP_elements__js__work.style.display = "none";
        cabin__Mirror_elements__js__work.style.display = "none";
    })

    navItem__1.addEventListener("click",function(){
        left__images[1].style.display = "block";
        left__images[0].style.display = "none";
        left__images[2].style.display = "none";
        cabin__door_elements.style.display = "block"
        lift__elements.style.display = "none";
        cabin__walls_elements.style.display = "none";
        cabin__floor_elements__js__work.style.display = "none";
        cabin__celling_elements__js__work.style.display = "none";
        cabin__Handrail_elements__js__work.style.display = "none";
        cabin__COP_elements__js__work.style.display = "none";
        cabin__Mirror_elements__js__work.style.display = "none";
        
    })

    let cabin__walls__main__item  = document.querySelector(".cabin__walls__main__item ")

    navItem__2.addEventListener("click",function(){
        left__images[2].style.display = "block";
        left__images[0].style.display = "none";
        left__images[1].style.display = "none";
        cabin__door_elements.style.display = "none"
        lift__elements.style.display = "none";
        cabin__walls_elements.style.display = "block";
        cabin__walls__main__item.style.display = "none";
        cabin__floor_elements__js__work.style.display = "none";
        cabin__celling_elements__js__work.style.display = "none";
        cabin__Handrail_elements__js__work.style.display = "none"; 
        cabin__COP_elements__js__work.style.display = "none";
        cabin__Mirror_elements__js__work.style.display = "none";
    })
    let cabin__floor_elements__js__work  = document.querySelector(".cabin__floor_elements__js__work")
    navItem__3.addEventListener("click",function(){
        left__images[1].style.display = "block";
        left__images[0].style.display = "none";
        left__images[2].style.display = "none";
        cabin__door_elements.style.display = "none"
        lift__elements.style.display = "none";
        cabin__walls_elements.style.display = "none";
        cabin__celling_elements__js__work.style.display = "none";
        cabin__Handrail_elements__js__work.style.display = "none";
        cabin__COP_elements__js__work.style.display = "none";
        cabin__Mirror_elements__js__work.style.display = "none";
        cabin__floor_elements__js__work.style.display = "block"
    })

    let cabin__celling_elements__js__work  = document.querySelector(".cabin__celling_elements__js__work")
    navItem__4.addEventListener("click",function(){
        left__images[1].style.display = "block";
        left__images[0].style.display = "none";
        left__images[2].style.display = "none";
        cabin__door_elements.style.display = "none";
        lift__elements.style.display = "none";
        cabin__walls_elements.style.display = "none";
        cabin__floor_elements__js__work.style.display = "none";
        cabin__celling_elements__js__work.style.display = "block";
        cabin__Handrail_elements__js__work.style.display = "none";
        cabin__COP_elements__js__work.style.display = "none";
        cabin__Mirror_elements__js__work.style.display = "none"
    })

    let cabin__Handrail_elements__js__work  = document.querySelector(".cabin__Handrail_elements__js__work")
    navItem__5.addEventListener("click",function(){
        left__images[1].style.display = "block";
        left__images[0].style.display = "none";
        left__images[2].style.display = "none";
        cabin__door_elements.style.display = "none";
        lift__elements.style.display = "none";
        cabin__walls_elements.style.display = "none";
        cabin__floor_elements__js__work.style.display = "none";
        cabin__celling_elements__js__work.style.display = "none";
        cabin__COP_elements__js__work.style.display = "none";
                cabin__Mirror_elements__js__work.style.display = "none"
        cabin__Handrail_elements__js__work.style.display = "block";
    })

    let cabin__COP_elements__js__work  = document.querySelector(".cabin__COP_elements__js__work")
    navItem__6.addEventListener("click",function(){
        left__images[1].style.display = "block";
        left__images[0].style.display = "none";
        left__images[2].style.display = "none";
        cabin__door_elements.style.display = "none";
        lift__elements.style.display = "none";
        cabin__walls_elements.style.display = "none";
        cabin__floor_elements__js__work.style.display = "none";
        cabin__celling_elements__js__work.style.display = "none";
        cabin__Handrail_elements__js__work.style.display = "none";
                cabin__Mirror_elements__js__work.style.display = "none"
        cabin__COP_elements__js__work.style.display = "block";

    })

    let cabin__Mirror_elements__js__work  = document.querySelector(".cabin__Mirror_elements__js__work")
    navItem__7.addEventListener("click",function(){
        left__images[1].style.display = "block";
        left__images[0].style.display = "none";
        left__images[2].style.display = "none";
        cabin__door_elements.style.display = "none";
        lift__elements.style.display = "none";
        cabin__walls_elements.style.display = "none";
        cabin__floor_elements__js__work.style.display = "none";
        cabin__celling_elements__js__work.style.display = "none";
        cabin__Handrail_elements__js__work.style.display = "none";
        cabin__COP_elements__js__work.style.display = "none";
        cabin__Mirror_elements__js__work.style.display = "block"

    })

    
})








// Navbar Part End

// Navbar lift__elements part start
let lift__elements__button = document.querySelectorAll(".lift__elements .button span");
let lift__elements__img = document.querySelectorAll(".lift__elements .img svg");
lift__elements__img[1].style.display = "none";


lift__elements__button.forEach((button__item, index) => {
    if (index === 1) {
        button__item.style.background = "#ff1e1e";
         button__item.style.color = "#fff"
    }

    lift__elements__button[1].addEventListener("click",function(){
         button__item.style.background = "#ff1e1e";
         button__item.style.color = "#fff"
         lift__elements__button[0].style.background = "#DBDBDB";
         lift__elements__button[0].style.color = "#8c0000";
         lift__elements__img[1].style.display = "block";
         lift__elements__img[0].style.display = "none";
         
    })

    lift__elements__button[0].addEventListener("click",function(){
        button__item.style.background = "#ff1e1e";
        button__item.style.color = "#fff"
        lift__elements__button[1].style.background = "#DBDBDB";
        lift__elements__button[1].style.color = "#8c0000";
        lift__elements__img[0].style.display = "block";
        lift__elements__img[1].style.display = "none";
   })
});
// Navbar lift__elements part end

 // JavaScript for dropdown functionality
 document.querySelectorAll('.custom-select').forEach(customSelect => {
    const selectedOption = customSelect.querySelector('.selected-option');
    const optionsContainer = customSelect.querySelector('.options');
    const icon = customSelect.querySelector('.icon i'); // Access the icon inside the span

    // Toggle options visibility and icon when clicking on the selected option
    selectedOption.addEventListener('click', () => {
        const isOpen = optionsContainer.style.display === 'block';
        optionsContainer.style.display = isOpen ? 'none' : 'block';
        icon.classList.toggle('fa-angle-down'); // Toggle between down angle
        icon.classList.toggle('fa-angle-up'); // and up angle icons
    });

    // Update selected option and hide options on click
    optionsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('option')) {
            selectedOption.childNodes[0].textContent = e.target.textContent; // Update selected option text
            optionsContainer.style.display = 'none'; // Hide options after selection
            icon.classList.remove('fa-angle-up'); // Reset icon to down angle
            icon.classList.add('fa-angle-down'); // Ensure down angle is displayed
        }
    });

    // Hide options if clicking outside the dropdown
    document.addEventListener('click', (e) => {
        if (!customSelect.contains(e.target)) {
            optionsContainer.style.display = 'none';
            icon.classList.remove('fa-angle-up'); // Reset to down angle if clicked outside
            icon.classList.add('fa-angle-down');
        }
    });
});

// Add active class functionality for all items in the document
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});


document.querySelectorAll('.cabin__door_elements').forEach(cabin => {
    const selectOptions = cabin.querySelectorAll('.custom-select .options .option');
    const mainItemStain = cabin.querySelector('.main__item');
    const mainPaintPart = cabin.querySelector('.main__paint__part');

    selectOptions.forEach(item => {
        item.addEventListener("click", (e) => {
            const value = e.target.getAttribute("value");
            if (value === "1") {
                mainPaintPart.style.display = "block";
                mainItemStain.style.display = "none";
            } else if (value === "2") {
                mainPaintPart.style.display = "none";
                mainItemStain.style.display = "block";
            } else if (value === "3") {
                // Add logic for value "3" if needed
                mainPaintPart.style.display = "none";
                mainItemStain.style.display = "none";
               
            }
        });
    });
});

let facebook = document.querySelector(".facebook");

facebook.addEventListener("click",function(){
    window.open("https://www.facebook.com/", "_blank")
})

let whatsapp = document.querySelector(".whatsapp");

whatsapp.addEventListener("click",function(){
    window.open("https://web.whatsapp.com/", "_blank")
})

let linkedin = document.querySelector(".linkedin");

linkedin.addEventListener("click",function(){
    window.open("https://www.linkedin.com/", "_blank")
})


document.querySelector('.copy_url').addEventListener('click', function() {
    // Get the current website URL
    const url = window.location.href;

    // Copy the URL to the clipboard
    navigator.clipboard.writeText(url).then(() => {
        alert('Website URL copied Successfully!');
    }).catch(err => {
        console.error('Failed to copy URL: ', err);
    });
});






// Navbar cabin__door_elements part end
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
import { Reflector } from 'https://cdn.jsdelivr.net/npm/three@0.126.0/examples/jsm/objects/Reflector.js';

// Cabin Part Start
let scene, camera, renderer, room, raycaster, walls = [], ceiling, floor;
let controls;

function init() {
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color('White');
    camera = new THREE.PerspectiveCamera(75, 400 / 450, 0.1, 1000);
   
    // Renderer setup
    renderer = new THREE.WebGLRenderer({antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(400,600); // Fixed canvas size
    
    document.body.appendChild(renderer.domElement);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth transitions
    controls.dampingFactor = 0.05; // Adjust damping intensity
    controls.target.set(0, 2, 0); // Look at the center of the room
    controls.enableZoom = true; // Allow zooming
    controls.enablePan = true; // Allow panning
    controls.update(); // Ensure controls are applied


    // Create room (each part is a separate cube)
    room = new THREE.Group();
    room.position.set(0, 5, 0);
    room.rotation.set(0.08,0,0);
    const roomWidth = 10, roomHeight = 20, roomDepth = 10;

    const wallGeometry = new THREE.BoxGeometry(roomWidth, roomHeight, 0.2);



// let imgValue = "./images/linen.jpg";
// const images = document.querySelectorAll('.cabin__door_elements__js__work .main__item .item img');

// lift__elements__button[1].addEventListener("click", function(item) {
   
   
//     let imgValue = "./images/door1.jpg";
//     // Initialize TextureLoader
//     const textureLoader = new THREE.TextureLoader();

//     // Set initial image for the texture
//     let imgdemo = imgValue;  // Default texture
//     let texture = textureLoader.load(imgdemo);

       // Back Wall
//   const backWallMaterials = [
//     new THREE.MeshBasicMaterial({ map: texture }), // Front (Blue)
//     new THREE.MeshBasicMaterial({ map: texture }), // Back (Green)
//     new THREE.MeshBasicMaterial({ map: texture }), // Left (Blue)
//     new THREE.MeshBasicMaterial({ map: texture }), // Right (Yellow)
//     new THREE.MeshBasicMaterial({ map: texture }), // Top (Black)
//     new THREE.MeshBasicMaterial({ map: texture })  // Bottom (White)
// ];
// const backWall = new THREE.Mesh(wallGeometry, backWallMaterials);
// backWall.position.set(0, 0, -roomDepth / 2);
// room.add(backWall);
// walls.push(backWall);
// });

// images.forEach((img) => {
//     img.addEventListener("click", function(item) {
//         imgValue = item.target.getAttribute("src"); 
//         // Initialize TextureLoader
//         const textureLoader = new THREE.TextureLoader();

//         // Set initial image for the texture
//         let imgdemo = imgValue;  // Default texture
//         let texture = textureLoader.load(imgdemo);

//            // Back Wall
//       const backWallMaterials = [
//         new THREE.MeshBasicMaterial({color: 0x00ff00}), // Front (Blue)
//         new THREE.MeshBasicMaterial({ map: texture }), // Back (Green)
//         new THREE.MeshBasicMaterial({ map: texture }), // Left (Blue)
//         new THREE.MeshBasicMaterial({ map: texture }), // Right (Yellow)
//         new THREE.MeshBasicMaterial({ map: texture }), // Top (Black)
//         new THREE.MeshBasicMaterial({ map: texture })  // Bottom (White)
//     ];
//     const backWall = new THREE.Mesh(wallGeometry, backWallMaterials);
//     backWall.position.set(0, 0, -roomDepth / 2);
//     room.add(backWall);
//     walls.push(backWall);
//     });
// });

    // Front Wall
    let frontWall_width = 9.6;
    let frontWall_height = 0.2;
  

    const frontWallMaterials = [
        new THREE.MeshBasicMaterial({ color: 0x424244 }), // Front (Red)
        new THREE.MeshBasicMaterial({ color: 0x424244 }), // Back (Green)
        new THREE.MeshBasicMaterial({ color: 0x424244 }), // Left (Blue)
        new THREE.MeshBasicMaterial({ color: 0x424244 }), // Right (Yellow)
        new THREE.MeshBasicMaterial({ color: 0x424244 }), // Top (Black)
        new THREE.MeshBasicMaterial({ color: 0x424244 })  // Bottom (White)
    ];
    let frontWallGeometry = new THREE.BoxGeometry(frontWall_width, roomHeight, frontWall_height);
    const frontWall = new THREE.Mesh(frontWallGeometry, frontWallMaterials);
    
    // Set position and add to the scene
    let frontWall_roomDepth = 2;
    frontWall.position.set(0, 0, -5);
    room.add(frontWall);
    walls.push(frontWall);

     // left wall 
     let leftwall_singlePartWidth = 9.8;
let leftwall_singlePartHeight = roomHeight; // Plane geometry height corresponds to roomHeight

// Create PlaneGeometry
const leftWall_singlePartGeometry = new THREE.PlaneGeometry(leftwall_singlePartWidth, leftwall_singlePartHeight);

// Define material for the front side only
const leftWall_singlePartMaterial = new THREE.MeshBasicMaterial({
  color: 0x424244, // Purple
  side: THREE.FrontSide, // Render only the front side
});

// Create the wall mesh
const leftWall_singlePart = new THREE.Mesh(leftWall_singlePartGeometry, leftWall_singlePartMaterial);

// Rotate the wall (Y-axis rotation to align it as a vertical wall)
leftWall_singlePart.rotation.y = Math.PI / 2;

// Set position
let leftwallPosition = -0.3;
leftWall_singlePart.position.set(-roomWidth / 2, 0, leftwallPosition);

// Add the wall to the room
room.add(leftWall_singlePart);
walls.push(leftWall_singlePart);

     // rightwall

let rightwallSinglePart__width =  9.8;
let rightwallSinglePart__height =  0.2;
const rightWallSinglePartGeometry = new THREE.BoxGeometry(rightwallSinglePart__width, roomHeight, rightwallSinglePart__height);
const rightWallSinglePartMaterials = [
  new THREE.MeshBasicMaterial({ color: 0x424244}), // Front (Orange)
  new THREE.MeshBasicMaterial({ color: 0x424244}), // Back (Green)
  new THREE.MeshBasicMaterial({ color: 0x424244}), // Left (Blue)
  new THREE.MeshBasicMaterial({ color: 0x424244}), // Right (Yellow)
  new THREE.MeshBasicMaterial({ color: 0x424244}), // Top (Black)
  new THREE.MeshBasicMaterial({ color: 0x424244})  // Bottom (White)
];


let rightWallSinglePartMaterials_position = -0.3;
const rightWallSinglePart = new THREE.Mesh(rightWallSinglePartGeometry, rightWallSinglePartMaterials);
rightWallSinglePart.rotation.y = Math.PI / 2;
rightWallSinglePart.position.set(roomWidth / 2, 0, rightWallSinglePartMaterials_position);
room.add(rightWallSinglePart);
walls.push(rightWallSinglePart);

     
 
    // Add click event to modify the width

const textureLoader = new THREE.TextureLoader();
// Door Group
const doorGroup = new THREE.Group();
doorGroup.position.set(0, -1.2, 5);

// Door Dimensions
const doorWidth = 8;
const doorHeight = 18;
const doorDepth = 0.00;

// Left Door Panel (Cube)
let leftPanelDoorWidth = 2.75;
const leftPanelGeometry = new THREE.PlaneGeometry(leftPanelDoorWidth, 17.5); // Width and height for the panel
const leftPanelMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000ff, // Green Fill
    side: THREE.FrontSide, // Make the panel visible from both sides
});
const leftPanel = new THREE.Mesh(leftPanelGeometry, leftPanelMaterial);

// Rotate the plane to align it with the original BoxGeometry orientation
leftPanel.rotation.y = Math.PI / 1; // Rotate to match the depth of BoxGeometry

// Set position (same logic as original code)
leftPanel.position.set(-doorWidth / 5.05, 0, 0);

// Add to the doorGroup and walls array
doorGroup.add(leftPanel);
walls.push(leftPanel);


// Right Door Panel (Cube)
let rightpanelDoorWidth = 2.75;
const rightPanelGeometry = new THREE.PlaneGeometry(doorWidth / rightpanelDoorWidth, 17.5); // Width and height for the panel
const rightPanelMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000ff, // Blue Fill
    side: THREE.FrontSide, // Make the panel visible from both sides
});
const rightPanel = new THREE.Mesh(rightPanelGeometry, rightPanelMaterial);

// Rotate the plane to align it with the original BoxGeometry orientation
rightPanel.rotation.y = Math.PI / 1; // Rotate to match the depth of BoxGeometry

// Set position (same logic as original code)
rightPanel.position.set(doorWidth / 5.5, 0, 0);

// Add to the doorGroup and walls array
doorGroup.add(rightPanel);
walls.push(rightPanel);


// Button Event Listeners
let lift__elements__button = document.querySelectorAll(".lift__elements .button span");
let lift__elements__button1 = lift__elements__button[0];
let lift__elements__button2 = lift__elements__button[1];
let door_entrance =  document.querySelectorAll(".door_entrance li");
let door_entrance1 = door_entrance[0]
let door_entrance2 = door_entrance[1]

// door_entrance2.style.display = "none";
lift__elements__button1.addEventListener("click", () => {
    // Modify the left panel
    leftPanel.geometry.dispose();
    leftPanel.geometry = new THREE.BoxGeometry(doorWidth / 1, doorHeight, doorDepth);
    leftPanel.position.set(-doorWidth / 100, 0, 0); // Offset to the left

    // Modify the right panel
    rightPanel.geometry.dispose();
    rightpanelDoorWidth = 0; // Set width to zero
    rightPanel.geometry = new THREE.BoxGeometry(rightpanelDoorWidth, 0, doorHeight);

    door_entrance2.style.display = "none";
});

lift__elements__button2.addEventListener("click", () => {
    // Restore the left panel
    leftPanel.geometry.dispose();
    leftPanel.geometry = new THREE.BoxGeometry(doorWidth / 1.7, doorHeight, doorDepth);
    leftPanel.position.set(-doorWidth / 5, 0, 0); // Reset position

    // Restore the right panel
    rightPanel.geometry.dispose();
    rightpanelDoorWidth = 2.3; // Restore original width
    rightPanel.geometry = new THREE.BoxGeometry(doorWidth / rightpanelDoorWidth, doorHeight, doorDepth);
    rightPanel.position.set(doorWidth / 3.1, 0, 0); // Reset position

    door_entrance2.style.display = "block";
});


// Stroke (Outline) - Using Cubes to create a box outline around the door
// Stroke (Outline) - Using Cubes to create a box outline around the door
// Stroke (Outline) - Custom stroke widths
// Stroke (Outline) - Custom stroke dimensions
let strokeWidthTop = 2.5;    // Top stroke height
let strokeHeightTop = 1;   // Top stroke depth

let strokeWidthBottom = 1.0; // Bottom stroke height
let strokeHeightBottom = 0.2; // Bottom stroke depth

let strokeWidthLeft = 2;   // Left stroke width
let strokeHeightLeft = 1;  // Left stroke height

let strokeWidthRight = 2;  // Right stroke width
let strokeHeightRight = 1; // Right stroke height

// Custom positions for strokes
let strokePositionTop = { x: 0, y: 10, z: 0 };
let strokePositionBottom = { x: 0, y: -doorHeight / 2, z: 0 };
let strokePositionLeft = { x: -doorWidth / 2, y: -0.25, z: 0 };
let strokePositionRight = { x: doorWidth / 2, y: -0.25, z: 0 };

// Door frame
   


let FrameTexture = textureLoader.load("./images/pale-code.jpg");

FrameTexture.wrapS = THREE.RepeatWrapping;
FrameTexture.wrapT = THREE.RepeatWrapping;
FrameTexture.repeat.set(1, 1);
FrameTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
FrameTexture.magFilter = THREE.LinearFilter;
FrameTexture.minFilter = THREE.LinearMipMapLinearFilter;

let strokeMaterial = new THREE.MeshBasicMaterial({ map: FrameTexture });

let door_frame_bg = document.querySelector(".door_frame .door_frame_bg");
let cabinDoorImages2 = document.querySelectorAll(".cabin__door_img_item2 .main__item .item img");


let strokeMesh; // Assume this is your Three.js mesh where you want to apply the texture

// Select the door frame background and images

// Step 1: Add event listener to `door_frame_bg`
door_frame_bg.addEventListener("click", function (e) {
    console.log("Door frame clicked: Ready to select an image");
     e.stopPropagation()
    // Step 2: Add click listener to each image
    cabinDoorImages2.forEach((img) => {
        img.addEventListener("click", function (event) {
            console.log("Image clicked:", event.target.src);

            // Get the clicked image's source
            let imgSrc = event.target.getAttribute("src");

            // Step 3: Load texture and apply to strokeMaterial
            textureLoader.load(
                imgSrc,
                function (texture) {
                    console.log("Texture loaded successfully");

                    // Configure texture settings
                    texture.wrapS = THREE.RepeatWrapping;
                    texture.wrapT = THREE.RepeatWrapping;
                    texture.repeat.set(1, 1); // Adjust tiling
                    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

                    // Create or update the strokeMaterial
                    if (!strokeMaterial) {
                        strokeMaterial = new THREE.MeshBasicMaterial({ map: texture });
                    } else {
                        strokeMaterial.map = texture; // Update existing material
                        strokeMaterial.needsUpdate = true; // Mark material as needing an update
                    }

                    // Apply the updated material to the mesh
                    if (strokeMesh) {
                        strokeMesh.material = strokeMaterial;
                    } else {
                        console.error("No strokeMesh found to apply the material");
                    }
                },
                undefined,
                function (error) {
                    console.error("Error loading texture:", error);
                }
            );
        });
    });
});


let activeSection = null; // Global variable to track the active section

function resetListeners() {
    // Remove all previously attached event listeners
    document.querySelectorAll(".cabin__door_img_item img, .cabin__door_img_item2 img").forEach((img) => {
        let clonedImg = img.cloneNode(true); // Clone the image to remove all listeners
        img.parentNode.replaceChild(clonedImg, img); // Replace with a clean clone
    });
}

door_frame_bg.addEventListener("click", function (e) {
    console.log("Door frame clicked: Ready to select an image");

    if (activeSection !== "door_frame_bg") {
        activeSection = "door_frame_bg"; // Set active section
        resetListeners(); // Reset all existing listeners

        // Attach new listeners for door_frame_bg
        let cabinDoorImages2 = document.querySelectorAll(".cabin__door_img_item2 .main__item .item img");
        cabinDoorImages2.forEach((img) => {
            img.addEventListener("click", function (event) {
                console.log("Image clicked:", event.target.src);

                let imgSrc = event.target.getAttribute("src");
                textureLoader.load(
                    imgSrc,
                    function (texture) {
                        console.log("Texture loaded successfully");

                        texture.wrapS = THREE.RepeatWrapping;
                        texture.wrapT = THREE.RepeatWrapping;
                        texture.repeat.set(1, 1);
                        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

                        if (!strokeMaterial) {
                            strokeMaterial = new THREE.MeshBasicMaterial({ map: texture });
                        } else {
                            strokeMaterial.map = texture;
                            strokeMaterial.needsUpdate = true;
                        }

                        if (strokeMesh) {
                            strokeMesh.material = strokeMaterial;
                        } else {
                            console.error("No strokeMesh found to apply the material");
                        }
                    },
                    undefined,
                    function (error) {
                        console.error("Error loading texture:", error);
                    }
                );
            });
        });
    }
});

door_entrance1.addEventListener("click", function (e) {
    e.stopPropagation();

    if (activeSection !== "door_entrance1") {
        activeSection = "door_entrance1"; // Set active section
        resetListeners(); // Reset all existing listeners

        let cabinDoorImages = document.querySelectorAll(".cabin__door_img_item .main__item .item img");
        console.log("Images found:", cabinDoorImages.length);

        cabinDoorImages.forEach((img) => {
            img.addEventListener("click", function (event) {
                console.log("Image clicked:", event.target);
                const selectedImageSrc = event.target.getAttribute("src");
                console.log("Selected image source:", selectedImageSrc);
                applyTextureToDoor(selectedImageSrc);
            });
        });

        console.log("Door entrance functionality initialized.");
    }
});

door_entrance2.addEventListener("click", function (e) {
    e.stopPropagation();

    if (activeSection !== "door_entrance2") {
        activeSection = "door_entrance2"; // Set active section
        resetListeners(); // Reset all existing listeners

        let cabinDoorImages2 = document.querySelectorAll(".cabin__door_img_item2 .main__item .item img");
        cabinDoorImages2.forEach((img) => {
            img.addEventListener("click", function (event) {
                console.log("Image clicked:", event.target);
                const selectedImageSrc = event.target.getAttribute("src");
                console.log("Selected image source:", selectedImageSrc);
                applyTextureToDoor2(selectedImageSrc);
            });
        });
    }
});




function createStroke() {
    // Remove old stroke if it exists
    if (doorGroup.stroke) {
        doorGroup.remove(doorGroup.stroke);
    }

    const strokeGeometry = new THREE.Group();

    // Create each stroke part separately using PlaneGeometry
    const topStroke = new THREE.Mesh(
        new THREE.PlaneGeometry(doorWidth * 1.25,strokeWidthTop, strokeHeightTop), // Width and height for PlaneGeometry
        strokeMaterial
    );
    topStroke.position.set(strokePositionTop.x, strokePositionTop.y, strokePositionTop.z);
    topStroke.rotation.x = Math.PI / 1; // Rotate to make it horizontal

    const bottomStroke = new THREE.Mesh(
        new THREE.PlaneGeometry(doorWidth,strokeWidthBottom, strokeHeightBottom),
        strokeMaterial
    );
    bottomStroke.position.set(strokePositionBottom.x, strokePositionBottom.y, strokePositionBottom.z);
    bottomStroke.rotation.x = Math.PI / 1;

    const leftStroke = new THREE.Mesh(
        new THREE.PlaneGeometry(strokeWidthLeft, doorHeight,strokeHeightLeft),
        strokeMaterial
    );
    leftStroke.position.set(strokePositionLeft.x, strokePositionLeft.y, strokePositionLeft.z);
    leftStroke.rotation.y = Math.PI / 1; // Rotate to make it vertical

    const rightStroke = new THREE.Mesh(
        new THREE.PlaneGeometry(strokeWidthRight, doorHeight,strokeHeightRight),
        strokeMaterial
    );
    rightStroke.position.set(strokePositionRight.x, strokePositionRight.y, strokePositionRight.z);
    rightStroke.rotation.y = Math.PI / 1;

    // Add each stroke part to the group
    strokeGeometry.add(topStroke);
    strokeGeometry.add(bottomStroke);
    strokeGeometry.add(leftStroke);
    strokeGeometry.add(rightStroke);

    // Add strokes to doorGroup
    doorGroup.stroke = strokeGeometry;
    doorGroup.add(doorGroup.stroke);
}


// Call the function
createStroke();



// Add Door Group to Scene
room.add(doorGroup);

// Position the Camera


// Adjust Stroke Width Dynamically
// const strokeWidthInput = document.getElementById('strokeWidth');
// strokeWidthInput.addEventListener('input', (event) => {
//     strokeWidth = parseFloat(event.target.value);
//     createStroke(strokeWidth);
// });


    // Door Wall Image Part
door_entrance1.addEventListener("click", function (e) {
    e.stopPropagation();
    
    let cabinDoorImages = document.querySelectorAll(".cabin__door_img_item .main__item .item img");
    console.log("Images found:", cabinDoorImages.length);

    cabinDoorImages.forEach((img) => {
        img.addEventListener("click", function (event) {
            console.log("Image clicked:", event.target);
            const selectedImageSrc = event.target.getAttribute("src");
            console.log("Selected image source:", selectedImageSrc);
            applyTextureToDoor(selectedImageSrc);
        });
    });

    console.log("Door entrance functionality initialized.");
});

function applyTextureToDoor(imageSrc) {
    if (!imageSrc) {
        console.error("Image source is undefined or null!");
        return;
    }

    console.log(`Applying texture from source: ${imageSrc}`);

    const textureLoader = new THREE.TextureLoader();

    textureLoader.load(
        imageSrc,
        function (texture) {
            console.log("Texture loaded successfully:", texture);

            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(1, 1);
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            texture.magFilter = THREE.LinearFilter;
            texture.minFilter = THREE.LinearMipMapLinearFilter;

            if (!leftPanel) {
                console.error("leftPanel is not defined!");
                return;
            }

            leftPanel.material.dispose();
            leftPanel.material = new THREE.MeshBasicMaterial({ map: texture });

            console.log("Texture applied successfully.");
        },
        undefined,
        function (error) {
            console.error("Error loading texture:", error);
        }
    );
}

// Door Wall Image Part--2
door_entrance2.addEventListener("click", function (e) {
    e.stopPropagation();
    
    let cabinDoorImages2 = document.querySelectorAll(".cabin__door_img_item2 .main__item .item img");

    cabinDoorImages2.forEach((img) => {
        img.addEventListener("click", function (event) {
            console.log("Image clicked:", event.target);
            const selectedImageSrc = event.target.getAttribute("src");
            console.log("Selected image source:", selectedImageSrc);
            applyTextureToDoor2(selectedImageSrc);
        });
    });
});

function applyTextureToDoor2(imageSrc) {
    const textureLoader = new THREE.TextureLoader();

    textureLoader.load(
        imageSrc,
        function (texture) {
            console.log("Texture loaded successfully:", texture);

            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(1, 1);
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            texture.magFilter = THREE.LinearFilter;
            texture.minFilter = THREE.LinearMipMapLinearFilter;

          
            rightPanel.material.dispose();
            rightPanel.material = new THREE.MeshBasicMaterial({ map: texture });

        },
        
    );
}



    // Back Wall--1
//    const WallGroup = new THREE.Group();  
//   let backWall1Height = 16;
//    const backWallGeometry1 = new THREE.BoxGeometry(4, backWall1Height, 0.2);
//    const backWallMaterials1 = [
//      new THREE.MeshBasicMaterial({color: 0x00ff00}), // Front (Blue)
//      new THREE.MeshBasicMaterial({color: 0x00ff00}), // Back (Green)
//      new THREE.MeshBasicMaterial({color: 0x00ff00}), // Left (Blue)
//      new THREE.MeshBasicMaterial({color: 0x00ff00}), // Right (Yellow)
//      new THREE.MeshBasicMaterial({color: 0x00ff00}), // Top (Black)
//      new THREE.MeshBasicMaterial({color: 0x00ff00})  // Bottom (White)
//  ];
//  const backWall1 = new THREE.Mesh(backWallGeometry1, backWallMaterials1);
//  backWall1.position.set(-3, 0, -roomDepth / 2);
//  WallGroup.add(backWall1);
//  walls.push(backWall1);


//      // Back Wall--2
//      let backWall2Height = 16;
//       const backWallGeometry2 = new THREE.BoxGeometry(4, backWall2Height, 0.2);
//       const backWallMaterials2 = [
//         new THREE.MeshBasicMaterial({color: 0x00ff00}), // Front (Blue)
//         new THREE.MeshBasicMaterial({color: 0x00ff00}), // Back (Green)
//         new THREE.MeshBasicMaterial({color: 0x00ff00}), // Left (Blue)
//         new THREE.MeshBasicMaterial({color: 0x00ff00}), // Right (Yellow)
//         new THREE.MeshBasicMaterial({color: 0x00ff00}), // Top (Black)
//         new THREE.MeshBasicMaterial({color: 0x00ff00})  // Bottom (White)
//     ];
//     const backWall2 = new THREE.Mesh(backWallGeometry2, backWallMaterials2);
//     backWall2.position.set(2, 0, -roomDepth / 2);
//     WallGroup.add(backWall2);
//     walls.push(backWall2);
//     room.add(WallGroup);

 // Left Wall
 const leftWallGroup = new THREE.Group();

 // click to default left wall 2 part start
 let double__part__wall = document.querySelector(".cabin__walls_elements .double__part__wall");
 let double_part_unequal_wall = document.querySelector(".cabin__walls_elements .double_part_unequal_wall");
 let main_menu_wall_part = document.querySelector(".cabin__walls_elements .main_menu_wall_part");

 let rightwall__menu = document.querySelector(".cabin__walls_elements .rightwall__menu")
 function doublePartPwallHandealer(
    leftwallWidthNum,
    leftwallpositionNum,
    leftwallwidth1Num,
    leftwall1positionNum,
    frontWall1_Position,
    frontWall2_Position
    ,leftWall2_Width
    ,leftWall2_Position,
    leftWall2_roomHeight,
    leftWall2_Display,
    frontWall3_Position,
    wall_Thickness,
    wall_2_Thickness,
    wall_cop_width,
    wall_cop_position,
    right_wall3_cop_position
 ){
    let cabin__walls__main__item  = document.querySelector(".cabin__walls__main__item ");
    cabin__walls__main__item.style.display = "none";
    rightwall__menu.style.display = "block";
  
   
 
// leftwall__menu part start
   let leftwall__menu = document.querySelector(".cabin__walls_elements .leftwall__menu")
   leftwall__menu.style.display = "inline-block";
//    console.log(walls[1])
// leftwall__menu part end
// // left wall  part start
let leftwallWidth = leftwallWidthNum;

const leftWallGeometry = new THREE.PlaneGeometry(leftwallWidth, roomHeight); // Replaced BoxGeometry with PlaneGeometry

const leftWallMaterial = new THREE.MeshBasicMaterial({ color: 0x4D4D4F, side: THREE.FrontSide}); // Single material for the plane

let leftwallposition = leftwallpositionNum;
const leftWall = new THREE.Mesh(leftWallGeometry, leftWallMaterial); // Single material instead of an array

leftWall.rotation.y = Math.PI / 2; // No change in rotation
leftWall.position.set(-roomWidth / 2, 0, leftwallposition); // No change in position
leftWall.geometry.computeBoundingBox(); // Compute bounding box for the plane

// Get the width of the left wall from the bounding box
const boundingBox = leftWall.geometry.boundingBox;
const leftWallWidth = boundingBox.max.x - boundingBox.min.x;

leftWallGroup.add(leftWall); // Add to the group
walls.push(leftWall); // Add to the walls array


// left wall 1
let leftwallwidth1 = leftwallwidth1Num;
const leftWallGeometry1 = new THREE.PlaneGeometry(leftwallwidth1, roomHeight); // Replaced BoxGeometry with PlaneGeometry

const leftWallMaterial1 = new THREE.MeshBasicMaterial({
  color: 0x4D4D4F,
  side: THREE.FrontSide, // Ensures both sides of the plane are visible
}); // Single material for PlaneGeometry

let leftwall1position = leftwall1positionNum;
const leftWall1 = new THREE.Mesh(leftWallGeometry1, leftWallMaterial1);
leftWall1.rotation.y = Math.PI / 2; // No change to rotation
leftWall1.position.set(-roomWidth / 2, 0, leftwall1position); // No change to position
leftWall1.geometry.computeBoundingBox(); // Compute bounding box for the plane

const boundingBox1 = leftWall1.geometry.boundingBox;
const leftWallWidth1 = boundingBox1.max.x - boundingBox1.min.x;

leftWallGroup.add(leftWall1); // Add the wall to the group
walls.push(leftWall1); // Add the wall to the walls array

// click to default left wall 1 part end
let cabin__walls__main__item__img = document.querySelectorAll(".cabin__walls__main__item .item img");
let cabinwall__left1 = document.querySelectorAll(".cabinwall__left1 .item img");

// leftwall__menu part start
let leftwall__menubar = document.querySelectorAll(".cabin__walls_elements .leftwall__menu li");
let leftwall__menu__one = leftwall__menubar[0];
let leftwall__menu__two = leftwall__menubar[1];
let leftwall__menu__three = leftwall__menubar[2];
let leftwall__menu__four = leftwall__menubar[3];
leftwall__menu__four.style.background = "#8c0000";
leftwall__menu__three.style.display = leftWall2_Display;


// Function to clear all event listeners from images
function clearEventListeners(images, handler) {
    images.forEach((item) => {
        item.removeEventListener("click", handler);
    });
}

// Function to add event listeners to a specific set of images
function addEventListeners(images, handler) {
    images.forEach((item) => {
        item.addEventListener("click", handler);
    });
}

// Event listener for menu one

leftwall__menu__one.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event propagation
   
    // Show the cabin walls item
    let cabin__walls__main__item = document.querySelector(".cabin__walls__main__item");
    cabin__walls__main__item.style.display = "inline-block";

    // Clear all existing listeners
    clearEventListeners(cabin__walls__main__item__img, leftwallimgwork);
    clearEventListeners(cabinwall__left1, leftwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, rightwall1imgwork);
    clearEventListeners(cabinwall__left1, rightwall2imgwork); 
    clearEventListeners(cabin__walls__main__item__img, frontwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, leftwall2imgwork);
    // Add the current listener
    addEventListeners(cabin__walls__main__item__img, leftwallimgwork);
});

// Event listener for menu two
leftwall__menu__two.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event propagation
    // Show the cabin walls item
    let cabin__walls__main__item = document.querySelector(".cabin__walls__main__item");
    cabin__walls__main__item.style.display = "inline-block";

    // Clear all existing listeners
    clearEventListeners(cabin__walls__main__item__img, leftwallimgwork);
    clearEventListeners(cabinwall__left1, leftwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, rightwall1imgwork);
    clearEventListeners(cabinwall__left1, rightwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, leftwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall3imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall3imgwork);
    clearEventListeners(cabinwall__left1, rightwall3imgwork);
    clearEventListeners(cabinwall__left1, rightwall3imgwork);
    // Add the current listener
    addEventListeners(cabinwall__left1, leftwall1imgwork);
});

leftwall__menu__four.addEventListener("click",function(e){
    let leftwall__menu = document.querySelector(".cabin__walls_elements .leftwall__menu")
    leftwall__menu.style.display = "none";
})

leftwall__menu__three.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event propagation
   
    // Show the cabin walls item
    let cabin__walls__main__item = document.querySelector(".cabin__walls__main__item");
    cabin__walls__main__item.style.display = "inline-block";

    // Clear all existing listeners
    clearEventListeners(cabin__walls__main__item__img, leftwallimgwork);
    clearEventListeners(cabinwall__left1, leftwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, rightwall1imgwork);
    clearEventListeners(cabinwall__left1, rightwall2imgwork); 
    clearEventListeners(cabin__walls__main__item__img, frontwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall3imgwork);
    clearEventListeners(cabinwall__left1, rightwall3imgwork);

    // Add the current listener
    addEventListeners(cabin__walls__main__item__img, leftwall2imgwork);
});


function leftwallimgwork(item) {

    let  leftwall1img = item.target.getAttribute("src"); 
   
      // Initialize TextureLoader
      const textureLoader = new THREE.TextureLoader();

      // Set initial image for the texture
      let leftwall1imgmap = leftwall1img;  // Default texture
      let texture1 = textureLoader.load(leftwall1imgmap);
      texture1.wrapS = THREE.RepeatWrapping;
      texture1.wrapT = THREE.RepeatWrapping;
      texture1.repeat.set(1, 1); // Tiling
      texture1.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture1.magFilter = THREE.LinearFilter;
      texture1.minFilter = THREE.LinearMipMapLinearFilter;
 
      let leftwallWidth = leftwallWidthNum;

const leftWallGeometry = new THREE.PlaneGeometry(leftwallWidth, roomHeight); // Replaced BoxGeometry with PlaneGeometry

const leftWallMaterial = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.FrontSide}); // Single material for the plane

let leftwallposition = leftwallpositionNum;
const leftWall = new THREE.Mesh(leftWallGeometry, leftWallMaterial); // Single material instead of an array

leftWall.rotation.y = Math.PI / 2; // No change in rotation
leftWall.position.set(-roomWidth / 2, 0, leftwallposition); // No change in position
leftWall.geometry.computeBoundingBox(); // Compute bounding box for the plane

// Get the width of the left wall from the bounding box
const boundingBox = leftWall.geometry.boundingBox;
const leftWallWidth = boundingBox.max.x - boundingBox.min.x;

leftWallGroup.add(leftWall); // Add to the group
walls.push(leftWall); // Add to the walls array
}
    // left wall 1
    function leftwall1imgwork(item) {
    let  leftwall1img = item.target.getAttribute("src"); 

    // Initialize TextureLoader
    const textureLoader = new THREE.TextureLoader();

    // Set initial image for the texture
    let leftwall1imgmap = leftwall1img;  // Default texture
    let texture1 = textureLoader.load(leftwall1imgmap);
    texture1.wrapS = THREE.RepeatWrapping;
    texture1.wrapT = THREE.RepeatWrapping;
    texture1.repeat.set(1, 1); // Tiling
    texture1.anisotropy = renderer.capabilities.getMaxAnisotropy();
    texture1.magFilter = THREE.LinearFilter;     
    texture1.minFilter = THREE.LinearMipMapLinearFilter;    
    let leftwallwidth1 = leftwallwidth1Num;
    const leftWallGeometry1 = new THREE.PlaneGeometry(leftwallwidth1, roomHeight); // Replaced BoxGeometry with PlaneGeometry
    
    const leftWallMaterial1 = new THREE.MeshBasicMaterial({
      map: texture1,
      side: THREE.FrontSide, // Ensures both sides of the plane are visible
    }); // Single material for PlaneGeometry
    
    let leftwall1position = leftwall1positionNum;
    const leftWall1 = new THREE.Mesh(leftWallGeometry1, leftWallMaterial1);
    leftWall1.rotation.y = Math.PI / 2; // No change to rotation
    leftWall1.position.set(-roomWidth / 2, 0, leftwall1position); // No change to position
    leftWall1.geometry.computeBoundingBox(); // Compute bounding box for the plane
    
    const boundingBox1 = leftWall1.geometry.boundingBox;
    const leftWallWidth1 = boundingBox1.max.x - boundingBox1.min.x;
    
    leftWallGroup.add(leftWall1); // Add the wall to the group
    walls.push(leftWall1); // Add the wall to the walls array
    }
    // left wall 2
    function leftwall2imgwork(item) {

        let  leftwall1img = item.target.getAttribute("src"); 
       
          // Initialize TextureLoader
          const textureLoader = new THREE.TextureLoader();
    
          // Set initial image for the texture
          let leftwall1imgmap = leftwall1img;  // Default texture
          let texture1 = textureLoader.load(leftwall1imgmap);
          texture1.wrapS = THREE.RepeatWrapping;
          texture1.wrapT = THREE.RepeatWrapping;
          texture1.repeat.set(1, 1); // Tiling
          texture1.anisotropy = renderer.capabilities.getMaxAnisotropy();
          texture1.magFilter = THREE.LinearFilter;
          texture1.minFilter = THREE.LinearMipMapLinearFilter;
     
          let leftwallwidth2 = leftWall2_Width;
          let roomHeight2 = leftWall2_roomHeight;
          
          // Replace BoxGeometry with PlaneGeometry
          const leftWallGeometry2 = new THREE.PlaneGeometry(leftwallwidth2, roomHeight);
          
          const leftWallMaterial2 = new THREE.MeshBasicMaterial({
            map:texture1, // Use one material since PlaneGeometry supports only one
            side: THREE.FrontSide, // Ensure visibility from both sides
          });
          
          const leftWall2 = new THREE.Mesh(leftWallGeometry2, leftWallMaterial2);
          leftWall2.rotation.y = Math.PI / 2; // No change to rotation
          let leftWall2_Position2 = leftWall2_Position;
          leftWall2.position.set(-roomWidth / 2, 0, leftWall2_Position2); // No change to position
          
          // Add to group and walls array
          leftWallGroup.add(leftWall2);
          walls.push(leftWall2);
    }

// left wall--3
let leftwallwidth2 = leftWall2_Width;
let roomHeight2 = leftWall2_roomHeight;

// Replace BoxGeometry with PlaneGeometry
const leftWallGeometry2 = new THREE.PlaneGeometry(leftwallwidth2, roomHeight);

const leftWallMaterial2 = new THREE.MeshBasicMaterial({
  color:  0x4D4D4F, // Use one material since PlaneGeometry supports only one
  side: THREE.FrontSide, // Ensure visibility from both sides
});

const leftWall2 = new THREE.Mesh(leftWallGeometry2, leftWallMaterial2);
leftWall2.rotation.y = Math.PI / 2; // No change to rotation
let leftWall2_Position2 = leftWall2_Position;
leftWall2.position.set(-roomWidth / 2, 0, leftWall2_Position2); // No change to position

// Add to group and walls array
leftWallGroup.add(leftWall2);
walls.push(leftWall2);

leftWallGroup.position.set(0, 0, 0);
room.add(leftWallGroup);

// hide left wall 
let rightwallSinglePart__width =  0;
let rightwallSinglePart__height =  0;
// Remove old geometry and assign a new one
rightWallSinglePart.geometry.dispose(); // Dispose of old geometry to free memory
rightWallSinglePart.geometry = new THREE.BoxGeometry( rightwallSinglePart__width, roomHeight,rightwallSinglePart__height);


// Right wall part start
// const rightWallGroup = new THREE.Group();
// Right Wall-1  
let rightwall1__width = leftwallWidthNum; // Keep the same width as the left wall
const rightWallGeometry1 = new THREE.PlaneGeometry(rightwall1__width, roomHeight);

// Create a single material for the plane
const rightWallMaterial1 = new THREE.MeshBasicMaterial({
    color: 0x4D4D4F, // Color for the wall
    side: THREE.FrontSide, // Render both front and back face
});

// Create the right wall mesh
const rightWall1 = new THREE.Mesh(rightWallGeometry1, rightWallMaterial1);

let rightwall1_position = leftwallpositionNum; // Use your existing position value

// Set position and rotation
rightWall1.position.set(roomWidth / 2, 0, rightwall1_position); // Set position as specified
rightWall1.rotation.y = -Math.PI / 2; // Rotate to face the correct direction

// Optional: Compute bounding box
rightWall1.geometry.computeBoundingBox();

// Add to the room and walls array
room.add(rightWall1);
walls.push(rightWall1);





 // Right Wal-2   
 let rightwall2__width = leftwallwidth1Num; // Keep the same width as the left wall
 const rightWallGeometry2 = new THREE.PlaneGeometry(rightwall2__width, roomHeight);
 
 // Create a single material for the plane
 const rightWallMaterial2 = new THREE.MeshBasicMaterial({
     color: 0x4D4D4F, // Color for the wall
     side: THREE.FrontSide, // Render both front and back faces
 });
 
 // Create the right wall mesh
 const rightWall2 = new THREE.Mesh(rightWallGeometry2, rightWallMaterial2);
 
 let rightwall2_position = leftwall1positionNum; // Use your existing position value
 
 // Set position and rotation
 rightWall2.position.set(roomWidth / 2, 0, rightwall2_position); // Set position as specified
 rightWall2.rotation.y = -Math.PI / 2; // Rotate to face the correct direction
 
 // Optional: Compute bounding box
 rightWall2.geometry.computeBoundingBox();
 
 // Add to the room and walls array
 room.add(rightWall2);
 walls.push(rightWall2);
 

 // Right Wal-3    
 
 let rightwall3__width = leftWall2_Width;  // Keep the same width as the left wall
 let rightwall3__Height = leftWall2_roomHeight; // Height of the wall
 
 // Use PlaneGeometry instead of BoxGeometry for a 2D flat plane
 const rightWallGeometry3 = new THREE.PlaneGeometry(rightwall3__width,roomHeight);
 
 // Create a single material for the plane (double-sided)
 const rightWallMaterial3 = new THREE.MeshBasicMaterial({
     color: 0x4D4D4F,  // Front face color
     side: THREE.FrontSide,  // Make sure both sides are rendered
 });
 
 // Create the right wall mesh using PlaneGeometry
 const rightWall3 = new THREE.Mesh(rightWallGeometry3, rightWallMaterial3);
 
 let leftWall3_Position3 = leftWall2_Position;  // Use the existing position value
 
 // Set position (adjust Z-axis positioning based on your scene)
 rightWall3.position.set(roomWidth / 2, 0, leftWall3_Position3); // Set position as specified
 
 // Ensure the wall is facing the camera
 rightWall3.rotation.y = -Math.PI / 2;  // Rotated to face the desired direction
 
 // Add to the room and walls array
 room.add(rightWall3);
 walls.push(rightWall3);
 
// hide Right wall 
let leftwall_singlePartWidth = 0;
let leftwall_singlePartheight = 0;
// Remove old geometry and assign a new one
leftWall_singlePart.geometry.dispose(); // Dispose of old geometry to free memory
leftWall_singlePart.geometry = new THREE.BoxGeometry(leftwall_singlePartWidth, roomHeight,leftwall_singlePartheight);
// Right Wall Image Part
let rightwall__menubar = document.querySelectorAll(".main_menu_wall_part .rightwall__menu li");

let rightwall__menubar__one = rightwall__menubar[0];
let rightwall__menubar__two = rightwall__menubar[1];
let rightwall__menubar__three = rightwall__menubar[2];
let rightwall__menubar__four = rightwall__menubar[3];

rightwall__menubar__four.style.background = "#8c0000";
rightwall__menubar__three.style.display = leftWall2_Display;

rightwall__menubar__one.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event propagation

    // Show the cabin walls item
    let cabin__walls__main__item = document.querySelector(".cabin__walls__main__item");
    cabin__walls__main__item.style.display = "inline-block";
    
    // Clear all existing listeners
    clearEventListeners(cabin__walls__main__item__img, leftwallimgwork);
    clearEventListeners(cabinwall__left1, leftwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, rightwall1imgwork);
    clearEventListeners(cabinwall__left1, rightwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, leftwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall3imgwork);
    clearEventListeners(cabinwall__left1, rightwall3imgwork);
    // Add the current listener
    addEventListeners(cabin__walls__main__item__img, rightwall1imgwork);
});

function rightwall1imgwork(item) {

    let  leftwall1img = item.target.getAttribute("src"); 
   
      // Initialize TextureLoader
      const textureLoader = new THREE.TextureLoader();

      // Set initial image for the texture
      let leftwall1imgmap = leftwall1img;  // Default texture
      let texture = textureLoader.load(leftwall1imgmap);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1); // Tiling
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearMipMapLinearFilter;
      let rightwall1__width = leftwallWidthNum; // Keep the same width as the left wall
      const rightWallGeometry1 = new THREE.PlaneGeometry(rightwall1__width, roomHeight);
      
      // Create a single material for the plane
      const rightWallMaterial1 = new THREE.MeshBasicMaterial({
          map: texture, // Color for the wall
          side: THREE.FrontSide, // Render both front and back face
      });
      
      // Create the right wall mesh
      const rightWall1 = new THREE.Mesh(rightWallGeometry1, rightWallMaterial1);
      
      let rightwall1_position = leftwallpositionNum; // Use your existing position value
      
      // Set position and rotation
      rightWall1.position.set(roomWidth / 2, 0, rightwall1_position); // Set position as specified
      rightWall1.rotation.y = -Math.PI / 2; // Rotate to face the correct direction
      
      // Optional: Compute bounding box
      rightWall1.geometry.computeBoundingBox();
      
      // Add to the room and walls array
      room.add(rightWall1);
      walls.push(rightWall1);
}

// right wall part 2
rightwall__menubar__two.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event propagation

    // Show the cabin walls item
    let cabin__walls__main__item = document.querySelector(".cabin__walls__main__item");
    cabin__walls__main__item.style.display = "inline-block";
    
    // Clear all existing listeners
    clearEventListeners(cabin__walls__main__item__img, leftwallimgwork);
    clearEventListeners(cabinwall__left1, leftwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, rightwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, leftwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall3imgwork);
    clearEventListeners(cabinwall__left1, rightwall3imgwork);
    // Add the current listener
    addEventListeners(cabinwall__left1, rightwall2imgwork);
});

function rightwall2imgwork(item) {
    let  leftwall1img = item.target.getAttribute("src"); 
   
      // Initialize TextureLoader
      const textureLoader = new THREE.TextureLoader();

      // Set initial image for the texture
      let leftwall1imgmap = leftwall1img;  // Default texture
      let texture = textureLoader.load(leftwall1imgmap);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1); // Tiling
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearMipMapLinearFilter;
      let rightwall2__width = leftwallwidth1Num; // Keep the same width as the left wall
      const rightWallGeometry2 = new THREE.PlaneGeometry(rightwall2__width, roomHeight);
      
      // Create a single material for the plane
      const rightWallMaterial2 = new THREE.MeshBasicMaterial({
          map:texture, // Color for the wall
          side: THREE.FrontSide, // Render both front and back faces
      });
      
      // Create the right wall mesh
      const rightWall2 = new THREE.Mesh(rightWallGeometry2, rightWallMaterial2);
      
      let rightwall2_position = leftwall1positionNum; // Use your existing position value
      
      // Set position and rotation
      rightWall2.position.set(roomWidth / 2, 0, rightwall2_position); // Set position as specified
      rightWall2.rotation.y = -Math.PI / 2; // Rotate to face the correct direction
      
      // Optional: Compute bounding box
      rightWall2.geometry.computeBoundingBox();
      
      // Add to the room and walls array
      room.add(rightWall2);
      walls.push(rightWall2);
}

rightwall__menubar__four.addEventListener("click",function(e){
    let rightwall__menu = document.querySelector(".cabin__walls_elements .rightwall__menu")
    rightwall__menu.style.display = "none";
})

// right wall 3 image part
rightwall__menubar__three.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event propagation

    // Show the cabin walls item
    let cabin__walls__main__item = document.querySelector(".cabin__walls__main__item");
    cabin__walls__main__item.style.display = "inline-block";
    
    // Clear all existing listeners
    clearEventListeners(cabin__walls__main__item__img, leftwallimgwork);
    clearEventListeners(cabinwall__left1, leftwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, rightwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, leftwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall3imgwork);
    clearEventListeners(cabinwall__left1, rightwall2imgwork);
    // Add the current listener
    addEventListeners(cabinwall__left1, rightwall3imgwork);
});

function rightwall3imgwork(item) {
    let  leftwall1img = item.target.getAttribute("src"); 
   
      // Initialize TextureLoader
      const textureLoader = new THREE.TextureLoader();

      // Set initial image for the texture
      let leftwall1imgmap = leftwall1img;  // Default texture
      let texture = textureLoader.load(leftwall1imgmap);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1); // Tiling
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearMipMapLinearFilter;
      let rightwall3__width = leftWall2_Width;  // Keep the same width as the left wall
      let rightwall3__Height = leftWall2_roomHeight; // Height of the wall
      
      // Use PlaneGeometry instead of BoxGeometry for a 2D flat plane
      const rightWallGeometry3 = new THREE.PlaneGeometry(rightwall3__width,roomHeight);
      
      // Create a single material for the plane (double-sided)
      const rightWallMaterial3 = new THREE.MeshBasicMaterial({
          map:texture,  // Front face color
          side: THREE.FrontSide,  // Make sure both sides are rendered
      });
      
      // Create the right wall mesh using PlaneGeometry
      const rightWall3 = new THREE.Mesh(rightWallGeometry3, rightWallMaterial3);
      
      let leftWall3_Position3 = leftWall2_Position;  // Use the existing position value
      
      // Set position (adjust Z-axis positioning based on your scene)
      rightWall3.position.set(roomWidth / 2, 0, leftWall3_Position3); // Set position as specified
      
      // Ensure the wall is facing the camera
      rightWall3.rotation.y = -Math.PI / 2;  // Rotated to face the desired direction
      
      // Add to the room and walls array
      room.add(rightWall3);
      walls.push(rightWall3);
}

// Front Wall--1
const FontWallGroup = new THREE.Group();

let frontWall1_Width = leftwallWidthNum;

// Replace BoxGeometry with PlaneGeometry
const frontWallGeometry1 = new THREE.PlaneGeometry(frontWall1_Width, roomHeight);

const frontWallMaterial1 = new THREE.MeshBasicMaterial({
  color: 0x4D4D4F,
  side: THREE.FrontSide, // Only render the front face
});

// Create the front wall mesh
const frontWall1 = new THREE.Mesh(frontWallGeometry1, frontWallMaterial1);
let frontWall1_Position1 = frontWall1_Position;

// Set position and rotation
frontWall1.position.set(frontWall1_Position1, 0, -5);

// IMPORTANT: Adjust rotation to face the camera
frontWall1.rotation.y = 0; // Or Math.PI / 2, depending on your scene setup

// Compute bounding box (optional, if needed)
frontWall1.geometry.computeBoundingBox();

// Add the front wall to the group and walls array
FontWallGroup.add(frontWall1);
walls.push(frontWall1);



// Front Wall--2
let frontWall2_Width = leftwallwidth1Num;

// Replace BoxGeometry with PlaneGeometry
const frontWallGeometry2 = new THREE.PlaneGeometry(frontWall2_Width, roomHeight);

// Create a single material for the plane
const frontWallMaterial2 = new THREE.MeshBasicMaterial({
    color: 0x4D4D4F, // Color for the front face
    side: THREE.FrontSide, // Render only the front side
});

// Create the front wall mesh
const frontWall2 = new THREE.Mesh(frontWallGeometry2, frontWallMaterial2);

// Set position and rotation
let frontWall2_Position2 = frontWall2_Position; // Custom position variable
frontWall2.position.set(frontWall2_Position2, 0, -5);
frontWall2.rotation.y = 0; // Adjust rotation to ensure the front side is visible

// Add the front wall to the group and walls array
FontWallGroup.add(frontWall2);
walls.push(frontWall2);


// Front Wall--3
let frontWall3_Width = leftWall2_Width; // Keep the same width as the left wall
const frontWallGeometry3 = new THREE.PlaneGeometry(frontWall3_Width, roomHeight);

// Create a single material for the plane
const frontWallMaterials3 = new THREE.MeshBasicMaterial({
    color: 0x4D4D4F, // Color for the front face
    side: THREE.FrontSide, // Render only the front side
});

const frontWall3 = new THREE.Mesh(frontWallGeometry3, frontWallMaterials3);
let frontWall3_Position3 = frontWall3_Position; // Use your existing position value
frontWall3.position.set(frontWall3_Position3, 0, -5); // Set position as specified

frontWall3.geometry.computeBoundingBox(); // Optional: Compute bounding box

FontWallGroup.add(frontWall3); // Add to the group
walls.push(frontWall3); // Add to the walls array


room.add(FontWallGroup)
// Right Wall Image Part
let frontwall__menubar = document.querySelectorAll(".main_menu_wall_part .frontwall__menu li");

let frontwall__menubar__one = frontwall__menubar[0];
let frontwall__menubar__two = frontwall__menubar[1];
let frontwall__menubar__three = frontwall__menubar[2];
let frontwall__menubar__four = frontwall__menubar[3];

frontwall__menubar__four.style.background = "#8c0000";
frontwall__menubar__three.style.display =  leftWall2_Display;   

frontwall__menubar__one.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event propagation

    // Show the cabin walls item
    let cabin__walls__main__item = document.querySelector(".cabin__walls__main__item");
    cabin__walls__main__item.style.display = "inline-block";
    
    // Clear all existing listeners
    clearEventListeners(cabin__walls__main__item__img, leftwallimgwork);
    clearEventListeners(cabinwall__left1, leftwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, rightwall1imgwork);
    clearEventListeners(cabinwall__left1, rightwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, leftwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall3imgwork);
    clearEventListeners(cabinwall__left1, rightwall3imgwork);
    // Add the current listener
    addEventListeners(cabin__walls__main__item__img, frontwall1imgwork);
});

function frontwall1imgwork(item) {
    let  frontwall1img = item.target.getAttribute("src"); 
   
      // Initialize TextureLoader
      const textureLoader = new THREE.TextureLoader();

      // Set initial image for the texture
      let  frontwall1imgmap =  frontwall1img;  // Default texture
      let texture = textureLoader.load(frontwall1imgmap);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1); // Tiling
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearMipMapLinearFilter;
      let frontWall1_Width = leftwallWidthNum;

      // Replace BoxGeometry with PlaneGeometry
      const frontWallGeometry1 = new THREE.PlaneGeometry(frontWall1_Width, roomHeight);
      
      const frontWallMaterial1 = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.FrontSide, // Only render the front face
      });
      
      // Create the front wall mesh
      const frontWall1 = new THREE.Mesh(frontWallGeometry1, frontWallMaterial1);
      let frontWall1_Position1 = frontWall1_Position;
      
      // Set position and rotation
      frontWall1.position.set(frontWall1_Position1, 0, -5);
      
      // IMPORTANT: Adjust rotation to face the camera
      frontWall1.rotation.y = 0; // Or Math.PI / 2, depending on your scene setup
      
      // Compute bounding box (optional, if needed)
      frontWall1.geometry.computeBoundingBox();
      
      // Add the front wall to the group and walls array
      FontWallGroup.add(frontWall1);
      walls.push(frontWall1);
      
}

// front wall part--2

frontwall__menubar__two.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event propagation
    // Show the cabin walls item
    let cabin__walls__main__item = document.querySelector(".cabin__walls__main__item");
    cabin__walls__main__item.style.display = "inline-block";
    
    // Clear all existing listeners
    clearEventListeners(cabin__walls__main__item__img, leftwallimgwork);
    clearEventListeners(cabinwall__left1, leftwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, rightwall1imgwork);
    clearEventListeners(cabinwall__left1, rightwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, leftwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall3imgwork);
    clearEventListeners(cabinwall__left1, rightwall3imgwork);
    // Add the current listener
    addEventListeners(cabin__walls__main__item__img, frontwall2imgwork);
});

function frontwall2imgwork(item) {

    let  frontwall2img = item.target.getAttribute("src"); 
   
      // Initialize TextureLoader
      const textureLoader = new THREE.TextureLoader();

      // Set initial image for the texture
      let  frontwall2imgmap =  frontwall2img;  // Default texture
      let texture = textureLoader.load(frontwall2imgmap);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1); // Tiling
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearMipMapLinearFilter;
      let frontWall2_Width = leftwallwidth1Num;

      // Replace BoxGeometry with PlaneGeometry
      const frontWallGeometry2 = new THREE.PlaneGeometry(frontWall2_Width, roomHeight);
      
      // Create a single material for the plane
      const frontWallMaterial2 = new THREE.MeshBasicMaterial({
          map: texture, // Color for the front face
          side: THREE.FrontSide, // Render only the front side
      });
      
      // Create the front wall mesh
      const frontWall2 = new THREE.Mesh(frontWallGeometry2, frontWallMaterial2);
      
      // Set position and rotation
      let frontWall2_Position2 = frontWall2_Position; // Custom position variable
      frontWall2.position.set(frontWall2_Position2, 0, -5);
      frontWall2.rotation.y = 0; // Adjust rotation to ensure the front side is visible
      
      // Add the front wall to the group and walls array
      FontWallGroup.add(frontWall2);
      walls.push(frontWall2);
}

frontwall__menubar__three.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event propagation
    // Show the cabin walls item
    let cabin__walls__main__item = document.querySelector(".cabin__walls__main__item");
    cabin__walls__main__item.style.display = "inline-block";
    
    // Clear all existing listeners
    clearEventListeners(cabin__walls__main__item__img, leftwallimgwork);
    clearEventListeners(cabinwall__left1, leftwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, rightwall1imgwork);
    clearEventListeners(cabinwall__left1, rightwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall1imgwork);
    clearEventListeners(cabin__walls__main__item__img, frontwall2imgwork);
    clearEventListeners(cabin__walls__main__item__img, leftwall2imgwork);
    clearEventListeners(cabinwall__left1, rightwall3imgwork);
    // Add the current listener
    addEventListeners(cabin__walls__main__item__img, frontwall3imgwork);
});

function frontwall3imgwork(item) {

    let  frontwall2img = item.target.getAttribute("src"); 
   
      // Initialize TextureLoader
      const textureLoader = new THREE.TextureLoader();

      // Set initial image for the texture
      let  frontwall2imgmap =  frontwall2img;  // Default texture
      let texture = textureLoader.load(frontwall2imgmap);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1); // Tiling
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearMipMapLinearFilter;
      let frontWall3_Width = leftWall2_Width; // Keep the same width as the left wall
      const frontWallGeometry3 = new THREE.PlaneGeometry(frontWall3_Width, roomHeight);
      
      // Create a single material for the plane
      const frontWallMaterials3 = new THREE.MeshBasicMaterial({
          map:texture, // Color for the front face
          side: THREE.FrontSide, // Render only the front side
      });
      
      const frontWall3 = new THREE.Mesh(frontWallGeometry3, frontWallMaterials3);
      let frontWall3_Position3 = frontWall3_Position; // Use your existing position value
      frontWall3.position.set(frontWall3_Position3, 0, -5); // Set position as specified
      
      frontWall3.geometry.computeBoundingBox(); // Optional: Compute bounding box
      
      FontWallGroup.add(frontWall3); // Add to the group
      walls.push(frontWall3); // Add to the walls array
}


frontwall__menubar__four.addEventListener("click",function(e){
    let frontwall__menu = document.querySelector(".cabin__walls_elements .frontwall__menu")
    frontwall__menu.style.display = "none";
})


// menu background none start
let frontwall__menu = document.querySelector(".frontwall__menu")
frontwall__menu.style.display = "block";
main_menu_wall_part.style.display = "block";
// Initialize click state variables
let leftClicked = false;
let rightClicked = false;
let frontClicked = false;

// Select the elements


// Function to update background visibility
function updateBackgroundVisibility() {
    // Show the background if any button is clicked
    if (leftClicked || rightClicked || frontClicked) {
        main_menu_wall_part.style.display = "block";
    } else {
        // Hide the background when no button is clicked
        // main_menu_wall_part.style.display = "none";
    }
}

// Function to handle left button click
function handleLeftClick() {
    leftClicked = true; // Mark left button as clicked
    updateBackgroundVisibility(); // Update visibility of the main menu wall
    checkIfAllClicked(); // Check if all buttons are clicked
}

// Function to handle right button click
function handleRightClick() {
    rightClicked = true; // Mark right button as clicked
    updateBackgroundVisibility(); // Update visibility of the main menu wall
    checkIfAllClicked(); // Check if all buttons are clicked
}

// Function to handle front button click
function handleFrontClick() {
    frontClicked = true; // Mark front button as clicked
    updateBackgroundVisibility(); // Update visibility of the main menu wall
    checkIfAllClicked(); // Check if all buttons are clicked
}

// Function to check if all buttons are clicked and hide the background
function checkIfAllClicked() {
    if (leftClicked && rightClicked && frontClicked) {
        // Hide the background when all buttons are clicked
        main_menu_wall_part.style.display = "none";
    }
}

// Add event listeners
leftwall__menu__four.addEventListener("click", handleLeftClick);
rightwall__menubar__four.addEventListener("click", handleRightClick);
frontwall__menubar__four.addEventListener("click", handleFrontClick);

// Initially hide the background

// hide front wall 
    frontWall_width = 0; // Update the width
    frontWall_height = 0;
// Remove old geometry and assign a new one
    frontWall.geometry.dispose(); // Dispose of old geometry to free memory
    frontWall.geometry = new THREE.BoxGeometry(frontWall_width, roomHeight, frontWall_height);


// COP elements
let cabin__Cop = document.querySelector(".cabin__COP_elements__js__work .left_cop");
let right_cop = document.querySelector(".cabin__COP_elements__js__work .right_cop");
let left_Cop_Door = document.querySelector(".cabin__COP_elements__js__work .left_door");
let right_Cop_Door = document.querySelector(".cabin__COP_elements__js__work .right_door");
let cabin__Cop_Img = document.querySelector(".cabin__COP_elements__js__work img");
// State variables
// State variables 
let activeCOP = null; // To track the currently active COP




// Variables to hold active meshes
let activeWall = null;
console.log(activeWall)
// Function to remove the currently active COP
function removeActiveCOP() {
    if (activeWall) {
        // Remove from the scene and clear the reference
        activeWall.parent.remove(activeWall);
        const index = walls.indexOf(activeWall);
        if (index !== -1) walls.splice(index, 1); // Remove from walls array
        activeWall = null;
    }
}

// Add event listeners for each COP
cabin__Cop.addEventListener("click", function () {
    removeActiveCOP(); // Remove any existing COP
    activeCOP = 'leftCOP'; // Set the current COP
    left_side.style.display = "none";
    right__side.style.display = "block";
    room.remove(leftcylinderGroup1);
});

right_cop.addEventListener("click", function () {
    removeActiveCOP(); // Remove any existing COP
    activeCOP = 'rightCOP'; // Set the current COP
    right__side.style.display = "none";
    left_side.style.display = "block";
    room.remove(rightcylinderGroup2);
   
    // left_side.style.display = "block";
});

left_Cop_Door.addEventListener("click", function () {
    removeActiveCOP(); // Remove any existing COP
    activeCOP = 'leftDoorCOP'; // Set the current COP
    console.log("Left Door COP selected");
});

right_Cop_Door.addEventListener("click", function () {
    removeActiveCOP(); // Remove any existing COP
    activeCOP = 'rightDoorCOP'; // Set the current COP
    console.log("Right Door COP selected");
});
// left_side.style.display = "none";
// right__side.style.display = "block";
// Event to handle image click for texture and toggle COP
cabin__Cop_Img.addEventListener("click", function (item) {
    let imageSrc = item.target.getAttribute("src");
    const textureLoader = new THREE.TextureLoader();
    let texture = textureLoader.load(imageSrc);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    removeActiveCOP(); // Remove any existing COP

    if (activeCOP === 'leftCOP') {
// Create a PlaneGeometry for the left wall
let leftWallGeometry = new THREE.PlaneGeometry(wall_cop_width, roomHeight);

// Create a material for the plane, mapping the texture and ensuring it renders only the front side
let leftWallMaterial = new THREE.MeshBasicMaterial({
  map: texture, // Apply the texture to the plane
  side: THREE.FrontSide, // Render only the front side
});

// Create the mesh for the left wall
activeWall = new THREE.Mesh(leftWallGeometry, leftWallMaterial);

// Rotate the plane to position it correctly (to face the left side)
activeWall.rotation.y = Math.PI / 2;

// Position the plane on the left wall
activeWall.position.set(-roomWidth / 2.08, 0, wall_cop_position);

// Add the wall to the group
leftWallGroup.add(activeWall);

// Push the wall into the walls array for further use
walls.push(activeWall);
walls.push(leftWall); 
        console.log("Left COP added");
    } else if (activeCOP === 'rightCOP') {
        // let rightWallGeometry = new THREE.BoxGeometry(wall_cop_width, roomHeight, 0.2);
        // let rightWallMaterials = new Array(6).fill(new THREE.MeshBasicMaterial({ map: texture }));
        // activeWall = new THREE.Mesh(rightWallGeometry, rightWallMaterials);
        // activeWall.rotation.y = Math.PI / 2;
        // activeWall.position.set(roomWidth / 2.08, 0, right_wall3_cop_position);
        // room.add(activeWall); // Add to room
        // walls.push(activeWall); // Push to walls array



    
        // Create a PlaneGeometry for the right wall
let rightWallGeometry = new THREE.PlaneGeometry(wall_cop_width, roomHeight);

// Create a material for the plane, mapping the texture and ensuring it renders only the front side
let rightWallMaterial = new THREE.MeshBasicMaterial({
  map: texture, // Apply the texture to the plane
  side: THREE.FrontSide, // Render only the front side
});

// Create the mesh for the right wall
activeWall = new THREE.Mesh(rightWallGeometry, rightWallMaterial);

// Rotate the plane to position it correctly (to face the right side)
activeWall.rotation.y = -Math.PI / 2;

// Position the plane on the right wall
activeWall.position.set(roomWidth / 2.08, 0, right_wall3_cop_position);

// Add the wall to the room
room.add(activeWall);

// Push the wall into the walls array for further use
walls.push(activeWall);

    } else if (activeCOP === 'leftDoorCOP') {
    // Create a PlaneGeometry for the door wall
let doorWallGeometry = new THREE.PlaneGeometry(1.7, 17);

// Create a material for the plane, mapping the texture and ensuring it renders only the front side
let doorWallMaterial = new THREE.MeshBasicMaterial({
  map: texture, // Apply the texture to the plane
  side: THREE.FrontSide, // Render only the front side
});

// Create the mesh for the door wall
activeWall = new THREE.Mesh(doorWallGeometry, doorWallMaterial);

// Position the plane for the door wall
activeWall.position.set(3.95, -1, 4.8);

// Rotate the plane so it aligns with the intended orientation
activeWall.rotation.y = Math.PI / 1;

// Add the wall to the room
room.add(activeWall);

// Push the wall into the walls array for further use
walls.push(activeWall);

        console.log("Left Door COP added");
    } else if (activeCOP === 'rightDoorCOP') {
    // Create a PlaneGeometry for the door wall
let doorWallGeometry = new THREE.PlaneGeometry(1.8, 17);

// Create a material for the plane, mapping the texture and ensuring it renders only the front side
let doorWallMaterial = new THREE.MeshBasicMaterial({
  map: texture, // Apply the texture to the plane
  side: THREE.FrontSide, // Render only the front side
});

// Create the mesh for the door wall
activeWall = new THREE.Mesh(doorWallGeometry, doorWallMaterial);

// Position the plane for the door wall
activeWall.position.set(-4, -1, 4.8);

// Rotate the plane so it aligns with the intended orientation
activeWall.rotation.y = Math.PI / 1;

// Add the wall to the room
room.add(activeWall);

// Push the wall into the walls array for further use
walls.push(activeWall);
        console.log("Right Door COP added");
    }
});



// Door Cop 
 }

 double__part__wall.addEventListener("click",(event)=>{
    event.stopPropagation();
    // doublePartPwallHandealer(6.2,-2,3.5,2.9)
    const data = { a: 4.9, b: -2.5, c: 4.9, d: 2.5,
        frontWall1_Position: 2.5, 
        frontWall2_Position: -2.5,
        leftWall2_Width: 0,
        leftWall2_Position: 0,
        leftWall2_roomHeight: 0,
        leftWall2_Display: "none",
        wall_Thickness: 0.4,
        wall_2_Thickness: 0.2,
        wall_cop_width: 4.7,
        wall_cop_position: 2.5,
        right_wall3_cop_position: 2.5
     };
    localStorage.setItem("savedData", JSON.stringify(data));

    location.reload(); // Refresh the page
 })



double_part_unequal_wall.addEventListener("click", (event) => {
    event.stopPropagation();
    // doublePartPwallHandealer(6.2,-2,3.5,2.9)
    const data = { 
         a: 6.1,
         b: -2.02,
         c: 3.75,
         d: 3.02,
         frontWall1_Position: 1.98, 
         frontWall2_Position: -3.08,
         leftWall2_Width: 0,
         leftWall2_Position: 0, 
         leftWall2_roomHeight: 0,
         leftWall2_Display: "none",
         wall_Thickness: 0.4,
         wall_2_Thickness: 0.2,
         wall_cop_width: 3.5,
         wall_cop_position: 2.96,
         right_wall3_cop_position: 2.9
        
    };
    localStorage.setItem("savedData", JSON.stringify(data));

    location.reload(); // Refresh the page
});

let Three__part__wall = document.querySelector(".Three__part__wall");

Three__part__wall.addEventListener("click", (event) => {

    event.stopPropagation();
    // doublePartPwallHandealer(6.2,-2,3.5,2.9)
    const data = { 
        a: 2.3, b: -3.95, 
        c: 5.25,
        d: -0.08,
        frontWall1_Position: -3.87, 
        frontWall2_Position: 0,
        leftWall2_Width: 2.3, 
        leftWall2_Position: 3.78,
        leftWall2_roomHeight: 0.2,
        leftWall2_Display: "block",
        frontWall3_Position: 3.87,
        wall_Thickness: 0.4,
        wall_2_Thickness: 0.4,
        wall_cop_width: 1.8,
        wall_cop_position: 3.7,
        right_wall3_cop_position: 3.7
    };
    localStorage.setItem("savedData", JSON.stringify(data));

    location.reload(); // Refresh the page
});

// Reload button work
let reset_Design = document.querySelector(".reset_Design")
reset_Design.addEventListener("click", (event) => {
    event.stopPropagation();
    // doublePartPwallHandealer(6.2,-2,3.5,2.9)
    // localStorage.setItem("savedData", JSON.stringify(data));

    location.reload(); // Refresh the page
});

// Restore data after the page reloads
window.addEventListener("load", () => {
    const savedData = JSON.parse(localStorage.getItem("savedData"));
    if (savedData) {
        console.log("Restored Data:", savedData);
        doublePartPwallHandealer(
            savedData.a,
            savedData.b,
            savedData.c,
            savedData.d,
            savedData.frontWall1_Position,
            savedData.frontWall2_Position,
            savedData.leftWall2_Width,
            savedData.leftWall2_Position,
            savedData.leftWall2_roomHeight,
            savedData.leftWall2_Display,
            savedData.frontWall3_Position,
            savedData.wall_Thickness,
            savedData.wall_2_Thickness,
            savedData.wall_cop_width,
            savedData.wall_cop_position,
            savedData.right_wall3_cop_position
        );
        // Optionally clear data after restoring
        // localStorage.removeItem("savedData");
    }
});





 // Right Wal-1  

//  const rightWallGeometry1 = new THREE.BoxGeometry(3.3, roomHeight, 0.2);
//  const rightWallMaterials1 = [
//    new THREE.MeshBasicMaterial({ color: 0xA09D9A}), // Front (Orange)
//    new THREE.MeshBasicMaterial({ color: 0xA09D9A}), // Back (Green)
//    new THREE.MeshBasicMaterial({ color: 0xA09D9A }), // Left (Blue)
//    new THREE.MeshBasicMaterial({ color: 0xA09D9A}), // Right (Yellow)
//    new THREE.MeshBasicMaterial({ color: 0xA09D9A }), // Top (Black)
//    new THREE.MeshBasicMaterial({ color: 0x4D4D4F })  // Bottom (White)
// ];

// const rightWall1 = new THREE.Mesh(rightWallGeometry1, rightWallMaterials1);
// rightWall1.rotation.y = Math.PI / 2;
// rightWall1.position.set(roomWidth / 2, 0, -3.2);
// room.add(rightWall1);
// walls.push(rightWall1);



//   // Right Wal-2        
//   const rightWallGeometry2 = new THREE.BoxGeometry(3.3, roomHeight, 0.2);
//   const rightWallMaterials2 = [
//     new THREE.MeshBasicMaterial({ color: 0xA09D9A }), // Front (Orange)
//     new THREE.MeshBasicMaterial({ color: 0xA09D9A}), // Back (Green)
//     new THREE.MeshBasicMaterial({ color: 0xA09D9A }), // Left (Blue)
//     new THREE.MeshBasicMaterial({ color: 0xA09D9A }), // Right (Yellow)
//     new THREE.MeshBasicMaterial({ color: 0x4D4D4F }), // Top (Black)
//     new THREE.MeshBasicMaterial({ color: 0x4D4D4F })  // Bottom (White)
// ];

// const rightWall2 = new THREE.Mesh(rightWallGeometry2, rightWallMaterials2);
// rightWall2.rotation.y = Math.PI / 2;
// rightWall2.position.set(roomWidth / 2, 0, 0.3);
// room.add(rightWall2);
// walls.push(rightWall2);

//   // Right Wal-3        
//   const rightWallGeometry3 = new THREE.BoxGeometry(2.8, roomHeight, 0.2);
//   const rightWallMaterials3 = [
//     new THREE.MeshBasicMaterial({ color: 0xA09D9A }), // Front (Orange)
//     new THREE.MeshBasicMaterial({ color: 0xA09D9A }), // Back (Green)
//     new THREE.MeshBasicMaterial({ color: 0xA09D9A}), // Left (Blue)
//     new THREE.MeshBasicMaterial({ color: 0xA09D9A }), // Right (Yellow)
//     new THREE.MeshBasicMaterial({ color: 0xA09D9A}), // Top (Black)
//     new THREE.MeshBasicMaterial({ color: 0x4D4D4F})  // Bottom (White)
// ];

// const rightWall3 = new THREE.Mesh(rightWallGeometry3, rightWallMaterials3);
// rightWall3.rotation.y = Math.PI / 2;
// rightWall3.position.set(roomWidth / 2, 0, 3.5);
// room.add(rightWall3);
// walls.push(rightWall3);

// Ceiling

// Set initial image for the texture
let cellingTexture = textureLoader.load("./images/10.png");
cellingTexture.wrapS = THREE.RepeatWrapping;
cellingTexture.wrapT = THREE.RepeatWrapping;
cellingTexture.repeat.set(1, 1); // Tiling
cellingTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
cellingTexture.magFilter = THREE.LinearFilter;
cellingTexture.minFilter = THREE.LinearMipMapLinearFilter;
const ceilingGeometry = new THREE.BoxGeometry(roomWidth, 0.5, roomDepth);  // Reduced thickness
const ceilingMaterials = [
    new THREE.MeshBasicMaterial({ color: 0x787B7C }), // Top (Dark Gray)
    new THREE.MeshBasicMaterial({ color: 0x787B7C }), // Bottom (Black)
    new THREE.MeshBasicMaterial({ color: 0x2E3030 }), // Left (Dark Gray)
    new THREE.MeshBasicMaterial({ map:cellingTexture 
         }), // Right (Dark Gray)
    new THREE.MeshBasicMaterial({ color: 0x787B7C}), // Front (Dark Gray)
    new THREE.MeshBasicMaterial({ color: 0x787B7C })  // Back (Dark Gray)
];
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterials);
ceiling.position.set(0, roomHeight / 2, 0);  // Position it above the walls (half the room height)
room.add(ceiling);

// celling images part start
const ceilingImages = document.querySelectorAll('.cabin__celling_elements__js__work .main__item .item img');

ceilingImages.forEach((img) => {
    img.addEventListener("click", function(item) {
      let  imgValue = item.target.getAttribute("src"); 
        // Initialize TextureLoader
        const textureLoader = new THREE.TextureLoader();
        // Set initial image for the texture
        let imgdemo = imgValue;  // Default texture
        let cellingTexture = textureLoader.load(imgdemo);
        cellingTexture.wrapS = THREE.RepeatWrapping;
        cellingTexture.wrapT = THREE.RepeatWrapping;
        cellingTexture.repeat.set(1, 1); // Tiling
        cellingTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        cellingTexture.magFilter = THREE.LinearFilter;
        cellingTexture.minFilter = THREE.LinearMipMapLinearFilter;
        const ceilingGeometry = new THREE.BoxGeometry(roomWidth, 0.5, roomDepth);  // Reduced thickness
        const ceilingMaterials = [
            new THREE.MeshBasicMaterial({ color: 0x000000 }), // Top (Dark Gray)
            new THREE.MeshBasicMaterial({ color: 0x000000 }), // Bottom (Black)
            new THREE.MeshBasicMaterial({ color: 0x000000 }), // Left (Dark Gray)
            new THREE.MeshBasicMaterial({ map:cellingTexture 
                 }), // Right (Dark Gray)
            new THREE.MeshBasicMaterial({ color: 0x333333 }), // Front (Dark Gray)
            new THREE.MeshBasicMaterial({ color: 0x333333 })  // Back (Dark Gray)
        ];
        const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterials);
        ceiling.position.set(0, roomHeight / 2, 0);  // Position it above the walls (half the room height)
        room.add(ceiling);
    });
});
// celling images part end

// Floor
const floorGeometry = new THREE.BoxGeometry(roomWidth, 0.5, roomDepth);  // Reduced thickness
const floorMaterials = [
    new THREE.MeshBasicMaterial({ color: 0x787B7C }), // Top (Black)
    new THREE.MeshBasicMaterial({ color: 0x787B7C }), // Bottom (White)
    new THREE.MeshBasicMaterial({ color: 0x333333 }), // Left (Gray)
    new THREE.MeshBasicMaterial({ color: 0x787B7C }), // Right (Gray)
    new THREE.MeshBasicMaterial({ color: 0x787B7C }), // Front (Gray)
    new THREE.MeshBasicMaterial({ color: 0x787B7C })  // Back (Gray)
];
const floor = new THREE.Mesh(floorGeometry, floorMaterials);
floor.position.set(0, -roomHeight / 2, 0);  // Position it below the walls (half the room height)
room.add(floor);

// floor images part start
const floorImages = document.querySelectorAll('.cabin__floor_elements__js__work .main__item .item img');

floorImages.forEach((img) => {
    img.addEventListener("click", function(item) {
      let  imgValue = item.target.getAttribute("src"); 
        // Initialize TextureLoader
        const textureLoader = new THREE.TextureLoader();
        // Set initial image for the texture
        let imgdemo = imgValue;  // Default texture
        let texture = textureLoader.load(imgdemo);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1); // Tiling
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
const floorGeometry = new THREE.BoxGeometry(roomWidth, 0.5, roomDepth);  // Reduced thickness
const floorMaterials = [
    new THREE.MeshBasicMaterial({ map: texture}), // Top (Black)
    new THREE.MeshBasicMaterial({ map: texture}), // Bottom (White)
    new THREE.MeshBasicMaterial({ map: texture }), // Left (Gray)
    new THREE.MeshBasicMaterial({ map: texture}), // Right (Gray)
    new THREE.MeshBasicMaterial({ map: texture }), // Front (Gray)
    new THREE.MeshBasicMaterial({ map: texture })  // Back (Gray)
];
const floor = new THREE.Mesh(floorGeometry, floorMaterials);
floor.position.set(0, -roomHeight / 2, 0);  // Position it below the walls (half the room height)
room.add(floor);
    });
});
// floor images part end

    // Reflective Mirror
    // const mirrorGeometry = new THREE.PlaneGeometry(10, 20);
    // const mirror = new Reflector(mirrorGeometry, {
    //   clipBias: 0.003,
    //   textureWidth: window.innerWidth * window.devicePixelRatio,
    //   textureHeight: window.innerHeight * window.devicePixelRatio,
    //   color: 0xffffff
    // });
    // mirror.position.set(0, 0, -4.85); // Position the mirror
    // room.add(mirror);

  

    // const pointLight = new THREE.PointLight(0xffffff, 1);
    // pointLight.position.set(5, 5, 5);
    // room.add(pointLight);

// handrail--1 part start 
// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7.5); // Adjust light position
room.add(light);

const ambientLight = new THREE.AmbientLight(0x404040); // Soft light
room.add(ambientLight);

// // Create a Smooth Cylinder Geometry
let  handrailimg = "./images/handrail-img.jpg"; 
   
// // Initialize TextureLoader


// // Set initial image for the texture

let texture = textureLoader.load(handrailimg);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1, 1); // Tiling
texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
texture.magFilter = THREE.LinearFilter;
texture.minFilter = THREE.LinearMipMapLinearFilter;

const cylinderGroup = new THREE.Group();

const geometry1 = new THREE.CylinderGeometry(0.20, 0.20, 7, 200); // Increase radial segments to 200
const material1 = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 0.3, 
  metalness: 0.5, 
});
const cylinder1 = new THREE.Mesh(geometry1, material1);

// Set the initial rotation
cylinder1.rotation.x = 0; // Convert to radians for more accurate rotation
cylinder1.rotation.y = 0;
cylinder1.rotation.z = 1.57;
cylinder1.position.set(0,-2.6,-4.50)
cylinderGroup.add(cylinder1);
// walls.push(cylinder1)
// cylinder 2

const geometry2 = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 200); // Increase radial segments to 200
const material2 = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 0.3, 
  metalness: 0.5, 
});
const cylinder2 = new THREE.Mesh(geometry2, material2);

// Set the initial rotation
cylinder2.rotation.x = 1.62; // Convert to radians for more accurate rotation
cylinder2.rotation.y = 0;
cylinder2.rotation.z = 0;
cylinder2.position.set(2.6,-2.6,-4.8)
cylinderGroup.add(cylinder2);
// walls.push(cylinder2)
// cylinder 3
const geometry3 = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 200); // Increase radial segments to 200
const material3 = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 0.3, 
  metalness: 0.5, 
});
const cylinder3 = new THREE.Mesh(geometry3, material3);

// Set the initial rotation
cylinder3.rotation.x = 1.62; // Convert to radians for more accurate rotation
cylinder3.rotation.y = 0;
cylinder3.rotation.z = 0;
cylinder3.position.set(-2.6,-2.6,-4.8)
cylinderGroup.add(cylinder3);
// walls.push(cylinderGroup)
cylinderGroup.position.set(0,0,0)


// // handrail--1 part end


// handrail--1 frontent part double hundrail start 
// Lighting
const light4 = new THREE.DirectionalLight(0xffffff, 1);
light4.position.set(5, 10, 7.5); // Adjust light position
room.add(light4);

const ambientLight4 = new THREE.AmbientLight(0x404040); // Soft light
room.add(ambientLight4);

// Initialize TextureLoader


const cylinderGroup4 = new THREE.Group();

const geometry4 = new THREE.CylinderGeometry(0.20, 0.20, 7, 200); // Increase radial segments to 200
const material4 = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 0.3, 
  metalness: 0.5, 
});
const cylinder4 = new THREE.Mesh(geometry4, material4);

// Set the initial rotation
cylinder4.rotation.x = 0; // Convert to radians for more accurate rotation
cylinder4.rotation.y = 0;
cylinder4.rotation.z = 1.57;
cylinder4.position.set(0,-2.6,-4.50)
cylinderGroup4.add(cylinder4);
// walls.push(cylinder1)
// cylinder 2

const geometry5 = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 200); // Increase radial segments to 200
const material5 = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 0.3, 
  metalness: 0.5, 
});
const cylinder5 = new THREE.Mesh(geometry5, material5);

// Set the initial rotation
cylinder5.rotation.x = 1.62; // Convert to radians for more accurate rotation
cylinder5.rotation.y = 0;
cylinder5.rotation.z = 0;
cylinder5.position.set(2.6,-2.6,-4.8)
cylinderGroup4.add(cylinder5);
// walls.push(cylinder2)
// cylinder 3
const geometry6 = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 200); // Increase radial segments to 200
const material6 = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 0.3, 
  metalness: 0.5, 
});
const cylinder6 = new THREE.Mesh(geometry6, material6);

// Set the initial rotation
cylinder6.rotation.x = 1.62; // Convert to radians for more accurate rotation
cylinder6.rotation.y = 0;
cylinder6.rotation.z = 0;
cylinder6.position.set(-2.6,-2.6,-4.8)
cylinderGroup4.add(cylinder6);
// walls.push(cylinderGroup)
cylinderGroup4.position.set(0,0,0)
walls.push(cylinderGroup4);
// handrail--1 frontent-part double handrail end

// handrail--2 part start 
// Lighting
const leftlight2 = new THREE.DirectionalLight(0xffffff, 1);
leftlight2.position.set(5, 10, 7.5); // Adjust light position
room.add(leftlight2);

const leftambientLight2 = new THREE.AmbientLight(0x404040); // Soft light
room.add(leftambientLight2);

// Create a Smooth Cylinder Geometry
const leftcylinderGroup1 = new THREE.Group();

const leftgeometry1 = new THREE.CylinderGeometry(0.20, 0.20, 7, 200); // Increase radial segments to 200
const leftmaterial1 = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 0.3, 
  metalness: 0.5, 
});
const leftcylinder1 = new THREE.Mesh(leftgeometry1, leftmaterial1);

// Set the initial rotation
leftcylinder1.rotation.x = 0; // Convert to radians for more accurate rotation
leftcylinder1.rotation.y = 0;
leftcylinder1.rotation.z = 1.57;
leftcylinder1.position.set(0,-2.6,-4.24)
leftcylinderGroup1.add(leftcylinder1);
// walls.push(cylinder1)
// cylinder 2

const leftgeometry2 = new THREE.CylinderGeometry(0.1, 0.1, 0.7, 200); // Increase radial segments to 200
const leftmaterial2 = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 0.3, 
  metalness: 0.5, 
});
const leftcylinder2 = new THREE.Mesh(leftgeometry2, leftmaterial2);

// Set the initial rotation
leftcylinder2.rotation.x = 1.62; // Convert to radians for more accurate rotation
leftcylinder2.rotation.y = 0;
leftcylinder2.rotation.z = 0;
leftcylinder2.position.set(2.6,-2.6,-4.5)
leftcylinderGroup1.add(leftcylinder2);
// walls.push(cylinder2)
// cylinder 3
const leftgeometry3 = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 200); // Increase radial segments to 200
const leftmaterial3 = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 0.3, 
  metalness: 0.5, 
});
const leftcylinder3 = new THREE.Mesh(leftgeometry3, leftmaterial3);

// Set the initial rotation
leftcylinder3.rotation.x = 1.62; // Convert to radians for more accurate rotation
leftcylinder3.rotation.y = 0;
leftcylinder3.rotation.z = 0;
leftcylinder3.position.set(-2.6,-2.6,-4.62)
leftcylinderGroup1.add(leftcylinder3);
// walls.push(cylinderGroup)
leftcylinderGroup1.position.set(-0.19,0,0);
leftcylinderGroup1.rotation.set(0,1.6,0.01)

// Optional: Add groups to walls if needed
walls.push(cylinderGroup);
walls.push(leftcylinderGroup1);



// handrail--2 part end
// handrail--3 part start 
// Lighting
const rightlight2 = new THREE.DirectionalLight(0xffffff, 1);
rightlight2.position.set(5, 10, 7.5); // Adjust light position
room.add(rightlight2);

const rightambientLight2 = new THREE.AmbientLight(0x404040); // Soft light
room.add(rightambientLight2);

// Create a Smooth Cylinder Geometry
const rightcylinderGroup2 = new THREE.Group();

const rightgeometry1 = new THREE.CylinderGeometry(0.20, 0.20, 7, 200); // Increase radial segments to 200
const rightmaterial1 = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 0.3, 
  metalness: 0.5, 
});
const rightcylinder1 = new THREE.Mesh(rightgeometry1, rightmaterial1);

// Set the initial rotation
rightcylinder1.rotation.x = 0; // Convert to radians for more accurate rotation
rightcylinder1.rotation.y = 0;
rightcylinder1.rotation.z = 1.57;
rightcylinder1.position.set(0,-2.6,-4.55)
rightcylinderGroup2.add(rightcylinder1);
// walls.push(cylinder1)
// cylinder 2

const rightgeometry2 = new THREE.CylinderGeometry(0.1, 0.1, 0.7, 200); // Increase radial segments to 200
const rightmaterial2 = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 0.3, 
  metalness: 0.5, 
});
const rightcylinder2 = new THREE.Mesh(rightgeometry2, rightmaterial2);

// Set the initial rotation
rightcylinder2.rotation.x = 1.62; // Convert to radians for more accurate rotation
rightcylinder2.rotation.y = 0;
rightcylinder2.rotation.z = 0;
rightcylinder2.position.set(2.6,-2.6,-4.82)
rightcylinderGroup2.add(rightcylinder2);
// walls.push(cylinder2)
// cylinder 3
const rightgeometry3 = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 200); // Increase radial segments to 200
const rightmaterial3 = new THREE.MeshStandardMaterial({
  color: 0xEAEAEA,
  roughness: 0.3, 
  metalness: 0.5, 
});
const rightcylinder3 = new THREE.Mesh(rightgeometry3, rightmaterial3);

// Set the initial rotation
rightcylinder3.rotation.x = 1.62; // Convert to radians for more accurate rotation
rightcylinder3.rotation.y = 0;
rightcylinder3.rotation.z = 0;
rightcylinder3.position.set(-2.6,-2.6,-4.82)
rightcylinderGroup2.add(rightcylinder3);
// walls.push(cylinderGroup)
rightcylinderGroup2.position.set(-0.1,0,0);
rightcylinderGroup2.rotation.set(0,-1.6,0.01)

// Select elements
// Select elements
// let right_side = document.querySelector(".handrail_item .rare_side");
// let K3_handrail = document.querySelector(".cabin__Handrail_elements__js__work .K3_handrail");

// let left_side = document.querySelector(".handrail_item .left__side");
// let left_K3_handrail = document.querySelector(".cabin__Handrail_elements__js__work .left_K3_handrail");

// // State variables
// let rareSideActive = false; // Tracks if rare side is active
// let leftSideActive = false; // Tracks if left side is active
// let isCylinderAdded = false; // Tracks rare cylinder state
// let isLeftCylinderAdded = false; // Tracks left cylinder state

// // Rare side click logic
// rare_side.addEventListener("click", function (event) {
//     event.stopPropagation();
//     rareSideActive = true; // Activate rare side
//     leftSideActive = false; // Deactivate left side to prevent conflict
// });

// // K3 handrail click logic for rare side
// K3_handrail.addEventListener("click", function (event) {
//     event.stopPropagation();
//     if (rareSideActive) {
//         if (isCylinderAdded) {
//             room.remove(cylinderGroup); // Remove rare cylinder group
//             console.log("Rare cylinder group removed");
//         } else {
//             room.add(cylinderGroup); // Add rare cylinder group
//             console.log("Rare cylinder group added");
//         }
//         isCylinderAdded = !isCylinderAdded; // Toggle rare cylinder state
//     } else {
//         console.log("Rare side not activated, click ignored");
//     }
// });

// // Left side click logic
// left_side.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("Left side activated");
//     leftSideActive = true; // Activate left side
//     rareSideActive = false; // Deactivate rare side to prevent conflict
// });

// // K3 handrail click logic for left side
// left_K3_handrail.addEventListener("click", function (event) {
//     event.stopPropagation();
//     if (leftSideActive) {
//         if (isLeftCylinderAdded) {
//             room.remove(leftcylinderGroup1); // Remove left cylinder group
//             console.log("Left cylinder group removed");
//         } else {
//             room.add(leftcylinderGroup1); // Add left cylinder group
//             console.log("Left cylinder group added");
//         }
//         isLeftCylinderAdded = !isLeftCylinderAdded; // Toggle left cylinder state
//     } else {
//         console.log("Left side not activated, click ignored");
//     }
// });

// // Optional: Add groups to walls if needed
walls.push(rightcylinderGroup2);


// Select elements
// Select elements
let rare_side = document.querySelector(".handrail_item .rare_side");
let K3_handrail = document.querySelector(".cabin__Handrail_elements__js__work .K3_handrail");

let left_side = document.querySelector(".handrail_item .left__side");
let left_K3_handrail = document.querySelector(".cabin__Handrail_elements__js__work .left_K3_handrail");

let right__side = document.querySelector(".handrail_item .right__side");
let right_K3_handrail = document.querySelector(".cabin__Handrail_elements__js__work .right_K3_handrail");

// State variables
let rareSideActive = false; // Tracks if rare side is active
let leftSideActive = false; // Tracks if left side is active
let rightSideActive = false; // Tracks if right side is active
let isCylinderAdded = false; // Tracks rare cylinder state
let isLeftCylinderAdded = false; // Tracks left cylinder state
let isRightCylinderAdded = false; // Tracks right cylinder state

// Rare side click logic
rare_side.addEventListener("click", function (event) {
    event.stopPropagation();
    rareSideActive = true; // Activate rare side
    leftSideActive = false; // Deactivate left side
    rightSideActive = false; // Deactivate right side
});

// K3 handrail click logic for rare side
K3_handrail.addEventListener("click", function (event) {
    event.stopPropagation();
    if (rareSideActive) {
        if (isCylinderAdded) {
            room.remove(cylinderGroup); // Remove rare cylinder group
            room.remove(cylinderGroup4);
            console.log("Rare cylinder group removed");
        } else {
            room.add(cylinderGroup); // Add rare cylinder group
            console.log("Rare cylinder group added");
            room.add(cylinderGroup4); 
        }
        isCylinderAdded = !isCylinderAdded; // Toggle rare cylinder state
    } else {
        console.log("Rare side not activated, click ignored");
    }
});

// Left side click logic
left_side.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Left side activated");
    leftSideActive = true; // Activate left side
    rareSideActive = false; // Deactivate rare side
    rightSideActive = false; // Deactivate right side
});

// K3 handrail click logic for left side
left_K3_handrail.addEventListener("click", function (event) {
    event.stopPropagation();
    if (leftSideActive) {
        if (isLeftCylinderAdded) {
            room.remove(leftcylinderGroup1); // Remove left cylinder group
            console.log("Left cylinder group removed");
        } else {
            room.add(leftcylinderGroup1); // Add left cylinder group
            console.log("Left cylinder group added");
        }
        isLeftCylinderAdded = !isLeftCylinderAdded; // Toggle left cylinder state
    } else {
        console.log("Left side not activated, click ignored");
    }
});

// Right side click logic
right__side.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Right side activated");
    rightSideActive = true; 
    rareSideActive = false; // Deactivate rare side
    leftSideActive = false; // Deactivate left side
});

// K3 handrail click logic for right side
right_K3_handrail.addEventListener("click", function (event) {
    event.stopPropagation();
    if (rightSideActive) {
        if (isRightCylinderAdded) {
            room.remove(rightcylinderGroup2); // Remove right cylinder group
            console.log("Right cylinder group removed");
        } else {
            room.add(rightcylinderGroup2); // Add right cylinder group
            console.log("Right cylinder group added");
        }
        isRightCylinderAdded = !isRightCylinderAdded; // Toggle right cylinder state
    } else {
        console.log("Right side not activated, click ignored");
    }
});


// handrail--2 part end



// const DoorCopWallMaterials1 = [
//     new THREE.MeshBasicMaterial({ color: 0x000000 }), // Front (Red)
//     new THREE.MeshBasicMaterial({ color: 0x000000 }), // Back (Green)
//     new THREE.MeshBasicMaterial({ color: 0x000000 }), // Left (Blue)
//     new THREE.MeshBasicMaterial({ color: 0x000000 }), // Right (Yellow)
//     new THREE.MeshBasicMaterial({ color: 0x000000 }), // Top (Black)
//     new THREE.MeshBasicMaterial({ color: 0x000000 })  // Bottom (White)
// ];
// const DoorCopWall1 = new THREE.Mesh(DoorCopWallGeometry1, DoorCopWallMaterials1);
// DoorCopWall1.position.set(4, 0,  4.5);
// DoorCopWall1.rotation.y = Math.PI / 1;
// room.add(DoorCopWall1);
// walls.push(DoorCopWall1);

// COP part end

    // Add room to scene
    scene.add(room);

    // Set initial camera position
    camera.position.z = 25;
    // camera.position.x = 25;
    // camera.position.x = 10
    // // camera.position.set = (0,0,25)
//    if(mirror){
//     camera.position.set = (0,0,-4.85);
//    }

    // Raycaster for detecting focused wall
    raycaster = new THREE.Raycaster();

    // Event listeners
    // leftWallGroup.visible = false; 


    animate(doorGroup);

}

// function checkRotation(doorGroup,distance) {
//     console.log(doorGroup)
//     // Check if rotation around the Y axis exceeds 90 degrees (PI/2 radians)
//     if (distance > 17 && distance < 23) {
//         doorGroup.visible = true;  // Hide the door group
//     } else {
//         doorGroup.visible = false;  // Keep the door group visible if not rotated 90 degrees
//     }
// }





// Define the visibility range for wall[6] (the handrail)
// Define the visibility range for wall[6] (your specific handrail)
function animate(doorGroup) {
    requestAnimationFrame(() => animate(doorGroup));

    // Make sure walls[6] is not null or undefined
    if (!walls[6]) {
        console.error('wall[6] is not defined');
        return;
    }

let cameraRotation = camera.rotation;

console.log("camera rotation", cameraRotation.x);


    // Get the camera's position
    const cameraPos = camera.position;
  

    // Define the specific region (bounding box)
    const minX = -26, maxX = -4; // X-axis range
   
    const minY = 5, maxY = 15;  // Y-axis range
    const minZ = 30, maxZ = 40; // Z-axis range

    // Log camera position to ensure it's correct
    // console.log('Camera Position:', cameraPos);

    // Check if the camera is inside the specific area
    if (cameraPos.x >= minX && cameraPos.x <= maxX 
        // &&
        // cameraPos.y >= minY && cameraPos.y <= maxY &&
        // cameraPos.z >= minZ && cameraPos.z <= maxZ
    ) {
        // If the camera is within the specified region, hide wall[6]
        if (walls[7].visible) {
            walls[7].visible = false;
        }
    } else {
        // If the camera is outside the specified region, show wall[6]
        if (!walls[7].visible) {
            walls[7].visible = true;
        }
    }

// right wall handrail

    const minX2 = 4, maxX2 = 26;

    if (cameraPos.x >= minX2 && cameraPos.x <= maxX2 
        // &&
        // cameraPos.y >= minY && cameraPos.y <= maxY &&
        // cameraPos.z >= minZ && cameraPos.z <= maxZ
    ) {
        // If the camera is within the specified region, hide wall[6]
        if (walls[8].visible) {
            walls[8].visible = false;
        }
    } else {
        // If the camera is outside the specified region, show wall[6]
        if (!walls[8].visible) {
            walls[8].visible = true;
        }
    }

    // front wall handrail
    if (!walls[5] || !walls[6]) {
        // console.error('walls[5] or walls[6] is not defined');
        return;
    }

    // Initialize the previous position for the first execution
    if (animate.prevX === undefined) animate.prevX = camera.position.x;

    // Get current camera position
    const currentX = camera.position.x;

    // Determine the movement direction
    const isClockwise = currentX < animate.prevX; // Clockwise if X is decreasing
    console.log("Current Camera Position (X):", currentX);
    console.log("Is Clockwise:", isClockwise);

    // Wall-6 Logic
    const wall6VisibleMin = -23; // Visible range start
    const wall6VisibleMax = 1;   // Visible range end
    const wall6HiddenMin = 2;    // Hidden range start
    const wall6HiddenMax = 24;   // Hidden range end

    if (isClockwise) {
        if (currentX >= wall6VisibleMin && currentX <= wall6VisibleMax) {
            // Wall-6 visible range
            if (!walls[6].visible) {
                walls[6].visible = true;
                console.log("Wall[6] is now VISIBLE");
            }
        } else if (currentX >= wall6HiddenMin && currentX <= wall6HiddenMax) {
            // Wall-6 hidden range
            if (walls[6].visible) {
                walls[6].visible = false;
                console.log("Wall[6] is now HIDDEN");
            }
        }
    }

    // Wall-5 Logic
    const wall5VisibleMin = -1; // Visible range start
    const wall5VisibleMax = 24; // Visible range end
    const wall5HiddenMin = -23; // Hidden range start
    const wall5HiddenMax = -2;  // Hidden range end

    if (isClockwise) {
        if (currentX >= wall5VisibleMin && currentX <= wall5VisibleMax) {
            // Wall-5 visible range
            if (!walls[5].visible) {
                walls[5].visible = true;
                console.log("Wall[5] is now VISIBLE");
            }
        } else if (currentX >= wall5HiddenMin && currentX <= wall5HiddenMax) {
            // Wall-5 hidden range
            if (walls[5].visible) {
                walls[5].visible = false;
                console.log("Wall[5] is now HIDDEN");
            }
        }
    }

    // Update the previous position
    animate.prevX = currentX;
  

    // Update controls and render the scene
    controls.update();
    renderer.render(scene, camera);
}



// Initialize the scene
init();
let canvas = document.querySelector("canvas")
let canvas__container = document.querySelector(".canvas__container");
canvas__container.appendChild(canvas)

document.getElementById('download-btn').addEventListener('click', () => {
    // Store the original canvas size
    const originalSize = {
      width: renderer.domElement.width,
      height: renderer.domElement.height,
    };
  
    // Set the desired resolution for the download (same as display resolution)
    const displayWidth = renderer.domElement.clientWidth; // The actual CSS width
    const displayHeight = renderer.domElement.clientHeight; // The actual CSS height
    const pixelRatio = window.devicePixelRatio; // Account for high-DPI screens
  
    // Set the renderer to the exact resolution
    renderer.setSize(displayWidth * pixelRatio, displayHeight * pixelRatio, false);
    renderer.setPixelRatio(pixelRatio);
  
    // Render the scene at the desired resolution
    renderer.render(scene, camera);
  
    // Capture the current canvas content as a PNG image
    const imageUrl = renderer.domElement.toDataURL('image/png');
  
    // Create a temporary download link
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'RARLift-Cabin.png'; // The filename for the downloaded image
    link.click();
  
    // Restore the original canvas size
    renderer.setSize(originalSize.width, originalSize.height, false);
    renderer.setPixelRatio(pixelRatio);
    renderer.render(scene, camera); // Re-render to restore the display
  });
  

// Cabin Part end
