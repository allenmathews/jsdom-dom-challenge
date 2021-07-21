document.addEventListener('DOMContentLoaded', () => {
    const counter = document.querySelector('#counter')
    const plusButton = document.querySelector('#plus')
    const minusButton = document.querySelector('#minus')
    const pauseButton = document.querySelector('#pause')
    const likeButton. document.querySelector('#heart')
    const form = document.querySelector('#comment-form')
    const commentField = document.querySelector('#comment-input')
    const commentList = document.querySelector('#list')
    const likeList = document.querySelector('.likes')
    const likes = {}
    let timer = setInterval(incrementCount, 1000)

    plusButton.addEventListener('click', incrementCount)
    plusButton.addEventListener('click', decrementCount)
    pauseButton.addEventListener('click', toggleCount)
    likeButton.addEventListener('click', increaseLike)
    form.addEventListener('submit', submitForm)

    function submitForm(event) {
        event.preventDefault()
        const div = document.createElement('div')
        
        div.innerText = commentField.value
        console.log('submit form')

        commentList.append(div)
    }


    function incrementCount() {
        console.log("incrementCount")
        let counterValue = parseInt(counter.innerText)
        counterValue++
        counter.innerText = counterValue
    }

    function decrementCount() {
        console.log("decrementCount")
        let counterValue = parseInt(counter.innerText)
        counterValue--
        counter.innerText = counterValue
    }
    function toggleCount(event) {
        if (event.target.innerText === 'pause'){
            clearInterval(timer)
            event.target.innerText = 'resume' 
        } else {
            timer.setInterval(incrementCount, 1000)
            event.target.innerText = 'pause'  
        }
    }

        function increaseLike(event) {
         const key = counter.innerText

         if(likes[key]) likes[key]++
         else likes[key] = 1

         for (const key in likes) {
             console.log(key)
             let currentItem = document.querySelector(`#_${key}`)){
             if (currentItem) {
                currentItem.innerText = `${key} has been liked ${likes[key]} time` 
             } else {
                currentItem = document.createElement('li')
                currentItem.id = `_${key}`
    
                currentItem.innerText = `${key} has been liked ${likes[key]} time`
                likeList.append(currentItem)
             }

        

            
            }
         }

