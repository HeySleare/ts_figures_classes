export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One or more sides of the triangle equals 0, try again');
    }

    const triangleSides = [a, b, c];

    triangleSides.sort((sideA, sideB) => sideB - sideA);

    if (triangleSides[0] >= triangleSides[1] + triangleSides[2]) {
      throw new Error('not possible to construct a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiperimeter = (a + b + c) / 2;

    const areaOfTriangle = Math.sqrt(semiperimeter * (semiperimeter - a)
      * (semiperimeter - b) * (semiperimeter - c));

    return Math.floor(areaOfTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('incorrect radius');
    }
  }

  getArea(): number {
    const areaOfCircle = Math.PI * this.radius ** 2;

    return Math.floor(areaOfCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    protected width: number,
    protected height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('incorrect parameters');
    }
  }

  getArea(): number {
    const areaOfRectangle = this.height * this.width;

    return Math.floor(areaOfRectangle * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
