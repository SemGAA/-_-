const changeColor = () => { 
    const colors = document.querySelectorAll(".change input")
    const spans = document.querySelectorAll(".number span")
    const footer = document.querySelector("footer")
    let str=''

    for (let i = 0; i < colors.length; i++) 
    {
        colors[i].addEventListener('change', () =>{
            spans[i].innerHTML = colors[i].value
            str = 'rgba('
            for (const span of spans) {
                str = str + span.innerHTML + ','
            }
            str = str + '1'
            footer.style.backgroundColor = str
        })
    }

}
changeColor()