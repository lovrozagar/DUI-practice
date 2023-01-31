// HAMBURGER MENU
const burgerMenuButton = document.getElementById('bar-container');
const navbar = document.getElementById('menu-container');
burgerMenuButton.addEventListener('click', () =>
  navbar.classList.toggle('active')
);

// SLIDE LIST
const arrows = document.querySelectorAll('[data-arrow]');
arrows.forEach((arrow) => {
  arrow.addEventListener('click', handleArrow);
});

const tabs = document.querySelectorAll('[data-tab]');
tabs.forEach((tab) => {
  tab.addEventListener('click', handleTab);
});

function handleTab() {
  if (this.hasAttribute(['data-active-tab'])) return;
  console.log('b');
  const slideSection = this.closest('[data-photo-section]');
  const tabContainer = slideSection.querySelector('[data-tabs]');
  const activeTab = tabContainer.querySelector('[data-active-tab]');
  const activeTabIndex = [...activeTab.parentNode.children].indexOf(activeTab);

  // let newTabIndex = activeTabIndex;
  this.dataset.activeTab = true;
  delete activeTab.dataset.activeTab;
}

function handleArrow() {
  const slideSection = this.closest('[data-photo-section]');
  const slideList = slideSection.querySelector('[data-slides]');
  const currentSlide = slideList.querySelector('[data-active-slide]');
  const currentSlideIndex = [...currentSlide.parentNode.children].indexOf(
    currentSlide
  );

  let newSlideIndex = currentSlideIndex;
  if (this.dataset.arrow === 'previous')
    currentSlideIndex !== 0
      ? (newSlideIndex -= 1)
      : (newSlideIndex = slideList.children.length - 1);
  else
    currentSlideIndex !== slideList.children.length - 1
      ? (newSlideIndex += 1)
      : (newSlideIndex = 0);

  slideList.children[newSlideIndex].dataset.activeSlide = 'true';
  delete slideList.children[currentSlideIndex].dataset.activeSlide;
}
