from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', include('hello.urls')),
    url(r'^jqtest/$', 'hello.views.jqtest', name='jqtest'),
    url(r'^rango/', include('rango.urls')),
    url(r'^polls/', include('polls.urls', namespace="polls")),
    url(r'^blog/', include('blog.urls')),
    url(r'^accounts/login/$', 'django.contrib.auth.views.login'),
    url(r'^accounts/logout/$', 'django.contrib.auth.views.logout', {'next_page': '/'}),
]
