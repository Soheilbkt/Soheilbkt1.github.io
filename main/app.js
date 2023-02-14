let inputrange = document.querySelector(".appearance-none");
let inputrangeNUM = document.querySelector(".num-range");
let strongpas = document.querySelectorAll(".level-pas")
let valuepas = document.querySelector(".text-pas")
let checkwords = document.querySelectorAll(".words")
let textlevel = document.querySelector(".text-level")
let btncoptclipbord = document.querySelector(".copy-text")
let uppercaseword = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H"]
let lowercaseword = uppercaseword.join(" ").toLowerCase().split(" ");
let numberword = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let symolsword = ["!", "@", '#', "$", "%", "^", "&"]
let pasword = []
let aletcopy = document.querySelector(".alert")
let urlaelm= document.querySelector(".url-don")



btncoptclipbord.addEventListener("click",(item)=>{
    if(window.navigator.vibrate){
        navigator.vibrate(200);
    }

    if(window.navigator.clipboard.writeText){
        
        navigator.clipboard.writeText(valuepas.innerHTML);

    }
    else{
        alert("use borwser crome")
    }

    aletcopy.classList.remove("left-[-80vh]")
    aletcopy.classList.add("left-[1px]")
    setInterval(() => {
        aletcopy.classList.add("opacity-0")
    }, 1000);
     

  

})

inputrange.addEventListener("change", (evnet) => {
    inputrangeNUM.innerHTML = inputrange.value;
   
})

function genarterpas(){
    for(let i = 0 ;i < inputrange.value;i++){
      pasword.unshift(uppercaseword[Math.floor(Math.random() * uppercaseword.length)])
      checkwords[1].checked && pasword.unshift(lowercaseword [Math.floor(Math.random() * lowercaseword.length)])
      checkwords[2].checked && pasword.unshift(numberword[Math.floor(Math.random() * numberword.length)])
      checkwords[3].checked && pasword.unshift(symolsword[Math.floor(Math.random() * symolsword.length)])  
      
    }
    pasword.length = inputrange.value 
    valuepas.innerHTML  = pasword.join("")
    donlowadtxt(valuepas.innerHTML)
    
}



function levelpaswrod() {

    if (checkwords[0].checked) {
        strongpas[0].style.cssText = `background: #4ade80; ; border:none; `
        textlevel.innerHTML = `low`  
        checkwords[0].checked && (checkwords[1].disabled = false);
        checkwords[1].checked && (checkwords[2].disabled = false);
        checkwords[2].checked && (checkwords[3].disabled = false);
   
        meduuimlevel();
        highlevel();
        veryhigh()
      
      



    }
}

checkwords.forEach((item) => {
    item.addEventListener("change", () => {
        levelpaswrod()
    })
})


function meduuimlevel(){
    checkwords[1].checked && (strongpas[1].style.cssText = ` background: rgb(212 222 74); ; border:none;`);
    checkwords[1].checked && (strongpas[0].style.cssText = ` background: rgb(212 222 74); ; border:none;`);
    checkwords[1].checked &&  (textlevel.innerHTML = `meduim`);
 

    !checkwords[1].checked && (strongpas[1].style.cssText = `border:2px solid white;`);
   
}
function highlevel(){
    checkwords[2].checked && (strongpas[2].style.cssText = ` background: rgb(222 152 74) ; border:none;`);
    checkwords[2].checked && (strongpas[0].style.cssText = ` background: rgb(222 152 74) ; border:none;`);
    checkwords[2].checked && (strongpas[1].style.cssText = ` background: rgb(222 152 74) ; border:none;`);
    checkwords[2].checked && (textlevel.innerHTML = `high`)

    
    !checkwords[2].checked && (strongpas[2].style.cssText = `border:2px solid white;`);
}
function veryhigh(){
    checkwords[3].checked && (strongpas[3].style.cssText = ` background: rgb(222 74 74) ; border:none;`);
    checkwords[3].checked && (strongpas[0].style.cssText = ` background: rgb(222 74 74) ; border:none;`);
    checkwords[3].checked && (strongpas[1].style.cssText = ` background: rgb(222 74 74) ; border:none;`);
    checkwords[3].checked && (strongpas[2].style.cssText = ` background: rgb(222 74 74) ; border:none;`);

    checkwords[3].checked && (textlevel.innerHTML = `very high`)

    
    !checkwords[3].checked && (strongpas[3].style.cssText = `border:2px solid white;`);
}


function donlowadtxt(txt){


    let bolofile = new Blob([`password you:${txt}`],{type:"text"})
    let url =  URL.createObjectURL(bolofile);
    urlaelm.href = url;
    urlaelm.download = "password you file .txt"
    if(window.navigator.vibrate){
        navigator.vibrate(200);
    }
    


}