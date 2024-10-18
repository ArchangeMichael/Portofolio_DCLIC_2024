// Typing effect
var typed = new Typed('.typing', {
  strings: ['Ingénieur environnementaliste', 'Développeur Web', 'Développeur Application Mobile'],
  typeSpeed: 120,
  backSpeed: 60,
  loop: true,
});

// Asidebar functionality
const nav = document.querySelector('.nav'),
  navList = nav.querySelectorAll('li'),
  totalNavList = navList.length,
  allSection = document.querySelectorAll('.section'),
  totalSection = allSection.length;

// Handle click events for each navigation item
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');
  a.addEventListener('click', function () {
    // Deactivate all sections
    for (let j = 0; j < totalSection; j++) {
      allSection[j].classList.remove('active');
    }
    // Deactivate all nav links and set back sections
    for (let j = 0; j < totalNavList; j++) {
      const navLink = navList[j].querySelector('a');
      if (navLink.classList.contains('active')) {
        allSection[j].classList.add('back-section');
      }
      navLink.classList.remove('active');
    }
    // Activate the current link and show the corresponding section
    this.classList.add('active');
    showSection(this);
    // Toggle aside bar on small screens
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

// Show the corresponding section
function showSection(element) {
  const target = element.getAttribute('href').split('#')[1];
  // Deactivate all sections
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('active');
  }
  // Activate the targeted section
  document.querySelector('#' + target).classList.add('active');
}

// Update navigation based on the active section
function updateNav(element) {
  const target = element.getAttribute('href').split('#')[1];
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector('a').classList.remove('active');
    if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
      navList[i].querySelector('a').classList.add('active');
    }
  }
}

// Event listener for hire-me button
//document.querySelector('.hire-me').addEventListener('click', function () {
 // showSection(this);
 // updateNav(this);
//});

// Event listener for contact button
document.querySelector('.contact').addEventListener('click', function () {
  showSection(this);
  updateNav(this);
});

// Nav toggler button functionality
const navTogglerBtn = document.querySelector('.nav-toggler'),
  aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', () => {
  asideSectionTogglerBtn();
});

// Toggle aside bar visibility
function asideSectionTogglerBtn() {
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle('open');
  }
}
