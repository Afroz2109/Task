fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    data = json;
    console.log(data);
    renderProducts(data)
  });


function renderProducts(products) {
  products.forEach(product => {
    renderSingleProduct(product);
  });
}

function renderSingleProduct(product) {
  let resultDiv = document.createElement('div');
  resultDiv.classList.add('result');

  let resultImage = document.createElement('img');
  resultImage.className= 'image'
  resultImage.src = product.image;

  let resultTitle = document.createElement('h4');
  resultTitle.innerText = product.title;

  let resultPrice = document.createElement('p');
  resultPrice.innerText = `Price: $${product.price}`;

  let buyNowButton = document.createElement('button');
  buyNowButton.innerText = 'Buy';

  buyNowButton.className='BuyButton'

  resultDiv.appendChild(resultImage);
  resultDiv.appendChild(resultTitle);
  resultDiv.appendChild(resultPrice);
  resultDiv.appendChild(buyNowButton);

  document.querySelector('.results').appendChild(resultDiv);
}

