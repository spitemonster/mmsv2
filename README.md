# mms v2

recreating a fun old project from my early days as a developer; an image resizing app that allows the user to generate a number of defined image sizes and, additionally, a _very_ low quality version of the image either blurred, pixelated or tessellated to match a given aesthetic.

## stack

loving sveltekit so sticking with it.

this bastard historically relied on a lot of external libraries; i may try to take some time and hand write some of the simpler libraries that i used before but we'll see how tedious i find manipulating 8 bit arrays.

## roadmap

[ ] image upload
[ ] image optimize
[ ] image resize

-   ideally i'll be updating this to allow user definable image sizes
    [ ] image tessellate/blur/pixelate
    [ ] download all
    [ ] 24-hour download window

in the real world i'd spin up microservices of some type for the various processes here but i doubt i'll get to that point; just doing this as an exercise. mms v1 took me probably a month to make previously, just want to see what i can do in a couple weeks.
