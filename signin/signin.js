let connecter=document.getElementById("connecter")

let id =["email","password"]
let input=[]
let container=[]
id.map(i=>
    {
        container.push(document.getElementById(i+"Cont"))
        input.push(document.getElementById(i))
    }
)
function rouge(){
    let submit=true    
    let i=0
    input.map(element=>{
        if (element.value=="")
        {
            container[i].style.color="red"
            connecter.style.pointerEvents="none"
            console.log(connecter)
            submit=false
        }else{
            container[i].style.color="#006699"
            element.style.borderBottom=" 1px solid red";
            connecter.style.pointerEvents="auto"
        }
        i++
        }
    )
    if (submit){
        connecter.type="submit"
    }
}
connecter.addEventListener("click",rouge)
