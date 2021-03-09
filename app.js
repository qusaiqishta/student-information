


let studentForm=document.getElementById('studentForm');


let container=document.getElementById('studentTable');
let oneTable=document.createElement('table');
container.appendChild(oneTable);
let tableRow=document.createElement('tr');
oneTable.appendChild(tableRow);
let tableHeader=document.createElement('th');
tableRow.appendChild(tableHeader);
tableHeader.textContent='id';

let tableHeader2=document.createElement('th');
tableRow.appendChild(tableHeader2);
tableHeader2.textContent='Name';

let tableHeader3=document.createElement('th');
tableRow.appendChild(tableHeader3);
tableHeader3.textContent='Email';

let tableHeader4=document.createElement('th');
tableRow.appendChild(tableHeader4);
tableHeader4.textContent='Mobile';

let tableHeader5=document.createElement('th');
tableRow.appendChild(tableHeader5);
tableHeader5.textContent='Age';

let tableHeader6=document.createElement('th');
tableRow.appendChild(tableHeader6);
tableHeader6.textContent='Tuition';








function Student(email,mobileNumber,tuition){
    this.email=email;
    this.mobileNumber=mobileNumber;
    this.tuition=tuition;
    Student.allStudents.push(this);
    settingItems();

}

Student.allStudents=[];

function randomAge(){
    return Math.floor(18+Math.random()*(24-19));
}


function settingItems(){
    let data=JSON.stringify(Student.allStudents);
    localStorage.setItem('student',data);
}

function gettingItems(){
    let string=localStorage.getItem('student');
    let normal=JSON.parse(string);
    if(normal!==null){
        Student.allStudents=normal;
    }
    rendering();
}


function handlSubmit(event){
    event.preventDefault();

    let easier=event.target;
    let email=easier.studentEmail.value;
    let mobileNumber=easier.studentMobileNumber.value
    let tuition=easier.Tuition.value;

    new Student(email,mobileNumber,tuition);

    rendering();

}

function rendering(){
    let total=0;
    
    for(let i=0;i<Student.allStudents.length;i++){
        let addedRow=document.createElement('tr');
        oneTable.appendChild(addedRow);
        let addedId=document.createElement('td');
        addedRow.appendChild(addedId);
        addedId.textContent=i;
        let addedName=document.createElement('td');
        addedRow.appendChild(addedName);
        addedName.textContent=Student.allStudents[i].email.substring(0, Student.allStudents[i].email.indexOf('@'));
        let addedEmail=document.createElement('td')
        addedRow.appendChild(addedEmail);
        addedEmail.textContent=Student.allStudents[i].email;

        let addedmobile=document.createElement('td');
        addedRow.appendChild(addedmobile);
        addedmobile.textContent=Student.allStudents[i].mobileNumber;

        let addedAge=document.createElement('td');
        addedRow.appendChild(addedAge);
        addedAge.textContent=randomAge();

        let addedTuition=document.createElement('td');
        addedRow.appendChild(addedTuition);
        addedTuition.textContent=Student.allStudents[i].tuition;
        total+=Student.allStudents[i].tuition;
       


        

    }
    /*let Total=document.createElement('tr');
        oneTable.appendChild(Total);
        Total.textContent=total;*/
}
     

    studentForm.addEventListener('submit',handlSubmit);
    gettingItems();
