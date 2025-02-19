"""LDMS URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from substation import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.Login),
    path('Home/', views.Home),
    path('Events/', views.Events),
    path('Alarms/', views.Alarms),
    path('Graphs/', views.Graphs),
    path('Reports/', views.Reports,name='Reports'),
    path('Repots_Metering/', views.Repots_Metering),
    path('Reports_SoE/', views.Reports_SoE),
    path('Feeders/', views.Feeders),
    path('RTU_Status/', views.RTU_Status),
    path('Button_event/', views.Button_event),
    path('Settings/', views.Settings),
    path('Authentication/', views.Authentication),

    path('fetch_data/', views.fetch_data, name='fetch_data'),
]
