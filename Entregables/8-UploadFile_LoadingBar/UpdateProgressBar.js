//Variables iniciales
var browse = document.getElementsByClassName('fu_uploader')[0];
//var browse =window.document.getElementById('btnSubir');
var fileDialog = document.getElementById('fu_uploader');
var uploadProgress = document.getElementsById("uploadProgressDetails");
var progress;
var lblProgress = document.getElementsById("lblProgress");
alert("va por aca");
//Estado incial de la barra de progreso
setupProgressBar();
//Agrega los listeners
//se agrega el evento onclick al boton de subir archivo
browse.addEventListener("click", function(){
  alert("va por aca2");
    fileDialog.click();
});
fileDialog.addEventListener("change", function(){
  alert("va por aca3");
    processFiles(fileDialog.files);
});
alert("va por aca4");
function processFiles(files){
    resetProgressBar();
    alert("1");
    lblProgress.innerHTML = "0%";
    var request = new XMLHttpRequest();
    alert("2");
    //request.upload.addEventListener("progress", showProgress);
    alert(request.upload);
    request.upload.addListener('progress', showProgress);
    alert("3");
    request.open("POST", "/uploadFile");
    alert("4");
    var formData = new FormData();
    for(var file = 0; file < files.length; file++){
      console.log("File " + file + " - name " + files[file].name + "..");
      formData.append("file" + file, files[file], files[file].name);
    }
    request.send(formData);
}
alert("va por aca5");
function resetProgressBar(){
    progress.style.width = "0%";
}

function showProgress(evt){
    progress.style.width = (((evt.loaded/evt.total)*100))+ "%";
    lblProgress.innerHTML = (((evt.loaded/evt.total)*100))+ "%";;
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
