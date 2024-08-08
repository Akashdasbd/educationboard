const gatForm = document.getElementById("creat_student_form");
const mgs =  document.querySelector(".mgs");
const btnClose = document.querySelector(".btn-close");
const student_data_list =document.getElementById("student_data_list");
const addResultForm = document.getElementById("add_results_form");
const show_results_form = document.getElementById("show_results_form");


const getStudents=()=>{
    const data =JSON.parse(localStorage.getItem("eduStudents"));
    let allhtml ="";
    if (data) {
        data.reverse().map((elemet , index)=>{
            allhtml +=`
                                            <tr>
                                                <td>${index+1}</td>
                                                <td>${elemet.name}</td>
                                                <td>${elemet.roll}</td>
                                                <td>${elemet.reg_no}</td>
                                                <td>${elemet.exam}</td>
                                                <td>${elemet.year}</td>
                                                <td>${elemet.board}</td>
                                                <td>${timeAgo(elemet.createdAt)}</td>
                                                <td>
                                                ${elemet.result ? '<button class=" btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#show_results" onclick ="showStudentResult(\''+elemet.id+'\')">Vew Result</button>' : '<button class=" btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#add_results" onclick ="addResult(\''+elemet.id+'\')">Add Result</button>' }

                                                </td>
                                                <td>
                                                    <button class=" btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#show_student" onclick = "showSingleItem('')">
                                                        <i class="fa-regular fa-eye"></i>
                                                    </button>
                                                    <button class=" btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#edit_student" onclick = "editSingleItem('')">
                                                        <i class="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    <button class=" btn btn-sm btn-danger" onclick = "deletSingleItem('')">
                                                        <i class="fa-solid fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
            `
        })
        
        
    }

    student_data_list.innerHTML = allhtml;
}

getStudents();


gatForm.onsubmit = (e)=>{
    e.preventDefault();
    const getFormData = new FormData(e.target);
    const allFormDataGet = Object.fromEntries(getFormData);
    if (!allFormDataGet.name || !allFormDataGet.roll || !allFormDataGet.reg_no || !allFormDataGet.exam || !allFormDataGet.year || !allFormDataGet.board || !allFormDataGet.father_name || !allFormDataGet.mother_name || !allFormDataGet.date_of_birth || !allFormDataGet.institute || !allFormDataGet.group || !allFormDataGet.type) {
        mgs.innerHTML = careatMgs("All fields are required")
    }else{
        let oldData = [];
        if (localStorage.getItem("eduStudents")) {
            oldData = JSON.parse(localStorage.getItem("eduStudents"));
        }
        oldData.push({
            ...allFormDataGet,
            id :generateUniqueId(),
            createdAt : Date.now(),
            updatedAt : null,
            result : null
        });
        localStorage.setItem("eduStudents",JSON.stringify(oldData));
        e.target.reset();
        btnClose.click();
        getStudents();
    }
    
}

const addResult= (id)=>{
    addResultForm.querySelector("input[name=id]").value=id;
}

addResultForm.onsubmit = (e) =>{
    e.preventDefault();
    const formData =  new FormData(e.target);
    const data = Object.fromEntries(formData);
    const students = JSON.parse(localStorage.getItem("eduStudents"));
    const upData = students.map((elemet)=>{
        if (data.id ==elemet.id ) {
            return {
                ...elemet,
                result :{
                    bangla : data.bangla,
                    englis :data.englis,
                    math   :data.math,
                    science : data.science,
                    socal : data.socal 
                }
            }
        }else{
            return elemet;
        }
    });
    localStorage.setItem("eduStudents",JSON.stringify(upData));
    e.target.reset();
    btnClose.click();
    getStudents();
}


const showStudentResult = (id) =>{
    const stduents =  JSON.parse(localStorage.getItem("eduStudents"));
    const viewData = stduents.find((data)=>data.id == id);
    show_results_form.querySelector("input[name=bangla]").value = viewData.result.bangla;
    show_results_form.querySelector("input[name=englis]").value = viewData.result.englis;
    show_results_form.querySelector("input[name=math]").value = viewData.result.math;
    show_results_form.querySelector("input[name=science]").value = viewData.result.science;
    show_results_form.querySelector("input[name=socal]").value = viewData.result.socal;
    show_results_form.querySelector("input[name=id]").value = id;
}


show_results_form.onsubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const oldData = JSON.parse(localStorage.getItem("eduStudents"));
    const upDateData = oldData.map((item)=>{
        if(data.id == item.id){
            return {
                ...item,
                result : {
                    bangla : data.bangla,
                    englis :data.englis,
                    math   :data.math,
                    science : data.science,
                    socal : data.socal 
                }
            }
        }else{
            return item;
        }
    })
    localStorage.setItem("eduStudents",JSON.stringify(upDateData));
    document.querySelector(".myBtnClose").click();
}