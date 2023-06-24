function parseCount(value) {
    if (isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(value);
}

function validateCount(val) {
    try {
        return parseCount(val)
    } catch (err) {
        return err;
    }

}
class Triangle {
    constructor(a, b, c) {
        debugger;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
        this.a = a,
            this.b = b,
            this.c = c
    }
    get perimeter() {
        return +(this.a + this.b + this.c).toFixed(3);
    }
    get area() {
        //  this.a + this.b + this.c;
        let p = this.perimeter / 2;
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3)
    }
}

function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c)
    } catch(err){
        return {
            get perimeter(){
                return 'Ошибка! Треугольник не существует';
            },
            get area(){
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}