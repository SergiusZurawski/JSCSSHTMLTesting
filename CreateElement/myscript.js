function ShowInput(d)
{
    var newDiv = document.createElement('div');
    newDiv.innerHTML="<input type='text' id='newInputBox'>";
    document.getElementById(d).appendChild(newDiv);
}
