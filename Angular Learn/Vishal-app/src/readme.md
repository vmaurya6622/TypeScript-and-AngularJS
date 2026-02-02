Null safe Navigation:
    ?.  -> this says agar ye cheez exist karti hai tab hi age jao, otherwise error mat throw karo
        -> so, agar angular me bina ?. ke agar value undefine hui then app crash ho sakta hai.
        -> it is a kind or error prevention jaise man lo user undefined hai but hum use call kar dete hai then error throw
           hoga but ?. use karne ke baad error throw hoga but app crash nhi hoga.

![alt text](image.png)

Falsy:
    JavaScript me if (...) ke andar agar values ko false man li jati hai chahe vo actual me fasle ho ya na ho.

    Ye sab falsy hai: 
        false
        0
        -0
        ""        // empty string
        null
        undefined
        NaN
