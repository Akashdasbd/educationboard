const mart_sheet = document.getElementById("mart_sheet");
const findDataAll = JSON.parse(localStorage.getItem("StudentsfinData"));

const passField = ()=>{
    if (                                    totalGpa({
        bangla : findDataAll.result.bangla,
        englis : findDataAll.result.englis,
        math   : findDataAll.result.math,
        science :findDataAll.result.science,
        socal : findDataAll.result.socal
    }).grad == "F") {
        return "Failed"
    }else{
        return "Passed";
    }
}

if (!findDataAll) {
    window.location.href="/index.html"
}


mart_sheet.innerHTML = `
                <div class="student-result">
                    <h2>SSC/Dekhil/Equivaient Result 2015</h2>
                    <div class="student-result-tabel">
                        <table>
                            <tr>
                                <td>Roll No</td>
                                <td>${findDataAll.roll}</td>
                                <td>Name</td>
                                <td>${findDataAll.name}</td>
                            </tr>                           
                             <tr>
                                <td>Board</td>
                                <td>${findDataAll.board}</td>
                                <td>Father's Name</td>
                                <td>${findDataAll.father_name}</td>
                            </tr>
                            <tr>
                                <td>Group</td>
                                <td>${findDataAll.group}</td>
                                <td>Mother's Name</td>
                                <td>${findDataAll.mother_name}</td>
                            </tr>   
                            <tr>
                                <td>Type</td>
                                <td>${findDataAll.type}</td>
                                <td>Date of Birth</td>
                                <td>${findDataAll.date_of_birth}</td>
                            </tr> 
                            <tr>
                                <td>Result</td>
                                <td>${passField()}</td>
                                <td>Institute</td>
                                <td>${findDataAll.institute}</td>
                            </tr>
                            <tr>
                                <td>GPA</td>
                                <td colspan="3">${
                                    totalGpa({
                                        bangla : findDataAll.result.bangla,
                                        englis : findDataAll.result.englis,
                                        math   : findDataAll.result.math,
                                        science :findDataAll.result.science,
                                        socal : findDataAll.result.socal
                                    }).gpa
                                }</td>
                            </tr>
                        </table>
                    </div>
                    <h2 >Grade Sheet</h2>
                    <div class="student-grade-sheet">
                        <table>
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Subject</th>
                                    <th>Grade</th>
                                    <th>GPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>101</td>
                                    <td>Bangla</td>
                                    <td>${getGradAndGpa(findDataAll.result.bangla).grad}</td>
                                    <td>${getGradAndGpa(findDataAll.result.bangla).gpa}</td>
                                </tr>                                
                                <tr>
                                    <td>102</td>
                                    <td>Englis</td>
                                    <td>${getGradAndGpa(findDataAll.result.englis).grad}</td>
                                    <td>${getGradAndGpa(findDataAll.result.englis).gpa}</td>
                                </tr>
                                <tr>
                                    <td>103</td>
                                    <td>Math</td>
                                    <td>${getGradAndGpa(findDataAll.result.math).grad}</td>
                                    <td>${getGradAndGpa(findDataAll.result.math).gpa}</td>
                                </tr>
                                <tr>
                                    <td>104</td>
                                    <td>Science</td>
                                    <td>${getGradAndGpa(findDataAll.result.science).grad}</td>
                                    <td>${getGradAndGpa(findDataAll.result.science).gpa}</td>
                                </tr>
                                <tr>
                                    <td>105</td>
                                    <td>Socal</td>
                                    <td>${getGradAndGpa(findDataAll.result.socal).grad}</td>
                                    <td>${getGradAndGpa(findDataAll.result.socal).gpa}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="btn_div">
                        <a class="btn_srarch_result" href="#" onclick = "backToHomePage()">Srarch Againe</a>
                        </div>
                    </div>
                </div>
`

const backToHomePage = ()=>{
    localStorage.removeItem("StudentsfinData");
    window.location.href = ("./index.html")
}
