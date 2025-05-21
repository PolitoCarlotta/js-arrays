const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE


// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for(i= teachers.length -1; i>=0; i--){
  reversedTeachers.push(teachers[i])
}
console.log(teachers,reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for(let i=0; i< teachers.length; i++){
  teacher= teachers[i]
  if(teacher.length >=5){
    longNames.push(teacher)
  }
}
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
let teachers2=[]

for( let i=0; i<teachers.length; i++){
  teacher=teachers[i]
  if(teacher !== 'Ed'){
    teachers2.push(teacher)
  }
}
console.log(teachers2)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

const name='Fabio'

const isFabioPresent =teachers.includes(name);
console.log(isFabioPresent)


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;