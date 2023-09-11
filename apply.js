Function.prototype.fakeApply = function (obj, args) {
  obj.cur = this;
  let res = obj.cur(...args);

  return res;
};

let person = {
  name: "Ann",
};

let args = ["hello", "hi"];

function hello(greeting1, greeting2) {
  console.log(`${greeting1},${greeting2}, ${this.name}`);
}

hello.apply(person, args);
