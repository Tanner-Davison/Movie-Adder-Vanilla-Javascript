const message = document.querySelector('#message');
let timeoutID;


function addMovie(event) {
    event.preventDefault();

    const inputField = document.getElementById('inputField');
    const movieList = document.querySelector('ul');
  
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    const capitalizedInput = inputField.value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    movieTitle.textContent = capitalizedInput;
    movieTitle.addEventListener('click',crossOffMovie)
    movie.appendChild(movieTitle);
    deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.addEventListener('click', deleteMovie);
    movie.appendChild(deleteButton);
    movieList.appendChild(movie);
  
    inputField.value = '';

  }
  function deleteMovie(event) {
    const movie = event.target.parentNode;
    const movieTitle = movie.querySelector('span')
    movie.remove()
    message.textContent= `${movieTitle.textContent} was deleted from the list!`
    revealMessage();
  }
  
  function crossOffMovie(event) {
    const movie = event.target.parentNode;
    movie.classList.toggle('checked');
    const movieTitle = movie.querySelector('span');
    if (movie.classList.contains('checked')) {
      message.textContent = `${movieTitle.textContent} Watched`;
    } else {
      message.textContent = `${movieTitle.textContent} was added Added Back`;
    }
  }
  
    function revealMessage() {
      clearTimeout(timeoutID); // clear any existing timeout
      message.classList.remove('hide');
      timeoutID = setTimeout(() => {
        message.classList.add('hide');
      }, 2000);
    }
  
  

 


  document.querySelector('form').addEventListener('submit', addMovie);