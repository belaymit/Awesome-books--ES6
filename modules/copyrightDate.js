const copyRight = () => {
  const copyrightDate = document.querySelector('.year');
  const copyright = new Date().getFullYear();
  copyrightDate.innerHTML = copyright;
};
export default copyRight;