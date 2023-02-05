// Navbar
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

// Add click event
menuBtn.addEventListener('click', ()=>{
    // Toggle menu open class
    menu.classList.toggle('menu-open');
});

// Stats Counter
const stats = document.querySelector('.stats');
const counters = document.querySelectorAll(".counter");
let bol = false;

// Get stats section offset from the top of the page + the stats element height
const sectionOffset = stats.offsetTop + stats.offsetHeight;

// Start the counter when the page is scrolled to the stats section
window.addEventListener("scroll", ()=>{
    // Get page offset from top + the whole screen height
    const pageOffset = window.innerHeight+pageYOffset;
    // Run the updateCount function if the page is scrolled past the stats section, and run only once
    if(pageOffset>sectionOffset && bol === false){
        // Select all counters
        counters.forEach((counter)=>{
            function updateCount(){
                // Set variables and woverwirte them every time with the '+' shorthand
                const target = +counter.getAttribute('data-target');
                const speed = +counter.getAttribute('data-speed');
                const count = +counter.innerText;

                // Check if target us reached
                if(count < target){
                    // Increment
                    counter.innerText=count+1;
                    // Call funciton every ms
                    setTimeout(updateCount, speed);
                }
                else{
                    // When the target is reached
                    // Stop counting
                    counter.innerText=target;
                }
            }
            // Run the updateCount function
            updateCount();
            // Run the function only once by breaking one of the conditions in the if statement

            // This stops the updateCount funciton from running every time you scroll past this section

            bol=true;
        });
    }
});