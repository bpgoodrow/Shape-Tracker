export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  } else if ((this.side1 === this.side2) && (this.side2 === this.side3) && (this.side3 === this.side1)) {
    return "equilateral";
  } else if ((this.side1 !== this.side2) && (this.side2 !== this.side3) && (this.side1 !== this.side3)) {
    return 'scalene';
  } else if ((this.side1 === this.side2) || (this.side1 === this.side3) || (this.side2 === this.side3)) {
    return 'isosceles';
  }
};

export function Angles(angle1, angle2, angle3) {
  this.angle1 = angle1;
  this.angle2 = angle2;
  this.angle3 = angle3;
}

Angles.prototype.checkDegrees = function() {
  if ((this.angle1 > 90) || (this.angle2 > 90) || (this.angle3 > 90)) {
    return 'obtuse';
  }
}