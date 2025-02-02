function calculateGrade(marks){
    let grade;
    if(marks<=90){
        grade="A";
        return grade;
    }else if(mark<=80){
        grade="B";
        return grade;
    }
    else if(marks<=70){
        grade="C";
        return grade;
    }
    else if(marks<=60){
        grade="D";
        return grade;
    }
    else{
        return "fail";
    }
}
console.log(calculateGrade(80));