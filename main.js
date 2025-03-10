// String , Number , Boolean ,  Object , Array 
// String - ตัวอักษร
/*
let firstname = 'John';
const idcard = '110370';
// Number - ตัวเลข

let age = 30;
let height = 180.5;

//Boolean - ค่าที่เป็นจริงหรือเท็จ
let isSingle = true;
*/

/*
firstname = 'Jane';
idcard = '110370';  
age = 25;
console.log('Name:', firstname, 'Age:', age, 'ID:', idcard);
*/

/* //Operator
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ (MOD)
*/ 

/*
let number1 = '5'
let number2 = '5'

let result = number1 + number2;
console.log(result);
*/


/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าหรือเท่ากับ
<= น้อยกว่าหรือเท่ากับ
*/ 

/*
let number1 = 2
let number2 = 2

//if - else condition

if (number1 < number2) {
    console.log('pat');
} else if (number1 > number2) {
    console.log('art');
} else {
    console.log('frame');
}
*/



/*Grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D
*/


/*
let score = prompt('Enter your score: '); //prompt: เป็นฟังก์ชันใน JavaScript ที่แสดงกล่องข้อความ (dialog box) ให้ผู้ใช้งานกรอกข้อมูล
console.log('You have score', score);

if (score >=80) { //false
    console.log("Grade A");
} else if (score >=70) { //false
    console.log("Grade B");
} else if (score >=60) { //true
    console.log("Grade C");
} else if (score >=50) { 
    console.log("Grade D");
} else {
    console.log("Grade F");
}
*/

/*
&& และ
|| หรือ
! นิเสธ ไม่
*/

/*
let number1 = 2
let number2 = 8
let condition = !(number1 >= 3 || number2 >= 10)
console.log('result of condition',condition);
*/

/*
let age = 25
let gender = 'male'
if (age >= 20 && gender == 'male') {
    console.log('You are male adult');
} else {
    console.log('You are so cute');    
}
*/

/*
let number = 20
if (number % 2 == 0) {
    console.log('your number is even');
}
*/

/*
while 
for
*/

/*
let counter = 0;

//console.log('while');

while (counter < 10) { //true
    console.log('Hello');
    counter = counter + 1;
    counter += 1;
    counter++;
}
*/

/*
for (let counter = 0; counter < 10; counter = counter + 1) {
    console.log('Hello');
}
*/


/*
array
*/

/*
let age1 =18;
let age2 =19;
let age3 =20;
console.log(age1,age2,age3);
*/


/*
let ages = [18,19,20];
console.log('age is',ages[2]);
console.log('age is',ages);
*/

/*
//1 แทนที่
ages = [21,22,23];
console.log(' new age is',ages);

//2 ต่อ array
ages.push(24); //เพิ่มข้อมูลใน array
console.log(' age list ',ages);

ages.pop()
console.log(' pop age list ',ages);
*/

/*
let ages = [20,18,19];
console.log('age is',ages);
ages.sort(); //เรียงข้อมูลจากน้อยไปมาก
console.log('age is',ages);
*/


/*
let name_list = ['John','Jane','Joe'];
name_list.push('Jame');
console.log('name_list is',name_list.length);
console.log('name_list is',name_list[0]);
console.log('name_list is',name_list[1]);
console.log('name_list is',name_list[2]);
console.log('name_list is',name_list[3]);

for (let index = 0; index < name_list.length; index++) { //index คือ ตัวแปรที่ใช้สำหรับเก็บตำแหน่งของสมาชิก (หรือค่า) ในอาเรย์หรือข้อมูล
    console.log('name is',name_list[index]);
}
*/


/*
object //เป็นข้อมูลที่เก็บข้อมูลหลายๆอย่างไว้ในตัวแปรเดียว
*/

/*
let student = [{
 age : 30,
 name : 'John',
 grade : 'A'
},{
    age : 25,
    name : 'Jane',
    grade : 'B'
},{
    age : 20,
    name : 'Jam',
    grade : 'C'
}];
student.push({
    age : 40,
    name : 'Joy',
    grade : 'F'
   });
student.pop();
console.log(student);
for(let index =0 ; index < student.length; index++) {
    console.log('Student number',index + 1);
    console.log(student[index].name);
    console.log(student[index].age);
    console.log(student[index].grade);
}
*/




/*
console.log('age',student.age);
console.log('name',student.name);
console.log('grade',student.grade);
*/

/*
object + array
*/

/*
let score1 = 80
let score2 = 60
let grade = ''
// ประกาศ function ชื่อ calculateGrade รับ parameter ชื่อ score เป็น parameter คือ ตัวแปรที่ถูกกำหนดในฟังก์ชันหรือเมธอดเพื่อใช้รับค่าเมื่อฟังก์ชันนั้นถูกเรียกใช้งาน
function calculateGrade  (score)  {
    if (score >=80) {
        grade = 'A'
    } else if (score >=70) {
        grade = 'B'
    } else if (score >=60) {
        grade = 'C'
    } else if (score >=50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade;
}

let grade1 = calculateGrade(score1);
let grade2 = calculateGrade(score2);
console.log('grade1:',grade1);
console.log('grade2:',grade2);
*/



/*
let score = [10,20,30,40,50];

for (let index = 0; index < score.length; index++) {
    console.log(score[index]);
}

score.forEach((s) => { //ใช้วนลูปเพื่อประมวลผลค่าทุกตัวในอาร์เรย์โดยไม่เปลี่ยนอาร์เรย์เดิม
    console.log('score',s);
});

//map , filter 
score=score.map((s) => { //ใช้สร้างอาร์เรย์ใหม่จากอาร์เรย์เดิม โดยฟังก์ชันภายใน map จะคืนค่าที่เปลี่ยนแปลงแล้วกลับไปสร้างสมาชิกใหม่ในอาร์เรย์ใหม่
    return s * 2;
})

score.forEach((s) => {
    console.log('new score',s);
});
*/


/*
let score = [10, 20, 30, 40];
let newScore = score.filter(s => s >= 30);

console.log('newScore:', newScore);
newScore.forEach(ns => console.log('new score:', ns));



/*
let score = [10,20,30,40];
let newScore = []

for (let index = 0; index < score.length; index++) {
    if (score[index] >= 30) {
        newScore.push(score[index]);
    }
}
console.log('newScore:',newScore);

newScore.forEach((ns) => {
    console.log('new score:',ns);
});
*/


/*
object function
*/

/*
let students = [
    {
        name: 'John',
        score: 90,
        grade: 'A'
    },{
        name: 'Jane',
        score: 95,
        grade: 'B'
    },
]

let student = students.find((s) => {
    if (s.name == 'John') {
        return true;
    }
});


let doublescore = students.map((s) => {
    s.score = s.score * 2;
    return s
});

console.log('student',student);
console.log('double score',doublescore);
*/


/*
let number1 = 10;
let number2 = 20;

console.log(number1 == number2);
*/