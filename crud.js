
const inputText = document.getElementById('inputText');
const submitButton = document.getElementById('listButton');
const showLists = document.getElementById('showLists');



function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function todolists(){
  
  const textValue = inputText.value;
  if(textValue !== ''){
    
    const createEl = document.createElement('div');
    const createP = document.createElement('p');
    const createButton = document.createElement('button'); 
    const createEdit = document.createElement('button');
    
    
    showLists.append(createEl);
    createEl.append(createP);
    createP.append(textValue);
    
    
    createButton.textContent = 'Delete';
    createButton.setAttribute('id', getRndInteger(100, 300));
    createEl.append(createButton);
    
    createButton.addEventListener('click', function(){
     this.parentElement.remove();
    });
    
    
    createEdit.textContent = "Edit";
    createEdit.setAttribute('id', getRndInteger(100, 300));
    createEl.append(createEdit);
    
    
    createEdit.addEventListener('click', function(){
      const editValue = this.parentElement.querySelector("p").innerText;
      const getValueEdit = prompt('Edit item lists', editValue);
      this.parentElement.querySelector("p").innerHTML = getValueEdit;
    });
    
    
    inputText.value = '';
    
  }

}

submitButton.addEventListener('click', todolists);

