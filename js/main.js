var buttonOff = document.querySelector('.switch.on')
var textOff = document.querySelector('.status')

buttonOff.addEventListener('click', function(){
    var color = document.body.style.backgroundColor 
    //textOff.innerHTML = "Hey Who Turned Off The Lights!!!" 
        if(color == 'black'){
            buttonOff.addEventListener('click', function(){
            document.body.style.backgroundColor = 'white'
            textOff.innerHTML = "It's so bright in here!!"
            })
        }else {
                buttonOff.addEventListener('click',function(){
                document.body.style.backgroundColor = 'black'
                textOff.innerHTML = "Hey Who Turned Off The Lights!!!" 
            })

}
    
})



