---
layout: page
title: Teaching
permalink: /teaching/
rank: 4
---

## Lecture notes

I recently experimented with lecture notes online using [mkdocs material](https://squidfunk.github.io/mkdocs-material/).
Those are work in progress, available publicly on github for forking, correcting, pulling requests, as well as the template I am using.

The following lecture notes are available:

* [**Advanced Scientific Programming**]({{site.url}}/ASP_Lecture/)

    [source code](https://github.com/sdrap/ASP_Lecture)
    
    *It is rather an introduction to scientific programming for mathematicians*.
* [**Financial Mathematics**]({{site.url}}/FM_Lecture/)

    [source code](https://github.com/sdrap/FM_Lecture)

* [**Stochastic**]({{site.url}}/SP_Lecture/) 

    [source code](https://github.com/sdrap/SP_Lecture)

    *Still in the process of writing chapters 5 to 12 during this semester.*


-----



{% assign lectures = site.lectures | group_by:"semester" %}
{% for test in lectures reversed %}
{{test.name}}
:   {% for lecture in test.items %}&bull; <a href="{{lecture.url}}">{{lecture.title}}</a><br>{% endfor %}
{% endfor %}



