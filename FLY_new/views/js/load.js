function Result ({data={}}){
    this.data=data;
}

$(document).ready(function(){
    console.log(1);
    let name1=document.querySelector("#name1");
    let renqi1=document.querySelector("#renqi1");
    let head1=document.querySelector("#head1");

    $.get("/index", function (results, status) {
        console.log(status);
        let str = JSON.stringify(results);
        console.log(str);
        let datas = results.data;
        let strdatas = new Array(6);
        for(let i=0; i<datas.length; i++) {
            strdatas[i] = {
                renqi: JSON.stringify(datas[i].renqi),
                name: JSON.stringify(datas[i].name),
                head: JSON.stringify(datas[i].head)
            }
        }
        for(let i=0; i<datas.length; i++) {
            console.log("renqi: "+strdatas[i].renqi);
            console.log("name: "+strdatas[i].name);
            console.log("head: "+strdatas[i].head);
        }

        console.log(head1.src);
        head1.src = "";
        console.log(head1.src);

        name1.innerHTML=strdatas[0].name.toString();
        renqi1.innerHTML=strdatas[0].renqi;
        head1.src=strdatas[0].head;

        console.log(head1.src);

    })

});