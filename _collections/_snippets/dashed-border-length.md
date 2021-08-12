---
layout: snippet
gist: c175ad846a4158003adcdac94fbd32af
tags:
    - CSS
desc: A CSS-only solution to controlling segment-length of dashed borders
---

A while ago I made the mistake of trusting the precise control [Figma](https://www.figma.com/design/) gives us over all aspects of dashed borders, such as weight, dash length, gap length etc. This level of control seems inherited from design software such as Adobe Illustrator.

{% include common/image.html class="mx-auto col-12 col-sm-8 col-md-6 col-xl-5 col-xxl-4" src="/assets/images/snippets/fig-dash.png" width="400" height="525" alt="A screenshot of Figma's dashed border controls. Featuring stroke style, dash length, gap length, dash cap type, join type and miter angle." %}

The trouble is, we have *nowhere near* this level of control in native CSS. It was only after already having produced the designs and acquired sign-off that I had realised this. Cornered into finding a solution, I created the below mixin.

{% include common/gist.html id=page.gist %}

Essentially, it works because browsers will (reliably, if not consistently) scale up their dash and gap lengths in proportion with the `border-width` value. We can exploit this by styling a pseudo-element with a `border-width` of what we want our dash length to be, offset its position by what we want the stroke weight to be, and then clip out the undesired thickness by using `overflow: hidden`. We also do some additional calculation of `border-radius`, if provided with one, to maintain a uniform weight around rounded corners.

Below is an example of a large `20px` `border-width`, which is then clipped down to `5px` in weight while maintaining the `20px` dash/gap length.

<div class="row">
  <div class="col-10 offset-1 col-md-5 mx-md-auto col-xl-4">
    <div class="box dash"></div>
  </div>
  <div class="col-10 offset-1 col-md-5 mx-md-auto col-xl-4">
    <div class="box pseudo-dash"></div>
  </div>
</div>