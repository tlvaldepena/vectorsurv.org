# VectorSurv.org

The site is broken down in to 2 main sections:

1. Documentation
2. News posts

## Documentation

Documentation goes in the `_docs/` folder. Documentation needs to have **Front Matter** at the top of the page to work. **Front Matter** looks like this:

```md
---
title: Collection
gateway-url: https://gateway.vectorsurv.org/arthro/ppf/collection
---
```

You will need the 2 sets of `---` at a bare minimum.

To add a newly created documentation file to the side menu, edit `_data/docs_nav.yml`.

## News Posts

News Posts go in the `_posts/` folder. You will need to name the post using `YYYY-MM-DD-title.md` format. Do not use spaces or underscores, only hyphens.

## Markdown

All the content can be created using HTML or Markdown. I would recommend using Markdown as it will be much easier to edit and understand. A cheatsheet on Markdown can be found here: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
