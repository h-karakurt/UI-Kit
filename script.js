const CheckBox = () =>{
    let element = document.querySelector('.section6 .container').getElementsByClassName('box');

    for(let i=0; i<2; i++){
        element[i].addEventListener('click' , function handleClick(e){
            console.log(e.target);
            if(e.target.classList.contains("checked")){
                e.target.classList.remove("checked")
            }
            else{
                e.target.classList.add("checked")
            }
        })
    }
}
CheckBox()

const GetDate = () =>{
    const d = new Date();
    const day = d.getDate()
    const month = d.getMonth()
    const daysElements = document.querySelector('.section7 .container .days-box').getElementsByClassName('day');
    daysElements[day-1].classList.add("today")

    const monthElement = document.querySelector('.section7 .container .month').getElementsByTagName("span");
    monthElement[0].innerHTML = month

    console.log(monthElement)
}

GetDate()