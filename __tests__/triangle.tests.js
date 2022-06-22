import { Triangle, Angles } from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
  test('should return an object that is not a triangle', () => {
    const notTriangle = new Triangle(2, 8, 40);
    expect(notTriangle.checkType()).toEqual('not a triangle');
  });
  test('should return equilateral if triangle object has three sides of same length', () => {
    const triangle = new Triangle(5, 5, 5);
    expect(triangle.checkType()).toEqual('equilateral');
  });
  test('should return scalene triangle if no sides are the same length', () => {
    const triangle = new Triangle(4, 3, 5);
    expect(triangle.checkType()).toEqual('scalene');
  });
  test('should return isosceles if two sides of the triangle are the same length', () => {
    const triangle = new Triangle(5, 5, 6);
    expect(triangle.checkType()).toEqual('isosceles');
  });
});

describe('Angles', () => {
  test('should correctly create an angle object with three angles', () => {
    const triangleAngles = new Angles(60, 60, 60);
    expect(triangleAngles.angle1).toEqual(60);
    expect(triangleAngles.angle2).toEqual(60);
    expect(triangleAngles.angle3).toEqual(60);
    });
  test('should correctly return an object with one angle greater than ninety degrees', () => {
  const triangleAngles = new Angles(100, 50, 30);
  expect(triangleAngles.checkDegrees()).toEqual('obtuse');
  });

});