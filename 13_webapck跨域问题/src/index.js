
console.log('hello webpack1122222222')


let xhr=new XMLHttpRequest();
xhr.open('GET','/api/test',true)
xhr.onload=function(){
    console.log(111,xhr.response)
}
xhr.send()