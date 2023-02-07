//! Encapsulation

class Lesson {
  private grade1: number;
  private grade2: number;

  constructor(_grade1: number, _grade2: number) {
    this.grade1 = _grade1;
    this.grade2 = _grade2;
  }

  GetLessonAverage(): number {
    return (this.grade1 + this.grade2) / 2;
  }

  get LessonGrade1() {
    return this.LessonGrade1;
  }

  get LessonGrade2() {
    return this.LessonGrade2;
  }

  set LessonGrade1(value) {
    if (value > 100) this.LessonGrade1 = 100;
    else if (value < 0) this.LessonGrade1 = 0;
    else this.LessonGrade1 = value;
  }

  set LessonGrade2(value) {
    if (value > 100) this.LessonGrade2 = 100;
    else if (value < 0) this.LessonGrade2 = 0;
    else this.LessonGrade2 = value;
  }
}

let lesson = new Lesson(70, 80);
lesson.LessonGrade1 = 900;
lesson.LessonGrade2 = -540;
lesson.GetLessonAverage();

let result :number = lesson.GetLessonAverage();
console.log(result);