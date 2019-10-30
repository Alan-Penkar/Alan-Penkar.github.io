---
title:  "Fantasy Hockey Draft Prep with Altair"
date:   2019-10-27 08:00:00
categories: [dataviz]
tags: [dataviz, altair]
---

I recently had a need to embed plots into my blog (for an upcoming post I am working on), and my favorite python plotting library right now is definitely [Altair][altair-home]{:target="_blank"}{:rel="noopener noreferrer"}, so I figured I would share a bit of the testing.  This post is essentially a light how-to and mild evangelism for Altair.  Altair is a declarative visualization library, which means you can focus on what you want your visualization to do, and not on how you want it to get done.  I won't go into specifics, but if you're interested [this][altair-pycon]{:target="_blank"}{:rel="noopener noreferrer"} is a great talk from PyCon by the main contributor, Jake VanderPlas.

{% include vega-head.html %}

What's below is a pretty basic interactive viz that I put together in the hour prior to my fantasy hockey draft this year.  If you're a javascript wiz doing something like this in an hour may not seem out of the ordinary, but as someone writing Python (mostly matplotlib/seaborn with some plotly and bokeh experience) I've never created an interactive dashboard this easily.

The charts I put together were really to help me find value, and to pick out outliers at a given position.  The basis was a comparison of projected stats from rotowire and average draft rankings from Yahoo (which I considered as a rough proxy for where a player would be taken in my own league).  I DID NOT create any point projections of my own, and the accuracy of the projections is not the point of this posting.  What is notable is how with the right visualization the things I wanted to see fall out fairly easily (I also had a filter by position, but there is a issue I have open with Altair causing it to look ugly so it was removed from the chart below).

From the tick chart on the left, it's immediately clear that a single player has enormous value over replacements at left wing and D (Ovetchkin and Burns respectively).  And highlighting sections of the scatter plot as the draft went on, it was easy to see where a player had value over remaining players at the same position as well.  From the scatter plot, it's also clear that the value players are above the general trendline.  So in just the hour I committed to preparing for my draft, my strategy of maximizing points over all positions (vs. getting the best available player) was well served by the quick and dirty visualization below.

Go ahead and play with the charts below if you'd like, and give Altair a try with your own data (note: this may act very oddly on mobile).

{% include draft-chart.html %}

[code available here][github]{:target="_blank"}{:rel="noopener noreferrer"}

[altair-home]:      https://altair-viz.github.io/index.html
[altair-pycon]:     https://www.youtube.com/watch?v=vTingdk_pVM
[github]:     https://github.com/Alan-Penkar/FantasyHockey