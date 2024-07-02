from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from courses.views import CourseViewSet, home

router = DefaultRouter()
router.register(r'courses', CourseViewSet)

urlpatterns = [
    path('', home, name='home'), 
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]