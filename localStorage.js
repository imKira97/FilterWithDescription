
const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
document.addEventListener('DOMContentLoaded',showUser);
function showUser(){
    Object.keys(localStorage).forEach((k)=>{
        const userDetails=JSON.parse(localStorage.getItem(k));
        toCreateListItem(userDetails);
        

    });

}

function toCreateListItem(userDetails){
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${userDetails.name} : ${userDetails.email}`));

    //for delete
    var deleteBtn=document.createElement('input');
    deleteBtn.id='deleteUser'
    deleteBtn.type='button'
    deleteBtn.value='Delete'
    deleteBtn.className='deleteBtn';
    deleteBtn.style.border='3px solid red';
    deleteBtn.addEventListener('click',function(){
        localStorage.removeItem(userDetails.email);
        li.remove();
    });
    li.appendChild(deleteBtn);

    //for edit 
    var editBtn=document.createElement('input');
    editBtn.id='editUser'
    editBtn.type='button'
    editBtn.value='Edit'
    editBtn.className='editBtn';
    editBtn.style.border='3px solid blue';
    editBtn.addEventListener('click',function(){
            document.getElementById('name').value=userDetails.name;
            document.getElementById('email').value=userDetails.email;
            li.remove();
    });
    li.appendChild(editBtn);


    userList.appendChild(li);






}

function onSubmit(e){
    e.preventDefault();
    //check for input if any is empty show error msg for 3 sec if success add in list item
    if(nameInput.value===''|| emailInput.value===''){
        //add css class of error for msg
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';
        setTimeout(()=>msg.remove(),3000);
    }
    else{
        //here we will create li tag 
        
        //creating user object
        const user={
            email: emailInput.value,
            name: nameInput.value
        }


        localStorage.setItem(emailInput.value,JSON.stringify(user));
        toCreateListItem(user);
        nameInput.value='';
        emailInput.value='';


    }

};

/*
suppose we want to store object  in local storage
const obj1={user:'shiva',email:'shiva@gmail.com',age:21};
localStorage.setItem('user',obj1);
//above will store key as  user and value as [object Object]
//but we want to store proper string so here we can use JSON.stringify()
localStorage.setItem('user',JSON.stringify(obj1));

//also when we try to retrive that we will get JSON object
console.log(localStorage.getItem('user'));
//output will be -{"user":"shiva","email":"shiva@gmail.com","age":21}

//so to get in string 
console.log(JSON.parse(localStorage.getItem('user')));
//here we get in proper format {user: 'shiva', email: 'shiva@gmail.com', age: 21}

*/
