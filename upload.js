function uploadImage(){
    let imageFile = document.getElementById('imageFile').files[0];
    let showImage =  document.getElementById('showImage');
    if(imageFile){
        let reader = new FileReader();
            reader.onload = function(e){
            let imageUrl = e.target.result;
            let imgDiv = document.createElement('div');
            let imgElement = document.createElement('img');
            imgElement.src =imageUrl;
            imgElement.width = 100;
            imgElement.height = 100;

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'x';
            deleteBtn.onclick = function (){
                showImage.removeChild(imgDiv);
            }
            
            imgDiv.appendChild(imgElement);
            imgDiv.appendChild(deleteBtn);

            showImage.appendChild(imgDiv);
        
    };
    reader.readAsDataURL(imageFile);
        }
        
    
}