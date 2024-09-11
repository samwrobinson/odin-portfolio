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
  
    // Observe each child element inside the .transition section
    transitionChildren.forEach(child => {
      observer.observe(child);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Select all direct children of the .transition section
    const redBlock = document.querySelector('.transition .red-block');
    const greenBlock = document.querySelector('.transition .green-block');
    const textContent = document.querySelector('.transition .intro-container h1');
    const period = document.querySelector('.transition .intro-container h1 span');
  
    // Intersection Observer callback function
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
      threshold: 0.8 // Trigger when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    observer.observe(redBlock);
    observer.observe(greenBlock);
    observer.observe(textContent);
    observer.observe(period);
  }); 

document.addEventListener("DOMContentLoaded", () => {
    // Select all the h1 elements
    const letters = document.querySelectorAll('.header-content h1');
    const period = document.querySelector('.projects .intro-content .header-content span');

    // Create an intersection observer
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        // Add the class 'in-view' to letters when they are in view
        entry.target.classList.add('in-view');
        }
    });
    });

    // Observe each letter
    letters.forEach(letter => {
    observer.observe(letter);
    });

    observer.observe(period);
});
