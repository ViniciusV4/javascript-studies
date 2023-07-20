const classroomOne = ["João", " Ana", " Caio", " Lara", " Marjorie", " Leo"];
console.log(`A ano letivo começou com os seguintes alunos na classe: ${classroomOne}`);

const transferStudents = classroomOne.splice(1,2);
console.log(`Os seguintes alunos foram transferidos: ${transferStudents}`);

classroomOne.push(" Rodrigo");

console.log(`Alunos pertencentes a classe no segundo semestre: ${classroomOne}`);