const fetchDataBtn = document.querySelector('#fetchdata')
const result = document.querySelector('#result')
//getting data from api and to append in html
function getwords(){
var words=document.getElementById("result").value
const rows = document.querySelector(".row")
rows.className=" row"
const div = document.querySelector("#def")

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`)
  .then((data)=>(data.json()))
  .then((data1)=>{
    for (let i = 0; i < data1.length; i++){
      var title= document.getElementById("title");
      var phonetic= document.getElementById("phonetic");
      title.innerHTML=`Words: ${data1[i].word}`;
      phonetic.innerHTML=`phonetic: ${data1[i].phonetic}`;
      for (let item=0 ;item< data1[i].meanings.length;item++) {
       
        for (const def of data1[i].meanings[item].definitions)
        { 
         var p=document.createElement("div");
         p.setAttribute("id","deflist");
         p.innerHTML=`<b>Meaning</b>: ${def.definition}`;
      
         div.append(p)
          //console.log(def.definition);

        }
      }     
    }
 
    })
  .catch((err)=>{
    var p=document.createElement("p");
         p.setAttribute("id","error");
         p.innerHTML="word was not found";
         div.append(p)
         console.log(err)
  })


}

//calling function in button click
fetchDataBtn.addEventListener('click', getwords)