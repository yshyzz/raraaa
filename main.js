onload = () => {
  document.body.classList.remove("container");

  setTimeout(() => {
    const photoContainer = document.querySelector('.photo-container');
    const photoCount = 10;
    const photoFiles = [];
    const shapes = ['circle', 'square', 'heart'];

    for (let i = 1; i <= photoCount; i++) {
      photoFiles.push(`pic/img${i}.jpg`);
    }

    for (let i = 0; i < photoCount; i++) {
      const photoDiv = document.createElement('div');
      photoDiv.classList.add('flying-photo');

      // Pilih bentuk secara acak
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      photoDiv.classList.add(randomShape);

      photoDiv.style.backgroundImage = `url('${photoFiles[i]}')`;
      photoDiv.style.animationDelay = `${Math.random() * 5}s`;
      photoDiv.style.left = `${Math.random() * 100}vw`;
      photoDiv.style.top = `${Math.random() * 100}vh`;

      photoContainer.appendChild(photoDiv);
    }
  }, 4000);
};
