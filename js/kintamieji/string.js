/*
STRING - tekstas, simboliu grandinele

String iniciavimo simboliai:
    - ' (vienguba kabute)
    - " (dviguba kabute)

Operatoriai:
+ sujungia string'us
\ (escape) eskeipiname - funkcini simboli paverciame i spausdintina

Savybes:
.length - grazina tekste simboliu kieki (ilgi)
*/

const single = 'Labas rytas, Lietuva!';
console.log(single);

const double = "Labas rytas, Lietuva!";
console.log(double);

// Vienguba (') kabute.
const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);

// Dviguba (") kabute.
const kabute2 = 'Dviguba (") kabute.';

const name = 'Chuck';
const surname = 'Norris';
const fullname = name + ' ' + surname;
console.log(name);
console.log(surname);
console.log(fullname);

// My name is not Chuck Norris, but I like it!
const chuck = 'My name is not ' + name + ' ' + surname + ', but I like it!';
console.log(chuck);

// Vienguba (') ir dviguba (") kabutes.
const kabute12 = "Vienguba (') ir" + ' dviguba (") kabutes.';
console.log(kabute12);

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
const kabute12_3 = "Vienguba (\') ir dviguba (\") kabutes.";
const kabute12_4 = 'Vienguba (\') ir dviguba (\") kabutes.';

console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);
console.log(kabute12_4);

// Back-slash (\) simbolis.
const backSlash1 = 'Back-slash (\\) simbolis.';
const backSlash2 = "Back-slash (\\) simbolis.";
console.log(backSlash1);
console.log(backSlash2);

console.clear();

const empty1 = '';
const empty2 = "";
console.log(empty1.length);
console.log(empty2.length);

const hi = 'Pomidoras';
const hiSize = hi.length;

// Teksto "<TEKSTAS>" ilgis yra <ILGIS> simboliu.
const textSize1 = 'Teksto "' + hi + '" ilgis yra ' + hi.length + ' simboliu.';
const textSize2 = 'Teksto "' + hi + '" ilgis yra ' + hiSize + ' simboliu.';

console.log(textSize1);
console.log(textSize2);
console.log('-----------------');

let textSize3 = '';
console.log(1, textSize3);

textSize3 = textSize3 + 'Teksto "';
console.log(2, textSize3);

textSize3 = textSize3 + hi;
console.log(3, textSize3);

textSize3 = textSize3 + '" ilgis yra ';
console.log(4, textSize3);

textSize3 = textSize3 + hi.length;
console.log(5, textSize3);

textSize3 = textSize3 + ' simboliu.';
console.log(6, textSize3);
