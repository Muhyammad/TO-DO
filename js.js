const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
let i = 0


btn.addEventListener('click', (e) => {
    if (input.value === '') return
    createDelateElements(input.value)
    input.value = ''
})

// создание и удаление  
function createDelateElements(value) {



    i++

    const li = document.createElement('li')
    const btn = document.createElement('button')

    btn.style.color = 'rgb(207 108 0)';
    btn.style.backgroundColor = 'black';
    btn.style.borderRadius = '30px';
    btn.style.textDecoration = 'none'



    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    btn.textContent = 'X'
    li.appendChild(btn)

    // удаление to do
    btn.addEventListener('click', (e) => {
        i--
        total.textContent = i
        result.removeChild(li)


    })

    // зачеркивание
    li.addEventListener('click', (e) => {
        li.style.backgroundColor = 'transparent';
        li.style.textDecoration = 'line-through';
        li.removeChild(li)
    })
    if (i <= 14)
        total.textContent = i
    if (i <= 14)



        result.appendChild(li)

}