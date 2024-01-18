let inscrire=document.getElementById("inscrire")

let id =["nom", "prenom","email","tel","sexe","date","niveau","password","ville"]
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
            element.style.borderBottom=" 1px solid red";
            submit=false
        }else{
            container[i].style.color="#006699"
        }
        i++
        }
    )
    if (submit){
        inscrire.type="submit"
    }
}
    

inscrire.addEventListener("click",rouge)


