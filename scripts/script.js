let data = [
    { "image": "assets/images/temple.jpg", "header": "Egypt Tangbia", "description": "Lorem ipsum dolor sit amet conssadadadadadadadadadadadadadadadadectetur, adipisicing elit. Magni animi numquam deserunt magnam", "date": "Aug 5, 2013", "comments": "22" },
    { "image": "assets/images/camel.jpg", "header": "Camel", "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni animi numquam deserunt magnam", "date": "Aug 5, 2013", "comments": "22" },
    { "image": "assets/images/ocean.jpg", "header": "Egypt", "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni animi numquam deserunt magnam", "date": "Aug 5, 2013", "comments": "22" },
    { "image": "assets/images/ocean-2.jpg", "header": "dubai Tangbia", "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni animi numquam deserunt magnam", "date": "Aug 5, 2013", "comments": "22" },
    { "image": "assets/images/ocean-3.jpg", "header": "Egypt Title", "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni animi numquam deserunt magnam", "date": "Aug 5, 2013", "comments": "22" },
    { "image": "assets/images/under-ocean.jpg", "header": "Title", "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni animi numquam deserunt magnam", "date": "Aug 5, 2013", "comments": "22" },
]


window.onload = function () {
     


    for (let i = 0; i < data.length; i++) {
        processCards(i, data[i]);
    }

    $(".custom-card").on("click", function() {
        let elementId = $(this).attr("data").split('-')[1];
        openModal(data[parseInt(elementId)]["header"], data[parseInt(elementId)]["description"], data[parseInt(elementId)]["image"]);

    });
    
}


function trunctext(text, limit=120) {
    if (text.length > limit) {
        return text.substr(0,limit) + "...";
    }
    return text;
}

function processCards(index, value) {
    var parent = document.getElementById("parent-row");
    let card = createCard(index, value["image"], value["description"], value["header"], value["date"], value["comments"]);
    let col = document.createElement("div");
    col.className = "col-md-3 p-3";
    col.innerHTML = card;
    parent.appendChild(col);;
}


function createCard(id, img, desc, title, date, comments) {

    var template = `
    <div class="custom-card" data={{data-id}}>
        <img src={img-holder} alt="" class="w-100" style="height: 250px;" />
        <div class="d-flex flex-column py-4 px-4 text-center">
            <h6 class="green-text">{title}</h6>
            <p>{description}
            </p>
            <div class="row custom-card-footer justify-content-between">
                <div class="col-md-4 date">
                    <i class="fa-regular fa-calendar-days"></i>
                    <span>{date}</span>
                </div>
                <div class="col-md-4 comments">
                    <i class="fa-solid fa-comment fa-flip-horizontal"></i>
                    <span>{comments} Comments</span>
                </div>
            </div>
        </div>
    </div>
    `
    let newtemp = template.replace("{{data-id}}", '"card-'+id+'"').replace("{img-holder}", '"'+img+'"').replace("{description}", trunctext(desc, 120)).replace("{title}", title).replace("{date}", date).replace("{comments}", comments);
    
    return newtemp;
}


function openModal(title, desc, img) {
    document.getElementById("custom-modal").style.display = "block";
    document.getElementById("modal-image").src = img;
    document.getElementById("modal-title").innerHTML = title;
    document.getElementById("modal-desc").innerHTML = desc;
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    $(".custom-card").css("pointer-events", "none");
}


function closeModal() {
    document.getElementById("custom-modal").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    document.getElementsByTagName("body")[0].style.pointerEvents = "auto"
    $(".custom-card").css("pointer-events", "auto");
}
