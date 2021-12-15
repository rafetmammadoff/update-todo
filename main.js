

//Lazim olan elementlerin her birini bir deyiskene beraber ediriy*********************************

var myInput=document.querySelector("#my-input")  //1
var myButton=document.querySelector("#my-button")//2
var myLists=document.querySelector("#my-lists")//3

//Yuxaridaki hisseye event veririy****************************************************************

myButton.addEventListener("click",add)// 4 elave etmek ucun funksiya 

myLists.addEventListener("click",deleteLi) // 6  silmek ucun funksiya

document.addEventListener("DOMContentLoaded",get)  //  10



// Add funksiyasini ise saliriq*******************************************************************

function add(){  //5
    var value=myInput.value              //inputun valuesin tuturuq
    var list=document.createElement("li") //yeni bir li yaradiriq
    var listValue=list.innerText=value    //yaratdigimiz listin deyerini inputun valuesine beraber edirik
    var delBtn=document.createElement("button") // silmek ucun button yaradiriq
    delBtn.classList.add("trash")          //buttona class elave edirik
    delBtn.innerHTML='<i class="fas fa-times"></i>'                 //buttonun icerisine Yazi elave ediriy
    myLists.appendChild(list)             //yaratdigimiz listi UL nin icerisine atiriq
    list.appendChild(delBtn)           //yaratdigimiz buttonu LI nin icine atiriq
    saveLS(listValue)   //9
    
    myInput.value=''                      //Inputun valuesini bos ediriy
}

// DeleteLi funksiyasin basladiriq*******************************************************************

function deleteLi(e){  // 7  funksiyaya her has=nsi event elave ediriy men "e" yazdim
    var item=e.target      //bu o demekdirki hadise hansi elementin uzerinde gedirse item ona beraber olur.hal hazirda item MyLists e beraber olur.cunki unun klikinde funksiya isleyir
    if (item.classList.contains("trash")) { //deyiremki eger click elediyim yerde trash clasi vardirsa egeer
        var ata=item.parentElement  //itemin yeni if sertine gore uje buttonun parenti yeni atasi list olur 
        ata.remove()                 //ve son olaraq atani silirik
        removeLocal(ata)  //13
    }                                
    
}

// Local storageye kayd elemek***********************************************************************

function saveLS(gulu){   // 8  local ucun funksiyamizi yazdiq ve eventine 'gulu' deye bir deyisken verdik. indi add funksiyasina baxin.orada "saveLS" funksiyasin cagiririq ve eventine listValue veririk.bu o demek olduki biz "gulu" nu listvalue ye beraber eledik
    let degisken;// bos bir deyisken yaradiriq
    if (localStorage.getItem("model")===null) { //eger lokaldan get elediyimiz model bosdursa 
        degisken=[] //degisken bos arraya beraber olsun
        
    }else{
        degisken=JSON.parse(localStorage.getItem("model")) // deyilse icindeki datalari json.pars elesin(yeni javascript dilinde yazdirsin)
    }
    degisken.push(gulu) //digisken icerisine push edirik gulu-nu yeni listValueni
    
    localStorage.setItem("model",JSON.stringify(degisken)) //locala setdediyimiz datani json.stringify yeni string diline cevirib gondeririy. cunki lokalsorage yanliz string kimi melumat qebul edir
}


//Get funksiyasi

function get(){   //11
    let degisken;// bos bir deyisken yaradiriq
    if (localStorage.getItem("model")===null) { //eger lokaldan get elediyimiz model bosdursa 
        degisken=[] //degisken bos arraya beraber olsun
        
    }else{
        degisken=JSON.parse(localStorage.getItem("model")) // deyilse icindeki datalari json.pars elesin(yeni javascript dilinde yazdirsin)
    }
    
    degisken.forEach(function(rafet) {  // eger forEach metodunu yazmasaq ekrana ancaq 1 dene list yazdirar
        //funksiyanin eventine yazdigimiz rafet ise hadise bas veren elemente beraberdir yeni siz inputa ne yazsaz yeniledikde rafet ona beraber olacaq
        var value=myInput.value               //inputun valuesin tuturuq
        var list=document.createElement("li") //yeni bir li yaradiriq
        list.innerText=rafet    //yaratdigimiz listin deyerini rafet e beraber ediriy
        var delBtn=document.createElement("button") // silmek ucun button yaradiriq
        delBtn.classList.add("trash")          //buttona class elave edirik
        delBtn.innerHTML='<i class="fas fa-times"></i>'                //buttonun icerisine Yazi elave ediriy
        myLists.appendChild(list)             //yaratdigimiz listi UL nin icerisine atiriq
        list.appendChild(delBtn)           //yaratdigimiz buttonu LI nin icine atiriq
        
    });

}

//Lokaldan silme funksiyasi

function removeLocal(params) {   //12
    let degisken;// bos bir deyisken yaradiriq
    if (localStorage.getItem("model")===null) { //eger lokaldan get elediyimiz model bosdursa 
        degisken=[] //degisken bos arraya beraber olsun
        
    }else{
        degisken=JSON.parse(localStorage.getItem("model")) // deyilse icindeki datalari json.pars elesin(yeni javascript dilinde yazdirsin)
    }

    
    const text=params.innerText // burada biz li nin icerisindeki yazini tuturuq
    
    degisken = degisken.filter(item => item !== text) //eger item yeni badigimiz listin icersindeki yazi texte beraberdirse onu silib qalanlarin filter elesin
    
    localStorage.setItem('model',JSON.stringify(degisken)) 

    
}







