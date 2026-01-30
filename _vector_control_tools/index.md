---
title: Vector Control Tools
permalink: /vector_control_tools/
---

<div class="padded-content">

  <h1>Tools for vector control</h1>
  <p>
    There are many tools available that support the vector control community. Here are a few that you may be interested in.
  </p>

<div class="tool-wrapper">
{% for tool in site.data.vector_control_tools %}
  <div class="tool-item">
    {% if tool.image %}
    <div class="tool-item-image">
      <img src="{{ site.baseURL}}/assets/images/external_tools/{{ tool.image }}">
    </div>
    {% endif %}
    <div class="tool-item-body">
      <a href="{{ tool.url }}">
        <h2>{{ tool.name }}</h2>
      </a>
      <p>{{ tool.description }}</p>
      <!-- <p>Contact: <a href="mailto:{{ tool.contact_email }}">{{ tool.contact_name }}</a></p> -->
      <p>Developer: {{ tool.developer }} </p>
    </div>
  </div>
{% endfor %}
</div>

<div style="margin-top:3em;">
  <p style="font-size:smaller;">
    <em>
      Note: These tools are presented here for informational purposes only. The presence of a tool on this list is not intended to indicate endorsement or support by VectorSurv. VectorSurv can not guarantee the accuracy of any calculations or analyses provided by these tools and is not responsible for any issue resulting from use of the tools. 
    </em>
  </p>
</div>

<style type="text/css">
  .tool-item {
    background-color: #fafafa;
  }

  .tool-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(300px, auto);
    column-gap: 1em;
    row-gap:1em;
  }

  .tool-item {
    border: thin solid #003366;
    border-radius: 20px;
  }

  .tool-item-image > img{
    border-radius: 20px 20px 0 0;
  }

  .tool-item-body {
    padding:1em;
  }

  .tool-item-body > h2 {
    padding-top:0;
  }

  .padded-content {
    padding:1em;
  }
</style>