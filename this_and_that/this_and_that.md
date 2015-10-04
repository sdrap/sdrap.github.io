---
layout: page
title: This and That
permalink: /this_and_that/
rank: 6
---
{% for post in site.posts %}
<div>
    <h3 ><a  href="{{ post.url }}">{{ post.title }}</a></h3>
    <time  datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
    {{ post.excerpt }} 
    {% capture content_words %} 
      {{ post.content | number_of_words }} 
    {% endcapture %} 
    {% capture excerpt_words %} 
      {{ post.excerpt | number_of_words }} 
    {% endcapture %} 
    {% if excerpt_words != content_words %}
    <p><a href="{{ post.url }}">Read more</a>
    </p>
    {% endif %}
</div>
{% endfor %}


