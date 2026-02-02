Null safe Navigation:
    ?.  -> this says agar ye cheez exist karti hai tab hi age jao, otherwise error mat throw karo
        -> so, agar angular me bina ?. ke agar value undefine hui then app crash ho sakta hai.
        -> it is a kind or error prevention jaise man lo user undefined hai but hum use call kar 
           dete hai then error throw hoga but ?. use karne ke baad error throw hoga but app crash nhi hoga.

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
    
    -> jab empty string/ 0/ false ko invalid manna ho then we use ||. 


========================================================================================

 Structural Directives -> Micro syntax
    -> * is a shorthand that expands to an underlying <ng-templeate>
    -> it provides context variables like; index as i, else
    -> Angular rewrites *ngIf and *ngFor etc using this syntax.

    So, when we write: <div *ngIf="Ok">OK</div>
    then, internally, Angular rewrites it to:
        <ng-template [ngIf]="Ok">
            <div>OK</div>
        </ng-template>

    here, * this is called as syntactic sugar which is a short term for <ng-template>

    -> ngIf:  condition ke basis par kisi HTML element ko dikhaya ya chupaya jata hai.
              if condition is true then element DOM me ata hai otherwise remove hojata h.
    -> noFor: loops lagane ke lie use hota hai, so array me har item ke lie HTML repeat     
              karta hai.

========================================================================================

