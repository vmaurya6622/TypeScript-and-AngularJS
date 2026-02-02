Null safe Navigation:
    ?.  -> this says agar ye cheez exist karti hai tab hi age jao, otherwise error mat throw karo
        -> so, agar angular me bina ?. ke agar value undefine hui then app crash ho sakta hai.
        -> it is a kind or error prevention jaise man lo user undefined hai but hum use call kar 
           dete hai then error throw hoga but ?. use karne ke baad error throw hoga but app crash nhi hoga.

![alt text](image.png)

========================================================================================

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
    -> ngFor: loops lagane ke lie use hota hai, so array me har item ke lie HTML repeat     
              karta hai.

    ngFor example:
        <ul>
            <li *ngFor="List of names is printing below: ">
                {{name}}
            </li>
        </ul>

        and names = ["vishal","rahul","naman"];

        then outptut will be:
        vishal
        rahul
        naman

========================================================================================

ngTemplateOutlet is an HTML buleprint: ye browser me tabhi render hota hai jab koi ise call karta hai
    <ng-template>: it defines a reusable template block(not rendered until referenced).
    [ngTemplateOutlet]: it chooses which template to render
    [ngTemplateOutletContext]: it passes values to the template. the $implicit key is read by a matching 
                                let variable.
    let-text: it declatres a local variable inside the template that reads the $implicit value form context.
    <ng-container>: it is a local wrapper that does not create extra DOM elements.

    alertType === 'info' ? infoTpl : alertType === 'warning' ? warnTpl : successTpl
    
    This is same as:

    if (alertType === 'info') {
        return infoTpl;
    } else if (alertType === 'warning') {
        return warnTpl;
    } else {
        return successTpl;
    }

========================================================================================

Template statements are the small pieces of code that runs when an event happens in the UI.
They are written inside the event bindings like:
    (click)="..."
    (input)="..."
    (change)="..."
they execute in the component's context and not global JS

Example:
    <button (click)="count = count + 1">Add</button>
    so, on click of this particular button the count variable will be incremented by 1 and
    it runs everytime the button is clicked.

$event:
    so this is a native DOM event object that angular passes to you.
    Example:
        <input (input)="onInput($event)" />
        $event = InputEvent
        $event.target = HTMLInputElement

========================================================================================

Now we gonna learn $implicit;
so it is a default value which you send to template without giving its name.

<ng-container
  [ngTemplateOutlet]="infoTpl"
  [ngTemplateOutletContext]="{ msg: message }"> // context object me key: msg
</ng-container>

<ng-template #infoTpl let-text="msg"> // this is template
  <p>{{ text }}</p>
</ng-template>

=========== now this is implicit case ===========
<ng-container
  [ngTemplateOutlet]="infoTpl"
  [ngTemplateOutletContext]="{ $implicit: message }"> //context object me key is $implicit
</ng-container>

<ng-template #infoTpl let-text>  // this is template
  <p>{{ text }}</p>
</ng-template>

========================================================================================

as alias with ngIf ka matlab hota hai isko ek short naam de do 
like: Angular me *ngIf="user as u"
iska meaning hai:
    agar user truthy hai toh us user ko ek local variable u me store karlo.

========================================================================================

pipes in templates transform values to display using the | operator
multiple pipes can be chained and pure pipes are used for better performance.

========================================================================================
========================================================================================


