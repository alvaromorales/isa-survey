from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView

urlpatterns = patterns('',
                       url(r'^$', TemplateView.as_view(template_name='index.html')),
                       url(r'^survey/$', TemplateView.as_view(template_name='survey_index.html')),
                       url(r'^position/$', TemplateView.as_view(template_name='position.html')),
)
