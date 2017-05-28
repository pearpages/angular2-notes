import {
    Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges
} from "@angular/core";
@Directive({
    selector: "[counterOf]"
})
// This directive deletes all the content it has created and starts again when the number of pages changes. This can be an expensive process in more complex directives
export class CounterDirective {
    constructor(private container: ViewContainerRef,
        private template: TemplateRef<Object>) {
    }
    @Input("counterOf")
    counter: number;
    ngOnChanges(changes: SimpleChanges) {
        this.container.clear();
        for (let i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template,
                new CounterDirectiveContext(i + 1));
        }
    }
}
class CounterDirectiveContext {
    constructor(public $implicit: any) { }
}
