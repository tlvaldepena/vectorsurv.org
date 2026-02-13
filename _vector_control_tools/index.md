---
title: Vector Control Tools
permalink: /vector_control_tools/
---

<div class="wrap-outer">
  <h1>Tools for vector control</h1>
  <p>
    There are many tools available that support the vector control community. Here are a few that you may be interested in.
  </p>

<div class="gallery">
{% for tool in site.data.vector_control_tools %}
  <a class="gallery-item" href="{{ tool.url }}">
    {% if tool.image %}
      <div class="gallery-item-image">
        <img src="{{ site.baseURL}}/assets/images/external_tools/{{ tool.image }}">
      </div>
    {% endif %}
      <div class="gallery-item-body">
        <h2>{{ tool.name }}</h2>
        <p>Developer: {{ tool.developer }} </p>
        <div>{{ tool.description }}</div>
      </div>
  </a>
{% endfor %}
</div>

<div style="margin-top:3em;">
  <p style="font-size:smaller;">
    <em>
      Note: The tools presented here are developed by third parties for informational purposes only. The presence of a tool on this list is not intended to indicate endorsement or support by VectorSurv. VectorSurv does not guarantee the accuracy, reliability, availability, or security of these tools. We are not responsible for any content or functionality of third-party tools, and are not responsible for errors or damages arising from their use.
    </em>
  </p>
</div>
