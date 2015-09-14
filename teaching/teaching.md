---
layout: page
title: Teaching
permalink: /teaching/
rank: 4
---

{% assign lectures = site.lectures | group_by:"date" %}
{% for test in lectures reversed %}
{{test.name}}
:   {% for lecture in test.items %}<a href="{{lecture.url}}">{{lecture.title}}</a><br>{% endfor %}
{% endfor %}



