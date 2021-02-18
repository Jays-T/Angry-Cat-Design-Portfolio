// Handle animation timings

window.addEventListener('load', () => {
    
  document.getElementById('loader').classList.add('fade-out-loader');
  setTimeout(startCat, 2940);
  setTimeout(revealCat, 1800);
  setTimeout(startText, 5450);
  // setTimeout(greyCat, 10200);
  setTimeout(revealContent, 8200);
});

function startText() {
  const mainTextAnim = document.getElementById('main-text-animation');

  mainTextAnim.classList.remove('hidden');
  mainTextAnim.classList.add('overlay');
}

function startCat() {
  const mainCatAnim = document.getElementById('cat_path');

mainCatAnim.classList.add('draw');
}

function revealContent() {
  const content = document.getElementById('slides');
  const headlineSocial = document.getElementById('headline-and-social');
  const scrollableHide = document.getElementById('is-scrollable');

  content.classList.remove('hide-slides');
  headlineSocial.classList.remove('hide-slides');
  scrollableHide.classList.remove('hide-slides');

  content.classList.add('show-slides');
  headlineSocial.classList.add('show-slides');
  scrollableHide.classList.add('show-slides');
}

function revealCat() {
  const cat = document.getElementById('draw-content');

  cat.classList.remove('hidden');
  cat.classList.add('content-reveal');
}

// Toggle slides active state

const slideToggle = document.querySelectorAll('.slide');
const headerAndSocialSwitch = document.getElementById('headline-and-social');
const toggleWrap = document.querySelector('.hide-on-slide');
const closeSlide = document.querySelectorAll('.close-slide');

slideToggle.forEach(popup => popup.addEventListener('click', (e) => {
  let activeSlide = document.querySelectorAll(".active");

  let i;
  for (i = 0; i < activeSlide.length; i++) {
    activeSlide[i].classList.toggle('active');
  }
  popup.classList.toggle('active');
  headerAndSocialSwitch.classList.add('hidden');
  toggleWrap.classList.add('inactive');

  if (closeSlide[0].classList.contains('show-close')) {
  } else {
    closeSlide[0].classList.add('show-close');
  }

}));

// Check Which Slide Is Active And Close It
closeSlide.forEach(popup => popup.addEventListener('click', () => {
  let removeActive = document.querySelectorAll(".active");

  let i;
  for (i = 0; i < removeActive.length; i++) {
    removeActive[i].classList.remove('active');
  }
  popup.classList.remove('show-close');
  headerAndSocialSwitch.classList.remove('hidden');
  toggleWrap.classList.remove('inactive');
}));

// Toggle Say Hi Email Collapsible

const collapseToggle = document.querySelectorAll('.say-hi-toggle');
const collapse = document.querySelector(".say-hi-collapsible");

collapseToggle.forEach(popup => popup.addEventListener('click', () => {
  collapse.classList.toggle('active');
}));

// Toggle Skills Headlines

// Store relevant skills elements
const hasSkills = document.querySelector('.skills-headline-wrap');
const skillsHeadlines = hasSkills.querySelectorAll('.skills-headline');

skillsHeadlines.forEach(popup => popup.addEventListener('click', (e) => {

  // Store Active Skills
  let activeSkills = hasSkills.querySelectorAll(".show-skill");

  // Store Checks
  let checkActiveSkill;
  let checkNextElement;

  // Check if Active State Exists
  if (activeSkills.length != 0) {
    checkActiveSkill = true;
  }
  if (activeSkills.length === 0) {
    checkActiveSkill = false;
  }

  // Check if Next Element has Active State
  if (popup.nextElementSibling.classList.contains('show-skill')) {
    checkNextElement = true;
  } else {
    checkNextElement = false;
  };

  // If Active Skills Open Close Them And Toggle Relevant Elements
  switch (checkActiveSkill) {
    case true:
      let i;
        for (i = 0; i < activeSkills.length; i++) {
          activeSkills[i].classList.toggle('show-skill');
        }
      popup.nextElementSibling.classList.toggle('show-skill');
      break;
    case false:
      popup.nextElementSibling.classList.toggle('show-skill');
  }

  // If Next Element has Active State Remove State
  switch (checkNextElement) {
    case true:
      popup.nextElementSibling.classList.remove('show-skill');
      break;
    case false:
      break;
  }

}));
