import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ro-blue',
    template: `
        <div class="blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quas fugit, tempora expedita et rerum aspernatur ratione nam fugiat amet asperiores illo reiciendis,
         aliquam ab enim perspiciatis praesentium necessitatibus veniam quos! Eum iste magnam, id fugiat architecto
          veniam perspiciatis, repellendus sapiente minima, vitae distinctio nostrum optio! Voluptatem earum dolorem
           eaque atque aperiam, totam excepturi exercitationem odit asperiores ipsum autem at labore, eveniet
            repellendus dolorum est quidem blanditiis minus fugit nulla. Nostrum fugit sunt consequatur
             consequuntur eaque, deleniti cum numquam voluptatem fugiat at doloribus consectetur tenetur.
              Excepturi modi laborum cumque qui distinctio quisquam in nihil, omnis similique nulla illo id aliquam
               debitis.</div>
        <div>Check the url in the navigator for this example</div>
        `,
    styles: [`.blue {
        background: blue;
    }`]
})
export class BlueComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
