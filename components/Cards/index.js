// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardFunction = (data) => {

    const card = document.createElement('div')
    const headlineCont = document.createElement('div')
    const authorCont = document.createElement('div')
    const imgCont = document.createElement('div')
    const imgUrl = document.createElement('img')
    const authorName = document.createElement('span')

    card.append(headlineCont, authorCont)
    authorCont.append(imgCont, authorName)
    imgCont.appendChild(imgUrl)

    card.classList.add('card')
    headlineCont.classList.add('headline')
    authorCont.classList.add('author')
    imgCont.classList.add('img-container')

    headlineCont.textContent = data.headline
    imgUrl.src = data.authorPhoto
    authorName.textContent = data.authorName

    return card;
}

const cards = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then(response => {
        const articles = response.data.articles
        for(var x in articles){
            articles[x].forEach(newArticles => {
                cards.appendChild(cardFunction(newArticles))
            })
        }
    })
