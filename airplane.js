const airplane = {
  planeMark: "",
  init: function (name) {
    this.planeMark = name;
  },

  isFlying: false,

  takeOff: function () {
    if (!this.isFlying) {
      this.isFlying = true;
    }
  },

  land: function () {
    if (this.isFlying) {
      this.isFlying = false;
    }
  },
};

airplane.init("Boeing 747");
airplane.takeOff();
airplane.takeOff();
airplane.land();
airplane.takeOff();

console.log(airplane.isFlying);
