/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
const ParkingSystem = function (big, medium, small) {
  (this.big = big),
    (this.medium = medium),
    (this.small = small),
    /**
     * @param {number} carType
     * @return {boolean}
     */
    (ParkingSystem.prototype.addCar = function (carType) {
      // Save this in a variable to make it reference parent object.
      let _this = this;
      // Check for carType
      if (carType === 1) {
        if (_this.big >= 1) {
          _this.big -= 1;
          return true;
        } else return false;
      } else if (carType === 2) {
        if (_this.medium >= 1) {
          _this.medium -= 1;
          return true;
        } else return false;
      } else {
        if (_this.small >= 1) {
          _this.small -= 1;
          return true;
        } else return false;
      }
    });
};
