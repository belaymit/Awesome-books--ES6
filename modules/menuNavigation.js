const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const icon = navToggle.querySelector('.fa-times');
const openIcon = navToggle.querySelector('.fa-bars');

const menuNavigator = () => {
  navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
    icon.classList.toggle('close-icon');
    openIcon.classList.toggle('open-icon');
  });
};
export default menuNavigator;