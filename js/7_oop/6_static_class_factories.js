class Users {
    constructor(name, age) {
        this.name   = name;
        this.age    = age;
    }
}


class Admin extends Users {
    constructor(name, old, login, psw) {
        super(name, old);
        this.login = login;
        this.psw = psw;
    }

    // Factory:
    static createAdmin(name, old) {
    	return new this(name, old, "admin", "root");	// 'this' links to the class itself
    }
}

admin = Admin.createAdmin('Stacy', 19);