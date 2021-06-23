const data = {
    alldata: [],
}
alert("hjkl");
const fetch_Data = () => {
    $.ajax({
        url: 'data.json',
        success: (myData) => {
            data.alldata = myData;

            showData();
        }
    });
};

const showData = () => {
    data.alldata.forEach((element) => {
        const div = document.createElement('div');
        div.classList.add('col-xs-12','col-sm-6','col-md-3','px-3');
        const h2 = document.createElement('h2');
        h2.innerText=`${element.title}`;
        const img = document.createElement('img');
        img.classList.add('w-100','border');
        const span=document.createElement('span');
        span.innerText=`${element.description}`
        const divText= document.createElement('div');
        divText.classList.add("bg-light",'border');
        divText.append(h2,span);
        img.src=`${element.img}`;
        h2.onclick = () => {
            if (img.classList.contains("selected")) {
                img.classList.remove("selected");
            }
            else {
                img.classList.add("selected");
            }
        }
        div.append(img,divText);
        $("#content").append(
            div
        )
    });
}
fetch_Data();