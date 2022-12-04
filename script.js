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
}

GetDate()

const SetActiveDiv = () =>{

    const loginButton = document.querySelector('.section8 .first').getElementsByClassName("button");
    const backButton = document.querySelector('.section8 .second').getElementsByClassName("button");

    const element = document.querySelector('.section8').getElementsByClassName("page");
    
    loginButton[0].addEventListener('click' , function handleClick(){
        element[0].classList.remove("active")
        element[1].classList.add("active")
    })

    backButton[0].addEventListener('click' , function handleClick(){
        element[0].classList.add("active")
        element[1].classList.remove("active")
    })
    
}

SetActiveDiv()

const OpenComboBox = () =>{

    const button = document.querySelector('.section9 .container').getElementsByTagName("i");
    
    const element = document.querySelector('.section9').getElementsByClassName("combobox");

    button[0].addEventListener('click' , function handleClick(){
        if(element[0].classList.contains("hidden")){
            element[0].classList.remove("hidden")
        }
        else{
            element[0].classList.add("hidden")
        }
    })


    console.log(element)
}

OpenComboBox()