from django.db.models import fields, manager
from rest_framework import serializers
from .models import *


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ["name"]


class StudentSerializer(serializers.ModelSerializer):
    visits_count = serializers.IntegerField(source="student_who_attended.count")

    class Meta:
        model = Student
        fields = ["fio", "subject_id", "group", "phone", "mail", "visits_count"]


class StudentProfileSerializer(serializers.ModelSerializer):
    subject_name = serializers.CharField(source="subject_id.name")

    class Meta:
        model = Student
        fields = ["fio",  "group", "subject_name"]


class AllVisitsSerializer(serializers.ModelSerializer):
    teacher_name = serializers.CharField(source="teacher_id.fio")
    teacher_phone = serializers.CharField(source="teacher_id.phone")
    teacher_mail = serializers.CharField(source="teacher_id.mail")

    class Meta:
        model = Visit
        fields = ["student_id", "data", "teacher_name", "teacher_phone", "teacher_mail"]


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ["fio", "phone", "mail"]


class TeacherProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Teacher
        fields = ["fio"]


class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visit
        fields = ["subject_id", "data", "student_id", "teacher_id"]


class SubjectRightsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubjectRights
        fields = ["teacher_id", "subject_id"]


class AuthentificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Authentification
        fields = ["user_id", "login", "password"]


class AddVisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visit
        fields = "__all__"