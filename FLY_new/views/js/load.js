

$(document).ready(function(){
    console.log(1);
    //zhuji
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
    let postera11=document.querySelector("#postera11");
    let titlea11=document.querySelector("#titlea11");
    let renqia11=document.querySelector("#renqia11");
    let postera12=document.querySelector("#postera12");
    let titlea12=document.querySelector("#titlea12");
    let renqia12=document.querySelector("#renqia12");
    let postera13=document.querySelector("#postera13");
    let titlea13=document.querySelector("#titlea13");
    let renqia13=document.querySelector("#renqia13");
    let postera14=document.querySelector("#postera14");
    let titlea14=document.querySelector("#titlea14");
    let renqia14=document.querySelector("#renqia14");
    let postera15=document.querySelector("#postera15");
    let titlea15=document.querySelector("#titlea15");
    let renqia15=document.querySelector("#renqia15");
    let postera16=document.querySelector("#postera16");
    let titlea16=document.querySelector("#titlea16");
    let renqia16=document.querySelector("#renqia16");
    let urla11=document.querySelector("#urla11");
    //poke
    let nameb1=document.querySelector("#nameb1");
    let renqib1=document.querySelector("#renqib1");
    let headb1=document.querySelector("#headb1");
    let nameb2=document.querySelector("#nameb2");
    let renqib2=document.querySelector("#renqib2");
    let headb2=document.querySelector("#headb2");
    let nameb3=document.querySelector("#nameb3");
    let renqib3=document.querySelector("#renqib3");
    let headb3=document.querySelector("#headb3");
    let nameb4=document.querySelector("#nameb4");
    let renqib4=document.querySelector("#renqib4+");
    let headb4=document.querySelector("#headb4");
    let posterb11=document.querySelector("#posterb11");
    let titleb11=document.querySelector("#titleb11");
    let renqib11=document.querySelector("#renqib11");
    let posterb12=document.querySelector("#posterb12");
    let titleb12=document.querySelector("#titleb12");
    let renqib12=document.querySelector("#renqib12");
    let posterb13=document.querySelector("#posterb13");
    let titleb13=document.querySelector("#titleb13");
    let renqib13=document.querySelector("#renqib13");
    let posterb14=document.querySelector("#posterb14");
    let titleb14=document.querySelector("#titleb14");
    let renqib14=document.querySelector("#renqib14");
    let posterb15=document.querySelector("#posterb15");
    let titleb15=document.querySelector("#titleb15");
    let renqib15=document.querySelector("#renqib15");
    let posterb16=document.querySelector("#posterb16");
    let titleb16=document.querySelector("#titleb16");
    let renqib16=document.querySelector("#renqib16");

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
                head: datas[i].head,
                title: datas[i].title,
                poster: datas[i].poster,
                url: datas[i].url
            }
        }
        urla11.href=strdatas[0].url;
        console.log(urla11.href);
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
        for(let i=0; i<datas.length; i++) {
            console.log("renqi: "+strdatas[i].renqi);
            console.log("name: "+strdatas[i].name);
            console.log("head: "+strdatas[i].head);
            console.log("poster: "+strdatas[i].poster);
            console.log("title: "+strdatas[i].title);
            console.log("url: "+strdatas[i].url);
        }
        titlea11.innerHTML=strdatas[0].title.toString();
        renqia11.innerText=strdatas[0].name.toString();
        postera11.src=strdatas[0].poster;
        titlea12.innerHTML=strdatas[1].title.toString();
        renqia12.innerText=strdatas[1].name.toString();
        postera12.src=strdatas[1].poster;
        titlea13.innerHTML=strdatas[2].title.toString();
        renqia13.innerText=strdatas[2].name.toString();
        postera13.src=strdatas[2].poster;
        titlea14.innerHTML=strdatas[3].title.toString();
        renqia14.innerText=strdatas[3].name.toString();
        postera14.src=strdatas[3].poster;
        titlea15.innerHTML=strdatas[4].title.toString();
        renqia15.innerText=strdatas[4].name.toString();
        postera15.src=strdatas[4].poster;
        titlea16.innerHTML=strdatas[5].title.toString();
        renqia16.innerText=strdatas[5].name.toString();
        postera16.src=strdatas[5].poster;
    });
    $.get("/indexpoke", function (results, status) {
        console.log(status);
        let str = JSON.stringify(results);
        console.log(str);
        let datas = results.data;
        let strdatas = new Array(6);
        for(let i=0; i<datas.length; i++) {
            strdatas[i] = {
                renqi: datas[i].renqi,
                name: datas[i].name,
                head: datas[i].head,
                title: datas[i].title,
                poster: datas[i].poster,
                url: datas[i].url
            }
        }
        nameb1.innerHTML=strdatas[0].name.toString();
        renqib1.innerHTML=strdatas[0].renqi;
        headb1.src=strdatas[0].head;
        nameb2.innerHTML=strdatas[1].name.toString();
        renqib2.innerHTML=strdatas[1].renqi;
        headb2.src=strdatas[1].head;
        nameb3.innerHTML=strdatas[2].name.toString();
        renqib3.innerHTML=strdatas[2].renqi;
        headb3.src=strdatas[2].head;
        nameb4.innerHTML=strdatas[3].name.toString();
        renqib4.innerHTML=strdatas[3].renqi;
        headb4.src=strdatas[3].head;
        for(let i=0; i<datas.length; i++) {
            console.log("renqi: "+strdatas[i].renqi);
            console.log("name: "+strdatas[i].name);
            console.log("head: "+strdatas[i].head);
            console.log("poster: "+strdatas[i].poster);
            console.log("title: "+strdatas[i].title);
            console.log("url: "+strdatas[i].url);
        }
        titleb11.innerHTML=strdatas[0].title.toString();
        renqib11.innerText=strdatas[0].name.toString();
        posterb11.src=strdatas[0].poster;
        titleb12.innerHTML=strdatas[1].title.toString();
        renqib12.innerText=strdatas[1].name.toString();
        posterb12.src=strdatas[1].poster;
        titleb13.innerHTML=strdatas[2].title.toString();
        renqib13.innerText=strdatas[2].name.toString();
        posterb13.src=strdatas[2].poster;
        titleb14.innerHTML=strdatas[3].title.toString();
        renqib14.innerText=strdatas[3].name.toString();
        posterb14.src=strdatas[3].poster;
        titleb15.innerHTML=strdatas[4].title.toString();
        renqib15.innerText=strdatas[4].name.toString();
        posterb15.src=strdatas[4].poster;
        titleb16.innerHTML=strdatas[5].title.toString();
        renqib16.innerText=strdatas[5].name.toString();
        posterb16.src=strdatas[5].poster;
    });
});