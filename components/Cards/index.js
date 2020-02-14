// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(data){
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          authorImg = document.createElement('div'),
          img = document.createElement('img'),
          authorName = document.createElement('span');
    
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    authorImg.classList.add('img-container');
    
    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    authorName.textContent = `By ${data.authorName}`;
    
    card.append(headline, author);
    author.append(authorImg, authorName);
    authorImg.append(img);
    
    return card;
  }
  
  axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    // console.log('A: ', response.data.articles);
    let data = response.data.articles;
    console.log(data);
    for (topic in data){
      // console.log(data[topic]);
      data[topic].forEach(a => {
        document.querySelector('.cards-container').append(createCard(a));
      })
    }
  })
  .catch(error => {
    console.log('Failed to Fetch Cards: ', error);
  });

