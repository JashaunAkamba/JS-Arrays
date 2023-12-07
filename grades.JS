document
    .querySelector('form')
    .addEventListener('submit', setGrade)

let grades = [];

function setGrade(e) {
    e.preventDefault();
    let grade = document.querySelector('#grade').value
    let name = document.querySelector('#name').value
    grades.push(grade);
    console.log(grades)
    printGrades();
}

function printGrades() {
    let o = document.querySelector('#output');
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i].grade;
    }
    let avg = sume / grades.length;
    o.innerText = avg;
}