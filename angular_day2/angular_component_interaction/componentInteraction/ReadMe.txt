
Interactions Within the component:
==================================



Two way binding split
getters-setters
ViewChild


class-template communication

-{{}}
-[]
-()
-[()]

split tow way binding

alternative to splitting we have getters and setters
-1-private _name: string
-2-getters-setter
-3-bind setter-geetter fun name in ngModel not the property name


How to access DOM element in the template from the component class?????
-1-
<input #myname type='text' [(ngModel)]="name">
{{name}}

2- create a property in component class as

myRef: ElementRef;

3-@ViewChild('myname') myRef: ElementRef;

4-use afterviewinit hook



----------------------------------------------------------------------------------------------------------------


Interaction between components: like parent-child
=================================================


Input() (parent-to-child)
getters/setters
ngOnChanges()
Template Reference Variable
ViewChild()
Emitting Events(child to parent)



passing data to child component use @Input


How to intercept a change in input property value so that we can perform some operations

How to intercept a change in input property value using ngOnChanges


How to access child components properties and methods in a parent component class using ViewChild() decorator
ViewChild means who will view--> parent will view child so ViewChild.














