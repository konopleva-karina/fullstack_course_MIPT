from django.urls import path
from .views import *

urlpatterns = [
    path("get_students/", StudentsList.as_view()),
    path("get_visits/<int:student_id>", VisitsList.as_view()),
    path("get_visits_count/<int:student_id>", VisitsCount.as_view()),
    path("student/<int:id>", StudentApiView.as_view()),
    path("student_profile/<int:id>", StudentRofileView.as_view()),
    path("teacher_profile/<int:id>", TeacherProfileView.as_view()),
    path("student_visits/<int:student_id>", allVisitsView.as_view()),
    path("add_visit", AddVisit.as_view()),
]
