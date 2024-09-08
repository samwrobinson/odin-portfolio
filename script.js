const sandwhich = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const aboutMe = document.querySelector('.about-me');
const arrow = document.querySelector('.arrow');

function showLinks() {
    navLinks.classList.toggle('active');
}

function showArrow() {
    arrow.classList.toggle('active');
}

sandwhich.addEventListener('click', () => {
    showLinks();
})

aboutMe.addEventListener('mouseover', showArrow);

aboutMe.addEventListener('mouseout', showArrow)

document.addEventListener("DOMContentLoaded", () => {
    // Select all child elements of .intro-content
    const introContentItems = document.querySelectorAll("#introduction .intro-content > *");
  
    // Callback function for the Intersection Observer
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'in-view' class when the element is in view
          entry.target.classList.add('in-view');
        }
      });
    };
  
    // Create the Intersection Observer
    const observerOptions = {
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Observe each item inside .intro-content
    introContentItems.forEach(item => {
      observer.observe(item);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Select all direct children of the .transition section
    const transitionChildren = document.querySelectorAll('.transition > *');
  
    // Intersection Observer callback function
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'in-view' class when the element is in view
          entry.target.classList.add('in-view');
        }
      });
    };
  
    // Create the Intersection Observer
    const observerOptions = {
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Observe each child element inside the .transition section
    transitionChildren.forEach(child => {
      observer.observe(child);
    });
  });  
  