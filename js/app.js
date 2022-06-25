//if user add note then add it tto locaolstorage
shownotes();
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener('click',function(e){
let addtext=document.getElementById('addtext');
let notes =localStorage.getItem('notes');
if(notes==null){
    notesobj=[];
}
else{
    notesobj=JSON.parse(notes);
}
notesobj.push(addtext.value);
localStorage.setItem("notes",JSON.stringify(notesobj));
addtext.value="";
console.log(notesobj);
})
function shownotes(){
    let notes =localStorage.getItem('notes');
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    } 
    let html="";
    notesobj.forEach(function(element,index){
        html+=`
        <div class="notecard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</buton>
        </div>
    </div>`;
    });
    let noteselem=document.getElementById('notes');
    if(notesobj.length != 0){
        noteselem.innerHTML=html; 
    }
    else{
      
        let nohtml =`<div class="mt-4 p-5 bg-primary text-white rounded">
        <h1 class="display-4">Nothing to show!</h1>
        <hr class="my-4">
        <p class="lead">Use " add note " section above to add notes.</p>
      </div>`; 
        noteselem.innerHTML=nohtml;      
    }
}


//fuction to delete note
function deletenote(index) {
    
    let notes =localStorage.getItem('notes');
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes(); 
    
}

let search=document.getElementById('searchtxt');
search.addEventListener('input',function() {
    let inputVal = search.value.toLowerCase();
    console.log('input log!',inputVal);
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })

})

/*
1. add title
2. mark to imp note
3. separate note by user account
4. host to the server
*/ 