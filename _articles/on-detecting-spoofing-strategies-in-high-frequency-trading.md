---
layout: page
title: On Detecting Spoofing Strategies in High Frequency Trading
---
{% assign publications = site.data.publications | where: "title","On Detecting Spoofing Strategies in High Frequency Trading" %}

{% for publication in publications %}
Authors
:   {% for author in publication.author %}{% assign tmp = author.family | prepend: ' ' | prepend : author.given  %}{% assign url_auth = false %}{% for search_author in site.data.authors %}{% if tmp == search_author.name and search_author.url != false %}{% assign url_auth = search_author.url %}{% endif %}{% endfor %}{% if url_auth != false %}<a href="{{url_auth}}">{{tmp}}</a>{% else %}{{tmp}}{% endif %}{% if forloop.rindex > 2 %}, {% elsif forloop.rindex == 2 %} and {% endif %}{% endfor %}

Date
:   {{publication.issued.date-parts}}

Journal
:   {{publication.container-title}}{% if publication.volume %}, {{publication.volume}}{% if publication.issue %}({{publication.issue}}){% endif %}{% endif %}{% if publication.page %}:{{publication.page}}{% endif %}

Abstract
:   {{publication.abstract}}

Keywords
:   {{publication.keywords | join: ', '}}

Download
:   <a href="{{publication.URL_Open}}" target="_blank"> pdf (open science)</a>{% if publication.URL %}<br><a href="{{publication.URL}}" target="_blank">journal link (usually closed science)</a>{% endif %}

{% endfor %}
