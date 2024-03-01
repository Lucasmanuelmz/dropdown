import './style.css';
import HiddenAndVisibility from './print';
import Hamburger from './hamburger.png';
import Close from './close.png';
import carroussel from './carroussel';

function App() {
  const introductionMenu = document.querySelector('#introduction-menu');
  const introduction = document.querySelector('#introduction');
  const aboutUs = document.querySelector('#about-us');
  const about = document.querySelector('#about');
  const works = document.querySelector('#works');
  const ourWorks = document.querySelector('#our-works');
  const polices = document.querySelector('#polices');
  const ourPolice = document.querySelector('#our-polices');
  const portfolio = document.querySelector('#portfolio');
  const Users = document.querySelector('#users');
  const time = document.querySelector('#time');
  const forUs = document.querySelector('#for-us');
  const product = document.querySelector('#product');
  const products = document.querySelector('#products');

  const main = document.querySelector('main');
  const div = document.querySelector('#dropdown');

  const btnMenu = document.createElement('button');
  btnMenu.id = 'btn-content';
  main.insertBefore(btnMenu, div);

  let isClose = false;

  introductionMenu.addEventListener('click', (e) => {
    e.preventDefault();
    HiddenAndVisibility(introduction);
  });

  about.addEventListener('click', (e) => {
    HiddenAndVisibility(aboutUs);
    e.preventDefault();
  });

  works.addEventListener('click', (e) => {
    HiddenAndVisibility(ourWorks);
    e.preventDefault();
  });

  polices.addEventListener('mouseover', (e) => {
    HiddenAndVisibility(ourPolice);
    e.preventDefault();
  });

  product.addEventListener('click', (e) => {
    HiddenAndVisibility(products);
    e.preventDefault();
  });

  time.addEventListener('mouseover', (e) => {
    HiddenAndVisibility(forUs);
    e.preventDefault();
  });

  portfolio.addEventListener('mouseover', () => {
    HiddenAndVisibility(Users);
  });

  const img = document.createElement('img');
  img.src = Hamburger;

  const img1 = document.createElement('img');
  img1.src = Close;
  btnMenu.appendChild(img);

  btnMenu.addEventListener('click', (e) => {
    btnMenu.innerHTML = '';
    const imageToggle = isClose ? img : img1;
    btnMenu.appendChild(imageToggle);
    HiddenAndVisibility(div);
    isClose = !isClose;
    e.preventDefault();
  });
  const newDiv = carroussel()
  main.appendChild(newDiv);
}
document.addEventListener('DOMContentLoaded', App);
