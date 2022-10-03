// 배열
var members = ['kane', 'son', 'dejan'];
console.log(members[1]); //son
var i = 0;
while(i < members.length){
    console.log('array loop', members[i]);
    i = i + 1;
}

// 객체
var roles = {
    'tottenham' : 'conte',
    'mancity' : 'pep',
    'arsenal' : 'arteta'
};

console.log(roles.tottenham); //son
console.log(roles['tottenham']);

for(var name in roles){
    console.log('object => ', name, 'value => ', roles[name]);
}