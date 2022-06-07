const button = document.createElement('button')
const div = document.createElement('div')

const png = document.createElement('img')


png.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Chuck_Norris_May_2015.jpg/250px-Chuck_Norris_May_2015.jpg"



document.body.append(button)
document.body.append(div)
document.body.prepend(png)
button.textContent = "ADD"
fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})



button.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        div.textContent = data.value
        
    })   
}) 