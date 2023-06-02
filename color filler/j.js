const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let btn=document.getElementById('btn')
let color=document.getElementById('color')
btn.addEventListener('click',()=>{
    s='#'
    for(let i=0;i<6;i++){
        s=s+String(hex[random()])
    }
    color.innerText=s
    document.body.style.backgroundColor=s

})
function random(){
    return Math.floor(Math.random()*(hex.length))
}