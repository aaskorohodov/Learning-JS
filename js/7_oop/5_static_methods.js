class Users {
    constructor(name, age) {
        this.name   = name;
        this.age    = age;
    }

    getName() { return this.name; }

    // Static-method example:
    static compareAge(user1, user2) {
        return user1.old == user2.old;
    }
}


let u1 = new Users("John", 19);
let u2 = new Users("Sandy", 19);
console.log(Users.compareAge(u1, u2));



// Static-methods can be inherited:
class Admin extends Users {
    constructor(name, old, login, psw) {
        super(name, old);
        this.login = login;
        this.psw = psw;
    }
}
a1 = new Admin('Lucy', 19, 'lucy_admin', '12345');
console.log(Admin.compareAge(a1, u1));