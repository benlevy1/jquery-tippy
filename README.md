jquery-tippy
============

Tippy is a light weight tooltip plugin. It turns text in title attributes of
elements into little tooltips that appear when the user moves their mouse
over the element.

Tippy can be assigned to the body or just to one or more specific element:
$('body').tippy();
OR
$('.help').tippy();

You can style your tips using the 'tippy' CSS class. By default the tool tip
will appear 20px above and 10 pixels left of the parent's top left corner. It
will flip if it gets too close to a screen edge.

The available settings are as follows:

cssClass: specify a different CSS class for styling your tips
offsetTop: tootltip position top - pixels relative to the top of the parent
offsetLeft: tootltip position left - pixels relative to the left of the parent
boundary: the minimum distance the tooltip can be from the screen edge before flipping

Copyright (c) 2014 Ben Levy
Released under the MIT License
