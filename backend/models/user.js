class User{
    #id
    #username
    #password
    #role
    
    constructor(id, username, password, role) {
        this.#id = id;
        this.#username = username;
        this.#password = password;
        this.role = role;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get username() {
        return this.#username;
    }

    set username(username) {
        this.#username = username;
    }

    get password() {
        return this.#password;
    }

    set password(password) {
        this.#password = password;
    }

    get role() {
        return this.#role;
    }

    set role(role) {
        this.#role = role;
    }



}

export default User;