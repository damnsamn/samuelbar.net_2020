---
layout: content
gist: 701134fba05b122fd74d2a4db225cd05
tags:
    - HTML
    - JavaScript
    - A11y
desc:  Method for developing clickable linked cards without sacrificing the user experience for screen reader users
---

Having entire cards be their own clickable links is a common design pattern. However, housing an entire card's worth of information within an `<a>` tag can be problematic for users with screen readers, as the screen reader will read out the entire contents of the `<a>` tag. This is typically overly verbose and contains a lot of unnecessary information.

The below solution sidesteps this problem. By encapsulating only a card's title/heading in the `<a>` tag, we ensure the screen reader is only reading out the meaningful link content.Then, by using the `data-click` attribute we can pass all card clicks through to the link, successfully navigating to the desired endpoint.

{% include common/gist.html id=page.gist %}