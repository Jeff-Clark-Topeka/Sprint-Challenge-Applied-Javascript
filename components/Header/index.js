// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    
    const headerCont = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerTitle = document.createElement('title')
    const headerTemp = document.createElement('span')
    
    headerCont.append(headerDate, headerTitle, headerTemp)

    headerCont.classList.add('header')
    headerDate.classList.add('date')
    headerTemp.classList.add('temp')

    headerDate.textContent = 'SMARCH 28, 2019'
    headerTitle.textContent = 'Lambda Times' 
    headerTemp.textContent = '98°'

    return headerCont;

}

const headerComp = document.querySelector('.header-container')
headerComp.appendChild(Header('.header'))
