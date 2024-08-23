const body = document.getElementsByTagName("body")[0];
const btn = document.getElementById("btn");
const textInput = document.getElementById("textInput");
const screenContainer = document.createElement('div');
screenContainer.className = "screenContainer";
const container1 = document.getElementsByClassName("container")[0];
const container2 = document.createElement("div");
const containerCompleted = document.createElement('div');
const headerContainerCompleted = document.createElement('div');
const container3 = document.createElement('div');
const profile = document.createElement('img');
profile.className = "profileIcon";
profile.src = "profile.png";
profile.style.backgroundColor = "#CD5C08";
profile.draggable = false;
headerContainerCompleted.className = "header-container-completed";
headerContainerCompleted.innerText = "Tasks Completed."
containerCompleted.className = "container-completed";
container2.className = "container2";
container3.className = "container3";
// container

function textOutput() {
  const confirmIMG = document.createElement('img');
  confirmIMG.className = "confirmIMG";
  const cancelIMG = document.createElement('img');
  cancelIMG.className = "cancelIMG";
  const editIMG = document.createElement('img');
  editIMG.className = "editIMG";
  const deleteIMG = document.createElement('img');
  deleteIMG.className = "deleteIMG";

  confirmIMG.src = "confirm.png";
  confirmIMG.draggable = false;
  cancelIMG.src = "cancel.png";
  cancelIMG.draggable = false;
  editIMG.src = "edit.png";
  editIMG.draggable = false;
  deleteIMG.src = "delete.png";
  deleteIMG.draggable = false;
  const outputMsg = document.createElement("div");
  outputMsg.className = "outputMsg";
  const buttons = document.createElement('div');
  buttons.className = "buttons"
  const output = document.createElement("div");
  output.className = "output";
  const editInput = document.createElement("input");
  editInput.className = "editInput";
  outputMsg.innerHTML = textInput.value;
 
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  const editBtn = document.createElement("button");
  editBtn.className = "editBtn";
  const Confirm = document.createElement("button");
  Confirm.className = "confirmBtn";
  const cancel = document.createElement("button");
  cancel.className = "cancelBtn";

  buttons.appendChild(editBtn);
  buttons.appendChild(deleteBtn);
  container2.appendChild(output);
  output.appendChild(outputMsg);
  output.appendChild(buttons);
  Confirm.appendChild(confirmIMG);
  cancel.appendChild(cancelIMG);
  deleteBtn.appendChild(deleteIMG);
  editBtn.appendChild(editIMG);
  textInput.value = "";

  outputMsg.addEventListener("click", function () {

    outputMsg.style.pointerEvents = "none";
    output.appendChild(cancel);
    cancel.style.margin = "10px";

    cancel.addEventListener("click", function () {
      output.remove();
    });

    if(confirm("do you want to confirm this task?") == true) {
      output.remove();
      container3.appendChild(output);
      buttons.remove();
    }
  })

  deleteBtn.addEventListener("click", function () {
    output.remove();
  })

  editInput.value = outputMsg.innerHTML
  
  console.log(editInput.value)
  editBtn.addEventListener("click", function () {

    output.appendChild(editInput);
    deleteBtn.remove();
    editBtn.remove();
    output.appendChild(buttons);
    buttons.appendChild(Confirm);
    buttons.appendChild(cancel);
    Confirm.addEventListener("click", function () {
      if(editInput.value == "") {
        editInput.value = outputMsg.innerHTML;
        editInput.remove();
        cancel.remove();
        Confirm.remove();
        buttons.appendChild(editBtn);
        buttons.appendChild(deleteBtn);
      }
      outputMsg.innerHTML = editInput.value;
      cancel.remove();
      Confirm.remove();
      editInput.remove();
      buttons.appendChild(editBtn);
      buttons.appendChild(deleteBtn);
      deleteBtn.appendChild(deleteIMG);
      editBtn.appendChild(editIMG);
    })
    cancel.addEventListener("click", function () {
      cancel.remove();
      Confirm.remove();
      editInput.remove();
      buttons.appendChild(editBtn);
      buttons.appendChild(deleteBtn);
      deleteBtn.appendChild(deleteIMG);
      editBtn.appendChild(editIMG);
    })
    // editInput.value = "";
  })

}

btn.addEventListener("click", function () {
  if (textInput.value === "") {
    alert("Put your task.");
  } else {
    textOutput();
  }
});

// profile.addEventListener("click", function () {
//   const profileContainer = document.createElement('div');
//   profileContainer.className = "profileContainer";
  
//   const email = localStorage.getItem("email");
//   const phoneNumber = localStorage.getItem("phoneNumber");
  
//   const emailElement = document.createElement('p');
//   emailElement.className = "email-box";
//   emailElement.innerHTML = `Email: ${email}`;
  
//   const phoneElement = document.createElement('p');
//   phoneElement.className = "phoneNumber-box";
//   phoneElement.innerHTML = `Phone Number: ${phoneNumber}`;
  
//   profileContainer.appendChild(emailElement);
//   profileContainer.appendChild(phoneElement);

//   document.body.appendChild(profileContainer);

// });

let profileOpen = false;
let profileContainer;

profile.addEventListener("click", function () {

  if (profileOpen) {

    if (profileContainer) {
      document.body.removeChild(profileContainer);
      profileOpen = false;
    }
  } else {

    profileContainer = document.createElement('div');
    profileContainer.className = "profileContainer";
    
    const email = localStorage.getItem("email");
    const phoneNumber = localStorage.getItem("phoneNumber");
    
    const emailElement = document.createElement('p');
    emailElement.className = "email-box";
    emailElement.innerHTML = `Email: ${email}`;
    
    const phoneElement = document.createElement('p');
    phoneElement.className = "phoneNumber-box";
    phoneElement.innerHTML = `Phone Number: ${phoneNumber}`;
    
    profileContainer.appendChild(emailElement);
    profileContainer.appendChild(phoneElement);

    document.body.appendChild(profileContainer);
    profileOpen = true;
  }
});


container1.appendChild(container2);

const date = new Date();
const formatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});
const formattedTime = formatter.format(date);
console.log(formattedTime);

body.appendChild(profile);
body.appendChild(screenContainer);
screenContainer.appendChild(container1);
screenContainer.appendChild(containerCompleted);
containerCompleted.appendChild(headerContainerCompleted);
containerCompleted.appendChild(container3);
