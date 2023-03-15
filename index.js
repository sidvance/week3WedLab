
let message = document.querySelector('#message')



const addMovie = (evt) => {
    evt.preventDefault()

    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    document.querySelector('ul').appendChild(movie)
    inputField.value = ('')
    console.log(evt)
}

let form = document.querySelector('form')

form.addEventListener('submit', addMovie)


const deleteMovie = (evt) => {
    evt.target.parentNode.remove()
    message.textContent = 'No longer interested, don\'t call again'
}


const crossOffMovie = (evt) => {
    evt.target.classList.toggle('checked')
    if(evt.target.classList.contains('checked') === true){
        message.textContent = 'Get a hobby!'
    } else {
        message.textContent = 'Please find more friends before adding more movies'
    }
}