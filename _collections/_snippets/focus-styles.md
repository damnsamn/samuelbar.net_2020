---
layout: content
gist: b7d227aee70b8e6379808ecc42c62d50
tags:
    - JavaScript
    - CSS
    - A11y
desc:  Remove and/or replace browser-default focus styles without impeding the experience of mouse users or tab-navigation
---

It's a fairly common practice for developers to remove the browser's default focus styles when clicked links or buttons don't match up with the look and feel of the site. However, doing so without defining alternative focus styles is bad for accessibility - people who navigate by tabbing through interactible elements rely on the focus styles to know where they are on the page and what they're interacting with.

After defining some focus styles though, it's also common to find that they're applied more frequently than the browser-defaults. Natively, the browser will omit certain focus styles while clicking if they're not deemed necessary, such as after clicking a link - a new element *is* in focus, but the browser won't apply the focus styles. Once overriding focus styles are applied though, the browser no longer performs this omission step, applying focus styles to *every* element that receives focus.

The below script accounts for this by applying focus styles only while the user is tabbing - allowing mouse-users to navigate through the site without jarring focus styles following them around, *without sacrificing accessibility*.

{% include common/gist.html id=page.gist %}