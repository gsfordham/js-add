# js-add
Kind of a joke. A friend linked me to these packages, and I just had to <i>Wew lad!</i>:

https://www.npmjs.com/package/add2

https://www.npmjs.com/package/add3

So, I went and did this to eliminate the "need" for such packages.

I later found out at least one of those was just a test package, but it was still amusing, and I already made this thing, so <i>heh</i>.

This JS file takes a variable passed, and adds it up.

Because I did it using tons of ternaries, here is the process, if you wanna read it.

If it's not an array

  If it's NaN
    return 0
    
  Else
  
    return the number
    
Else

  If the length is 0
    return 0
    
  Else
  
    If the first element IS a number AND is NOT an empty string
    
      return the number, added to the function called back on the list, starting at the next element

So, hope you enjoy, regardless of why you're looking at it.
