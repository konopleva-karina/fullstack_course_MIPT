import re
from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import mixins
from rest_framework import generics
from .models import *
from .serializers import *


# Create

# class VisitCreate(generics.CreateAPIView):
#     serializer_class = VisitSerializer


class StudentApiView(generics.CreateAPIView, mixins.RetrieveModelMixin):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field = "id"

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)


class StudentRofileView(generics.CreateAPIView, mixins.RetrieveModelMixin):
    queryset = Student.objects.all()
    serializer_class = StudentProfileSerializer
    lookup_field = "id"

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)


class TeacherCreate(generics.CreateAPIView):
    serializer_class = TeacherSerializer


class TeacherProfileView(generics.CreateAPIView, mixins.RetrieveModelMixin):
    queryset = Teacher.objects.all()
    serializer_class = TeacherProfileSerializer
    lookup_field = "id"

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

class allVisitsView(mixins.RetrieveModelMixin, generics.ListAPIView): 
    serializer_class = AllVisitsSerializer

    def get_queryset(self):
        return Visit.objects.filter(student_id__id = self.kwargs["student_id"]).order_by("data")

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

class SubjectCreate(generics.CreateAPIView):
    serializer_class = SubjectSerializer


class SubjectRightsCreate(generics.CreateAPIView):
    serializer_class = SubjectRightsSerializer


class AuthentificationCreate(generics.CreateAPIView):
    serializer_class = AuthentificationSerializer


# List

class StudentsList(generics.ListAPIView):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()


class VisitsList(mixins.ListModelMixin,generics.GenericAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer

    def get(self, request, student_id):
        return self.list(request, student_id=student_id)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


# Get number of visits of a particular student

class VisitsCount(mixins.ListModelMixin,generics.GenericAPIView):
    serializer_class = VisitSerializer

    def get(self, request, student_id):
        count = Visit.objects.filter(student_id=student_id).count()
        return Response(count)

    
class AddVisit(generics.CreateAPIView):
    serializer_class = AddVisitSerializer

    def post(self, request, *args, **kwargs):
        # return super().post(request, *args, **kwargs)
        subject_id = request.data["subject_id"]
        data = request.data["data"]
        student_id = request.data["student_id"]
        teacher_id = request.data["teacher_id"]

        subject = Subject.objects.filter(name=subject_id).first()
        student = Student.objects.filter(fio=student_id).first()
        teacher = Teacher.objects.filter(fio=teacher_id).first()

        new_visit = Visit.objects.create(subject_id=subject, data=data, student_id=student, teacher_id=teacher)
        new_visit.save()
        return Response(data={"new_visit": AddVisitSerializer(new_visit, context={'request': request}).data}, status=200)





