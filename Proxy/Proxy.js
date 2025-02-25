let user = {
    name: "Suraj",
    age: 18,
    password: "123",
};

let userProxy = new Proxy(user, {
    get(target, props) {
        console.log(target); // User Object
        console.log(props); //password
        if (props === "password") throw new Error("Access Denied!");
        return target[props];
    },
});

console.log(userProxy.password);