let myObject={
    name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
}


// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

for (const key in myObject) {
    console.log('key:',key, '| type:  ',typeof myObject[key]);
    
    
}