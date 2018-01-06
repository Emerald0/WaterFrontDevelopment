var input=document.getElementsByClassName('input');
function check(){
    for( var i=0; i<input.length-1;i++){
        if(input[i].value==''){
            alert('Please refill the required area');
            for(var j=0;j<input.length-1;j++){
                input[j].value='';
            }
            return;
        }
    }
    alert('Successfully Submitted!');
}