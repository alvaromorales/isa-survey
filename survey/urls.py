from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView

urlpatterns = patterns('',
                       url(r'^$', TemplateView.as_view(template_name='index.html')),
                       url(r'^survey/$', TemplateView.as_view(template_name='survey_index.html')),
                       url(r'^survey/resources$', TemplateView.as_view(template_name='section_resources.html')),
                       url(r'^survey/health$', TemplateView.as_view(template_name='section_health.html')),
                       url(r'^survey/international$', TemplateView.as_view(template_name='section_international.html')),
                       url(r'^survey/finances$', TemplateView.as_view(template_name='section_finances.html')),
                       url(r'^survey/social$', TemplateView.as_view(template_name='section_social.html')),
                       url(r'^survey/academic$', TemplateView.as_view(template_name='section_academic.html')),
                       url(r'^survey/iso$', TemplateView.as_view(template_name='section_iso.html')),
                       url(r'^survey/demographics$', TemplateView.as_view(template_name='section_demographics.html')),
                       url(r'^position/$', TemplateView.as_view(template_name='position.html')),
                       url(r'^initiatives/$', TemplateView.as_view(template_name='initiatives.html')),
)
