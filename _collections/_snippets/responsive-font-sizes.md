---
layout: snippet
gist: 3738e1a8df6b8ea0ce9ce0deca861ced
tags:
    - HTML
    - CSS
    - A11y
desc:  Responsively scale down font sizes for smaller devices, with 1rem (16px) as the baseline
---

I've often encountered scenarios where we've only been provided with (or had the budget for) desktop designs, and no thought has been put into how things need to scale down for smaller devices, such as laptops/tablets/mobiles. Larger font sizes look great on larger displays, but become impractical for smaller form factors.

The below mixin and functions will automatically scale your font-sizes by given factors at given breakpoints. These will trend toward 1rem to ensure they never get too small to be readable on mobile devices.

We also turn `px`-value font-sizes into `rem`-based values, which will behave nicely with the user's OS/browser font-size settings.

{% include common/gist.html id=page.gist %}


The resulting font-sizes are essentially:
<br>
`1rem` + (`$multiplier` × `the difference between 1rem and $size`)

For example: `@include responsive-font-size(60px)` will result in the following font sizes:
```
Above 1200px: 60px
Above 992px:  45.04px   (60px - 16px) * 0.66 + 16px
Above 576px:  38px      (60px - 16px) * 0.5 + 16px
Below 576px:  32.5px    (60px - 16px) * 0.375 + 16px
```