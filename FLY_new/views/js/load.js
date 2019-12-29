function Result ({data={}}){
    this.data=data;
}

$(document).ready(function(){
    console.log(1);
    let name1=document.querySelector("#name1");
    let renqi1=document.querySelector("#renqi1");
    let head1=document.querySelector("#head1");
    let name2=document.querySelector("#name2");
    let renqi2=document.querySelector("#renqi2");
    let head2=document.querySelector("#head2");
    let name3=document.querySelector("#name3");
    let renqi3=document.querySelector("#renqi3");
    let head3=document.querySelector("#head3");
    let name4=document.querySelector("#name4");
    let renqi4=document.querySelector("#renqi4");
    let head4=document.querySelector("#head4");

    $.get("/index", function (results, status) {
        console.log(status);
        let str = JSON.stringify(results);
        console.log(str);
        let datas = results.data;
        let strdatas = new Array(6);
        for(let i=0; i<datas.length; i++) {
            strdatas[i] = {
                renqi: datas[i].renqi,
                name: datas[i].name,
                head: datas[i].head
            }
        }
        for(let i=0; i<datas.length; i++) {
            console.log("renqi: "+strdatas[i].renqi);
            console.log("name: "+strdatas[i].name);
            console.log("head: "+strdatas[i].head);
        }
        name1.innerHTML=strdatas[0].name.toString();
        renqi1.innerHTML=strdatas[0].renqi;
        head1.src=strdatas[0].head;
        name2.innerHTML=strdatas[1].name.toString();
        renqi2.innerHTML=strdatas[1].renqi;
        head2.src=strdatas[1].head;
        name3.innerHTML=strdatas[2].name.toString();
        renqi3.innerHTML=strdatas[2].renqi;
        head3.src=strdatas[2].head;
        name4.innerHTML=strdatas[3].name.toString();
        renqi4.innerHTML=strdatas[3].renqi;
        head4.src=strdatas[3].head;

    })

});