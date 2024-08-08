const searchForm  = document.getElementById("search_form");
const plz  = document.getElementById("plz");
let plz1 =plzNumber();
let plz2 =plzNumber();
localStorage.setItem("edu_plz",JSON.stringify({"a":plz1 , "b":plz2}));
plz.innerHTML=`${plz1}+${plz2}`
searchForm.onsubmit = (e) =>{
    e.preventDefault();
    const getFormData = new FormData(e.target);
    const formData = Object.fromEntries(getFormData);
    const getPlzData = JSON.parse(localStorage.getItem("edu_plz"));
    const getStudents = JSON.parse(localStorage.getItem("eduStudents"));
    if ((getPlzData.a + getPlzData.b)!==parseInt(formData.sum)) {
        alert("Plz not Match")
    }else{
        const findData = getStudents.find((itam)=>
        itam.exam == formData.examination &&
         itam.year == formData.year &&
          itam.board == formData.board &&
           itam.roll == formData.roll &&
            itam.reg_no == formData.reg_no
        );
        if (findData) {
            localStorage.setItem("StudentsfinData",JSON.stringify(findData));
            window.location.href= ("/result.html")
        }else{
            alert("Not Data Found")
        }
    }
}
