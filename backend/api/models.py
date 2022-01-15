from django.db import models
from django.db.models.deletion import CASCADE


class Subject(models.Model):
    name = models.CharField(max_length=50)
    visits2pass = models.IntegerField()

    def __str__(self) -> str:
        return self.name


class Student(models.Model):
    fio = models.CharField(max_length=100)
    subject_id = models.ForeignKey(Subject, related_name="students_subject", on_delete=CASCADE)
    group = models.CharField(max_length=9)
    phone = models.CharField(max_length=20)
    mail = models.EmailField()

    def __str__(self) -> str:
        return self.fio


class Teacher(models.Model):
    fio = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    mail = models.EmailField()

    def __str__(self) -> str:
        return self.fio


class Visit(models.Model):
    subject_id = models.ForeignKey(Subject, related_name="visiting_by_subject", on_delete=CASCADE)
    data = models.DateTimeField()
    student_id = models.ForeignKey(Student, related_name="student_who_attended", on_delete=CASCADE)
    teacher_id = models.ForeignKey(Teacher, related_name="teacher_who_set", on_delete=CASCADE)


class SubjectRights(models.Model):
    teacher_id = models.ForeignKey(Teacher, related_name="teacher_having_rights", on_delete=CASCADE)
    subject_id = models.ForeignKey(Subject, related_name="by_which_subject", on_delete=CASCADE)


class Authentification(models.Model):
    user_id = models.CharField(max_length=100, primary_key=True)
    login = models.CharField(max_length=100)
    password = models.CharField(max_length=100)






