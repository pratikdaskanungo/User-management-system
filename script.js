let users =[] //array create hela jouthire users list rahiba

let usersContainer = document.getElementById('usersContainer');

let alert = document.getElementById('alert');

function doesUserExist(email){ /// function call in line 22
    let user = users.filter((user)=>{ /// ethi filter use hela email repeat hauchi ki nae janibaku
        return user.email == email;
    } )
    return user.length > 0 ? true : false; /// jadi user array 0 ru upare rahuchi ta value achi 
}

function hideAlert(){ //// call in line 35 and 40
    setTimeout(()=>{
        alert.classList.remove('success' , 'danger');
    },2000)
}

function addUser(){ // onclick function chalila
    let name = document.getElementById("name");
    let email = document.getElementById("email");


    let user ={ //jehetu user ra 2 ta input rahuchi ta gote object create kariba
        name : name.value,
        email : email.value,
    }
    
   let userExist = doesUserExist(email.value); ///thare user email id enter kala pare eta pass kariba au check kariba same email exist karuchi ki nae
   if(userExist == false) {
    users.push(user);// users array re user ra value ku push kariba 
    alert.classList.add('success');
    alert.innerText = "User added successfully";
    hideAlert() //// Alert ta popup hela pare screen re rahijauchi seta jiba paen
   }
   else{
    alert.classList.add('danger');
    alert.innerText = "User already exist";
    hideAlert() //// Alert ta popup hela pare screen re rahijauchi seta jiba paen
   }
  
    renderUsers()//au gote function call heichi good practise to create separate function for separate functionality
}

//renderUsers function re gote div create have jouthire id au password render kariba users nka
function renderUsers(){
    usersContainer.innerHTML = ""; // so basically ethi jou content repeat hauthila gote user 2 thara asuthila habani evertime refresh haba 

   users.forEach((user) => {    //ethi basically ame gote loop chaleile taki janipariba keita users achanti nahale blank space hi generate karuchi
    let div = document.createElement('div');
    let name = document.createElement('p');
    let email = document.createElement('p');

    div.classList.add('user');//ethi basically gote div create hela jahara class hela user
    name.innerText = user.name; // html re show kariba name and email
    email.innerText = user.email;
    usersContainer.appendChild(div);
    div.appendChild(name);
    div.appendChild(email);
   })


}