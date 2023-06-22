function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age,
  this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
    if('marks' in this) {this.marks = [...this.marks, ...marks]}
}

Student.prototype.getAverage = function () {
    if('marks' in this && this.marks.length) {
        return this.marks.reduce((acc, current, idx, arr) => acc + current/arr.length, 0)
    } 
    return 0;
}

Student.prototype.exclude = function (reason) {

  delete this.subject;
  delete this.marks;
  this.excluded = reason
}
