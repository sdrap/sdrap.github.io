---
layout: page
title: CV
permalink: /CV/
rank: 3
---
**Personal Details**

:   [China Academy of Finance Research](http://en.cafr.cn) and [School of Mathematical Sciences](http://www.math.sjtu.edu.cn/)<br>
    Shanghai Jiao Tong University<br>
    800 Dongchuan Road<br>
    Shanghai, 200240 China

:   Mail: sdrapeau@saif.sjtu.edu.cn <br>
    Tel: +86-21-6293-3586

------------------------------------------------------------------------
**Education**

Oct 2006 &mdash; April 2010
:   Doctor in Mathematics at the [Humboldt University Berlin](http://www.hu-berlin.de)<br>
    Thesis: [Risk Preferences and their Robust Representation](http://edoc.hu-berlin.de/dissertationen/drapeau-samuel-2010-04-30/METADATA/abstract.php?id=36888)<br>
    Supervisors: [Hans F&ouml;llmer](http://www.math.hu-berlin.de/~foellmer/) and [Michael Kupper](http://cms.uni-konstanz.de/math/kupper/)<br>
    Member of the IRTG “SMCP” (funded student) and the [Berlin Mathematical School](http://www.berlin-math.de)

Apr 2004 &mdash; May 2006 
:   Diplom Mathematics at the [Humboldt University Berlin](http://www.hu-berlin.de)<br>
     Major: Stochastic and financial mathematics<br>
     Minor: Economics

Sep 1999 &mdash; June 2000 
:   Preparatory Class Agrégation Math, Université de Rennes I, France.


Sep 1998 &mdash; Sep 1999 
:   Maîtrise de Mathématique at Magistère MMMI, Université de Rennes I, France.

Sep 1997 &mdash; Sep 1998 
:   License de Mathématique, Université de Rennes I, France.

Sep 1995 &mdash; Sep 1997 
:   Preparatory School (Advanced Mathematics), Lycée Alain René Lesage,
    Vannes, France.

------------------------------------------------------------------------

**Employment and Academic Positions**

Apr 2015 &mdash; Now
:   Associate Professor &mdash; (Distinguished Researcher Fellow) &mdash; at [Shanghai Jiao Tong University](http://en.sjtu.edu.cn)

Nov 2013 &mdash; Mar 2015
:   Scientific Assistant at the [Technical University Berlin](http://www.tu-berlin.de), Germany.


Oct 2009 &mdash; Oct 2013
:   Scientific Assistant at the [Humboldt University Berlin](www.hu-berlin.de) Germany
    DFG research center Matheon, Project E11 " Beyond Value at Risk: Dynamic Risk Measures and Applications"

Jun 2001 &mdash; Apr 2004
:   IT Manager for the German subsidiary of Demathieu and Bard, Germany.

-----------------------------------------------------------------------

**Teaching** (Since 2013)

{% assign lectures = site.lectures | group_by:"semester" %}
{% for test in lectures reversed %}
{{test.name}}
:   {% for lecture in test.items %}&bull; <a href="{{lecture.url}}">{{lecture.title}}</a><br>{% endfor %}
{% endfor %}

------------------------------------------------------------------------

**Military Service**

Oct 2000 – May 2001
:   Military Service, Brettville sur Odon, France.

------------------------------------------------------------------------

**Stay Abroad**

Apr 2012 &mdash; Jun 2012
:   Visiting Scholar at Bocconi University Milan, Italy.

Sep 2007 &mdash; Jan 2008
:   Visiting PhD Student at the ETH Zürich, Switzerland

------------------------------------------------------------------------

**Publications and Preprints**


{% assign publications = site.data.publications | sort : 'rank' %}

<ol reversed class="citation-abbrvnat" style="counter-reset:section {{publications | size}}; counter-increment:section +1">
{% for publication in publications reversed %}
{% assign articless = site.articles | where: "title", publication.title %}
<li style="counter-increment:section -1">
{% for article in articless %}
    <a href="{{article.url}}"><b>"{{publication.title}}"</b></a>
{% endfor %}<br>
Authors: 
{% for author in publication.author %}
    {% assign tmp = author.family | prepend: ' ' | prepend : author.given %}{% assign url_auth = false %}
        {% for search_author in site.data.authors %}
            {% if tmp == search_author.name and search_author.url != false %}
                {% assign url_auth = search_author.url %}
            {% endif %}{% endfor %}
            {% if url_auth != false %}<a href="{{url_auth}}">{{tmp}}</a>{% else %}{{tmp}}{% endif %}{% if forloop.rindex > 2 %}, {% elsif forloop.rindex == 2 %} and {% endif %}{% endfor %}<br>
Journal: {{publication.container-title}}{% if publication.volume %}, {{publication.volume}}{% if publication.issue %}({{publication.issue}}){% endif %}{% endif %}{% if publication.page %}:{{publication.page}}{% endif %}, {{publication.issued.date-parts}}.
</li>
{% endfor %}
</ol>

------------------------------------------------------------------------

**Thesis**

<ul>
{% for these in site.data.thesis reversed %}
<li>
{% if these.URL %}
<a href="{{these.URL}}" target="_blank"><b>"{{these.title}}"</b><br></a>
{% else %}
<b>"{{these.title}}"</b><br>
{% endif %}
{{these.genre}}, {{these.issued.date-parts}}
</li>
{% endfor %}
</ul>

------------------------------------------------------------------------

**Talks**

<ul>
{% for talk in site.data.talks %}
<li>
{{talk.date | date : "%b %Y"}}: {{talk.occasion}}, {{talk.place}}: <em>"{{talk.title}}"</em>
</li>
{% endfor %}
</ul>
