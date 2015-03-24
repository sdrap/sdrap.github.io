---
layout: page
title: Research
permalink: /research/
---

## Publications and Preprints

{% assign publications = site.data.publications | sort : 'rank' %}

<ol reversed>
{% for publication in publications reversed %}
<li>
<a href="{{publication.URL_Open}}" target="_blank"><em>"{{publication.title}}"</em></a><br>  
{% for author in publication.author %}
{% assign tmp = author.family | prepend: ' ' | prepend : author.given  %}
{% assign url_auth = false %}
{% for search_author in site.data.authors %}{% if tmp == search_author.name and search_author.url != false %}{% assign url_auth = search_author.url %}{% endif %}{% endfor %}
{% if url_auth != false %}
<a href="{{url_auth}}">{{tmp}}</a>
{% else %}
{{tmp}}
{% endif %}
{% if forloop.rindex > 2 %},{% elsif forloop.rindex == 2 %} and {% endif %} {% endfor %}
<br>
{{publication.container-title}}, {{publication.issued.date-parts}},
<a href="{{publication.URL_Open}}" target="_blank"> pdf (open)</a>
{% if publication.URL %}
, and <a href="{{publication.URL}}" target="_blank">Journal Link</a>{% endif %}
</li>
{% endfor %}
</ol>

## Thesis
<ul>
{% for these in site.data.thesis reversed %}
<li>
{% if these.URL %}
<a href="{{these.URL}}" target="_blank"><em>"{{these.title}}"</em><br></a>
{% else %}
<em>"{{these.title}}"</em><br>
{% endif %}
{{these.genre}}, {{these.issued.date-parts}}
</li>
{% endfor %}
</ul>

## Talks

<ul>
{% for talk in site.data.talks %}
<li>
{{talk.date | date : "%b %Y"}}: {{talk.occasion}}, {{talk.place}}: <em>"{{talk.title}}"</em>
</li>
{% endfor %}
</ul>