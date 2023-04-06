function sendAuthJSON() {
    let email = document.querySelector('.email');
    let password = document.querySelector('.password');
    let xhr = new XMLHttpRequest();
    let url = "/index.html";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify({ 
        "email": email.value, 
        "password": password.value 
    });

    xhr.send(data);
}

function sendRegJSON() {
    let email = document.querySelector('.email');
    let password = document.querySelector('.password');
    let names = document.querySelector('.names');
    let city = document.querySelector('.city');
    let vuz = document.querySelector('.vuz');
    let train = document.querySelector('.train');
    let course = document.querySelector('.course');
    let phone = document.querySelector('.phone');
    let inform = document.querySelector('.inform');
    let agree = document.querySelector('.agree');
    let xhr = new XMLHttpRequest();
    let url = "/index.html";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    var data = JSON.stringify({ 
        "email": email.value, 
        "password": password.value, 
        "names": names.value,
        "city": city.value,
        "vuz": vuz.value,
        "train": train.value,
        "course": course.value,
        "phone": phone.value,
        "inform": inform.value,
        "agree": agree.value
    });

    xhr.send(data);
}

function sendFileJSON() {
    let answer = document.querySelector('.answer');
    let file = document.querySelector('.file');
    let xhr = new XMLHttpRequest();
    let url = "/olymptask.html";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    var data = JSON.stringify({ 
        "answer": answer.value, 
        "file": file.value
    });

    xhr.send(data);
}