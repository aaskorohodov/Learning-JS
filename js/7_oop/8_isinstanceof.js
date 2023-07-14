class Users {
    constructor(name, old) {
        this.name = name;
        this.old = old;
    }
 
    getName() {
        return this.name;
    }
}

class Admin extends Users {
    constructor(name, old, login, psw) {
        super(name, old);
        this.login = login;
        this.psw = psw;
    }
}

user1 = new Users('Dave', 30);
user2 = new Admin('Stan', 25, 'stan25', '12345');

console.log(user1 instanceof Users);    // true
console.log(user2 instanceof Users);    // true (descendant of Users)


console.log(user1 == Users);            // false
console.log(user2 == Users);            // false


// This works, because class IS a constructor-function itself
console.log(user1.constructor == Users);    // true
console.log(user2.constructor == Users);    // false (does not check, if a descendant)