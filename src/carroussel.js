import Image1 from './imagem1.jpg';
import Image2 from './imagem2.jpg';
import Image3 from './imagem3.jpg';
import Image4 from './imagem4.jpg';
import Image5 from './imagem5.jpg';
import Image6 from './imagem6.jpg';
import Image7 from './imagem7.jpg';

function carroussel() {
  const div = document.createElement('div');
  div.style.cssText = `
    width: 1000px;
    height: 600px;
    overflow: hidden;
    margin: auto;
    background-position: center;
    background-size: cover;`;

  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

  images.forEach((imageUrl, index) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.cssText = `
      width: 100%;
      height: 100%;
      transition: .6s ease;
      display: ${index === 0 ? 'block' : 'none'};`;

    div.appendChild(img);
  });

  function carrousselImage() {
    let col;
    for (let i = 0; i < images.length; i++) {
      console.log(i);
    }
  }
  carrousselImage();

  return div;
}

export default carroussel;
