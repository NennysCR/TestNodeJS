var browse = document.getElementsByClassName('selectFiles')[0];
var fileDialog = document.createElement("INPUT");
fileDialog.setAttribute("type", "file");
fileDialog.setAttribute("multiple", "true");
fileDialog.style.display = "none";
var uploadProgress = document.getElementsByClassName("uploadProgressDetails")[0];
var progress;
setupProgressBar();
browse.addEventListener("click", function(){    
    fileDialog.click();
    
});

fileDialog.addEventListener("change", function(){
    
    processFiles(fileDialog.files);

});

function processFiles(files){
    
    resetProgressBar();
    var request = new XMLHttpRequest();       
    request.upload.addEventListener("progress", showProgress);
    request.open("POST", "/uploadFile");
    var formData = new FormData();
    for(var file = 0; file < files.length; file++){         
        
        formData.append("file" + file, files[file], files[file].name);
        
    } 
    request.send(formData);  
}
function showProgress(evt){   
    
    progress.style.width = (((evt.loaded/evt.total)*100))+ "%";

}
function resetProgressBar(){
    progress.style.width = "0%";
}
function setupProgressBar(){
    var progressBar = document.createElement("DIV");
    progressBar.className = "progressBar";
    uploadProgress.appendChild(progressBar);
    var innerDIV = document.createElement("DIV");
    innerDIV.className = "progress";
    progressBar.appendChild(innerDIV);
    progress = document.getElementsByClassName("progress")[0];
}