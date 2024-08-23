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
    if(confirm("do you want to confirm this task?") == true) {
      output.remove();
      container3.appendChild(output);
      buttons.remove();
    }
  })

  deleteBtn.addEventListener("click", function () {
    output.remove();
  })

  editBtn.addEventListener("click", function () {
    output.appendChild(editInput);
    deleteBtn.remove();
    editBtn.remove();
    output.appendChild(buttons);
    buttons.appendChild(Confirm);
    buttons.appendChild(cancel);
    Confirm.addEventListener("click", function () {
      if(editInput == "") {
        // if the editinput is empty make the outputmsg innerhtml to the same msg in the outputmsg
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
    editInput.value = "";
  })

}

btn.addEventListener("click", function () {
  if (textInput.value === "") {
    alert("Put your task.");
  } else {
    textOutput();
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

body.appendChild(screenContainer);
screenContainer.appendChild(container1);
screenContainer.appendChild(containerCompleted);
containerCompleted.appendChild(headerContainerCompleted);
containerCompleted.appendChild(container3);