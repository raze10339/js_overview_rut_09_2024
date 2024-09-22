const user = {
    name: 'JD',
    age: 44,
    phone: '777-777-7777',
    address: '555 coding st',
    info: {
        location: 'Atlanta area',
        hobbies: ['pickleball', 'fishing'],
    },
    printAge: function () {
        console.log(this.age);
    },
    haveBirthday: function () {
        // Increase the age of the user by one
        this.age++;
        // Print 'Happy Birthday' to the console
        console.log('Happy Birthday!');
    },
    addHobby: function (hobby) {
// need to reference an argument that is passed to addhobby [string of a hobby]
console.log('it works!');
// push the argument(hobby) to the info hobbies array
this.info.hobbies.push(hobby)
    },
    printHobbies: function () {
console.log(this.info.hobbies);
    },
};

UserData.addHobby('tennis');
UserData.addHobby('coding');
UserData.addHobby('golf');
UserData.addHobby('bingo');
UserData.printHobbies();

console.log('parent this', this);

for (let i=0; i< this.info.hobbies.length; i++) {
console.log(this.info.hobbies[i]);


for (let hobby of this.info.hobbies) {
    console.log(hobby);
}
}
//console.log(userData.addhobby),

function test(hobby, age) {
  console.log('hobby');
}
test();

//userData.happyBirthday();
//userData.printAge();



