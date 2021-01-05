---
layout: snippet
gist: c68dd6016b0738be14b985735c51b9ae
tags:
    - CSS
---

At the time of writing, CSS has no natively-handled way of maintaining a specific aspect ratio for a given element. This can be useful for:
* Forcing images to a specific aspect ratio for conistency
* Creating consistent placeholder space while images load in
* Constricting embedded video players to 16:9 to avoid black bars (a result of explicitly setting an `height` attribute)

The solution below will maintain a given aspect ratio based on the element's natural width, unless you specify a height for the ratio to be based on instead.

{% include common/gist.html id=page.gist %}

This works by forcing the child element to take up the entire space of its parent using `position: absolute`, then by applying a percentage padding-bottom value - which takes its percentage from the element's width instead of its height.