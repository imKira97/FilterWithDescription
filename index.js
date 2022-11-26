var headerTitle=document.getElementById('header-title');
// headerTitle.textContent='hello';
// headerTitle.innerText='HELLO';
/*
Both innerText and textContent works same
but innerText pays attention to styling

var header=document.getElementById('main-header');
header.style.border='solid 3px red';

var listItems=document.getElementsByClassName('list-group-item');
console.log(listItems);
listItems[2].style.backgroundColor='green';
for(let i=0;i<listItems.length;i++){
    listItems[i].style.fontWeight='bold';
}


//QuerySelector
//by default 1st input will be selected
// var input=document.querySelector('input');
// input.value='hello';
// //with query selector we can also use css property to select
// var submit=document.querySelector('input[type=submit]');
// submit.value='Add';

// var listItems=document.querySelector('.list-group-item');
// listItems.style.color='green';
// var secondChild=document.querySelector('.list-group-item:nth-child(2)');
// secondChild.style.color='red';

// var lastChild=document.querySelector('.list-group-item:last-child');
// lastChild.style.color='blue';


//QuerySelectorAll
//.list-group-item:nth-child(odd) - this are css pseudo selectors
var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.color='blue';
}
*/

/*
Traversing the DOM
parent,child,sibling




//parentNode
var listItem=document.querySelector('#items');
//find the parent of ul
// console.log(listItem.parentNode);
// listItem.parentNode.style.backgroundColor='Grey';

//parentElement same as parentNode
console.log(listItem.parentElement);
listItem.parentElement.style.backgroundColor='Grey';

//childNodes(NodeList)  also consider the linebreak we do while coding hence instead of this we can childElement(HTML collection)
//console.log(listItem.childNodes);
console.log(listItem.children);


//firstChild- this also includes any whitespace and new line similar to childNode
console.log(listItem.firstChild);//output text

//so use firstElementChild
console.log(listItem.firstElementChild);//putput will be li

/*
we have lastChild and lastElementChild
*/

/*
now look at sibling


//1st nextSibling 
console.log(listItem.nextSibling);//output text 

console.log(listItem.nextElementSibling);
let titleHeader2=document.querySelector('#tittle-2');
//console.log(titleHeader2.nextElementSibling);//output will be null since there is nothing after that
//previousSibling
console.log(listItem.previousSibling);
//previousSiblingElement

console.log(listItem.previousElementSibling);//h2 tag
*/

/*
Filter delete button

*/


//event on submit button
var myForm=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filterInput=document.getElementById('filter');


//filter event
filterInput.addEventListener('keyup',findItem);
//remove btn 
itemList.addEventListener('click',removeItem);
//additem event
myForm.addEventListener('submit',addItem);


function addItem(e){
    e.preventDefault();

    //get value from input
    const inputVal=document.getElementById('item');
    const description=document.getElementById('description');

    if(inputVal.value=="" || description.value==''){
        const msg=document.querySelector('.msg');
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';
        setTimeout(()=>msg.remove(),2000);
    }else{
         //after getting value add in listitem
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(inputVal.value +"   "+description.value));
    //li.appendChild(document.createTextNode(description.value));

    //also add delete button
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete'; 
    deleteBtn.appendChild(document.createTextNode('X'));


    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    inputVal.value='';
    description.value='';
    }
}


function removeItem(e){

    //only when user click on delete btn it should get delete 
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            //we have to delete that li
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function findItem(e){
    var text=e.target.value.toLowerCase();

    //get list item
    var liItems=document.getElementsByTagName('li');        //this is in HTML COLLECTION 
    console.log(liItems);

    //converted html collection to an arrat
    Array.from(liItems).forEach(function(i){
        var itemName=i.firstChild.textContent.toLowerCase();
/*
The indexOf() method returns the position of the first occurrence of a value in a string.
The indexOf() method returns -1 if the value is not found.
 The indexOf() method is case sensitive.*/
        if(itemName.indexOf(text)!=-1){
            i.style.display='block';

        }
        else{
            i.style.display='none';
        }
    });

}

//functionality of description added