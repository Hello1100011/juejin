var items=document.getElementsByClassName('item');
var goPreBtn=document.getElementById('goPre');
var goNextBtn=document.getElementById('goNext');
var index=0;
var clearActive=function(){
    for(var i=0;i<items.length;i++){
        item[i].classname='item';
    }
}
var goIndex=function(){
    clearActive();
    items[index].classname='item active';
}
var goNext=function(){
    index++;
    goIndex();
}
goNextBtn.addEventListener('click',function(){
    goNext();
})