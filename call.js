Function.prototype.fakeCall = function (obj, ...args) {
  obj.curr = this;
  let res = obj.curr(...args);

  return res;
};

let person = {
  name: "Ann",
};

function hello(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

hello.fakeCall(person, "hello");
