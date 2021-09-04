/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Here we define the Global Variables 

const allsection = document.querySelectorAll('section');      // Here I will select all the sections elements.
const navigationlist= document.getElementById('navbar__list'); //We will store our unordered list inside it.
const virtualcon= document.createDocumentFragment();         // this is a virtual empty container that contain the created Nav bar items
document.addEventListener('DOMContentLoaded', topmenu, false); // Here we will run an event when the page loaded
     
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Build the navigation by using for of loop function
for ( let section of allsection) {                                                                  // We will start looping for each section loop get each item from NAV bar and connect it with its related section
    createList= document.createElement('li');   // Creat list item.
    sectionName= section.getAttribute('data-nav'); // Get section names attributs from data-nav
    sectionLink= section.getAttribute('id'); // Get section links from section ID
    createList.innerHTML= `<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`; // Here we will write the inner.text for the item list that show its anchor link and its name.
    virtualcon.appendChild(createList); // store created list items
};

//create nav bar
navigationlist.appendChild(virtualcon); // Add created navigationlist to virtualcon. 

/**virtualCon
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// Add class 'active' to section when near top of viewport

  /** Here we are using arrow function and getgetBoundingClientRect methid 
      that return the size of an element and its position relative to the viewport.
      on top position.
  */
const elemPosition = (section) => {  
    return Math.floor(section.getBoundingClientRect().top);
};

// Removing Active Class Function

  /* Here we are using arrow function in order to remove Active Class 
      
  */ 
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)"; // Here the Not active section will get its default color
    

};
// Adding Active Class Condition Function

  /* Here we are using arrow function and if condition so, if the condition is true then we will
       going to add active class to the specified section.
  */ 
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: black;"; // Here I make the active section to appear with black color
       
        

    };
};

 /* Here we are using arrow function for looping through all the sections we have.
    we are going to test 
  */ 
const sectionActivation = () => {
    allsection.forEach(section => { // Here I used forEach loop function for looping through all the sections
        const elemOffset = elemPosition(section); // Store the value we get from elemPosition into elemPosition
        // Here is a condation for add active function,  We check to see if elemOffset is less than 200 and bigger than or equal -200.
        inviewport = () => elemOffset < 200 && elemOffset >= -200;

        removeActive(section);
        addActive(inviewport(),section);        
    });
};
// When we scroll the function will be applied
// When first section appear in my view port, the active class will navigate through it dynamically.
window.addEventListener('scroll' ,sectionActivation); 
////////////////////////////////////////////////////// 


// scrolling function
function Scrolling (sectionId) {  // start funtion with sectionId parameter
	const section = document.getElementById('section'+sectionId);  // Here I created a varible that get section by Id plus paramiter
	const pos = section.offsetTop; // Here I create a varibale that get the section position from top of the window.

  var event ;
	event.preventDefault(); // will prevent the default event from occuring
	window.scrollTo({  // Here we call the scrollTO on window.
		left: 0, 
		top: pos,
		behavior: 'smooth'
	});
	topmenu(); // Call the below function which name is SmallMenu
}
function topmenu() { // Start Function to check navagation menu
    var checkNav = document.getElementById("navbar__list"); // Create a varible that get navagation list by its ID.
    /*  Here there is a condition by if statement. We checking if navagation list equal to the navation menu class.
   If result True it will make the nav bar responsive
   if esle add the navagation list to navbar menu.
    */

   if (checkNav.className === "navbar__menu") { 
    checkNav.className += " responsive";
    } else {
      checkNav.className = "navbar__menu";
    }
}




