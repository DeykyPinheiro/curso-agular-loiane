import { Component } from "@angular/core";

@Component // decorator, funciona igual no java com spring
    ({
        selector: 'meu-primeiro-component', // nome que eu uma em uma tag ao chamar o component
        template: `
    <p> meu primeiro component com Angular ` // aqui pode ser a urlTemplate, ai vai pra um arquivo .html
    })
export class MeuPrimeiroComponent { } // nome do componente só que em camelCase

