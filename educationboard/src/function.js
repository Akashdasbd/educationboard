const careatMgs = (mgs , type = "danger")=>{
    return `<p class=" alert alert-${type} d-flex justify-content-between">${mgs}<button id="mgs_close" class=" btn-close" data-bs-dismiss="alert"></button></p>`
}

function generateUniqueId() {
    const timestamp = Math.floor(Date.now() / 1000).toString(16); // 4-byte timestamp
    const randomValue = Math.floor(Math.random() * 0xFFFFFF).toString(16); // 5-byte random value
    const counter = Math.floor(Math.random() * 0xFFFFFF).toString(16); // 3-byte counter

    return (
        timestamp.padStart(8, '0') +
        randomValue.padStart(10, '0') +
        counter.padStart(6, '0')
    );
}



// time ago funtions

function timeAgo(timestamp) {
    const now = new Date();
    const seconds = Math.floor((now - timestamp) / 1000);

    if (seconds < 5) {
        return 'just now';
    }
    
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
}


function plzNumber (){
    return Math.floor(Math.random()*9)+1;
}

const getGradAndGpa = (mark)=>{
    let grad;
    let gpa;
    if (mark>=0 && mark < 33) {
        grad = "F",
        gpa = 0
    }else if(mark >=33 && mark < 40){
        grad = "D",
        gpa = 1
    }else if(mark >=40 && mark < 50){
        grad = "C",
        gpa = 2
    }else if(mark >= 50 && mark < 60){
        grad = "B",
        gpa = 3
    }else if(mark >= 60 && mark < 70){
        grad = "A-",
        gpa = 3.5
    }else if(mark >=70 && mark<80){
        grad = "A",
        gpa = 4
    }else if(mark >=80 && mark<= 100){
        grad = "A+",
        gpa = 5
    }else{
        grad= "invalid",
        gpa ="invalid"
    }
    return{
        grad : grad,
        gpa : gpa
    }
}

const totalGpa = (mark)=>{
    const{bangla,englis,math,science,socal} = mark;
    const totlaAvg = (
        (
            getGradAndGpa(bangla).gpa +
            getGradAndGpa(englis).gpa +
            getGradAndGpa(math).gpa+
            getGradAndGpa(science).gpa+
            getGradAndGpa(socal).gpa
        )/5
    ).toFixed(2);

    if (bangla>=33 && englis>=33 && math >= 33 && science >= 33 && socal >=33) {
        if (totlaAvg>= 0 && totlaAvg <1) {
            return {
                grad : "F",
                gpa : totlaAvg
            }
        }else if(totlaAvg>= 1 && totlaAvg <2){
            return {
                grad : "D",
                gpa : totlaAvg
            }
        }else if(totlaAvg>= 2 && totlaAvg <3){
            return {
                grad : "C",
                gpa : totlaAvg
            }
        }else if(totlaAvg>= 3 && totlaAvg <3.5){
            return {
                grad : "B",
                gpa : totlaAvg
            }
        }else if(totlaAvg>= 3.5 && totlaAvg <4){
            return {
                grad : "A-",
                gpa : totlaAvg
            }
        }else if(totlaAvg>= 4 && totlaAvg <5){
            return {
                grad : "A",
                gpa : totlaAvg
            }
        }else if(totlaAvg >=5){
            return {
                grad : "A+",
                gpa : totlaAvg
            }
        }
    }else{
        return{
            grad : "F",
            gpa : 0
        }
    }
}