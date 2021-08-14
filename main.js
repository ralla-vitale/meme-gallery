
var imageUrls=[
  // 'https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/states-of-a-programmer.png',
  // 'https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/programming-or-googling.jpg',
  // 'https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/works-doesnt-work.jpg'
];

var imageUrlInput= document.querySelector('input');
var addImageButton = document.querySelector('button');
var gallery = document.querySelector('main');

addImageButton.addEventListener('click', function(event){
  if (imageUrlInput.value !==''){
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value='';
  updateGallery();
});

function updateGallery(){
  gallery.innerHTML='';

  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
