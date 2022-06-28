import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'sq'
})
export class SqrtTest implements PipeTransform{
    transform(value:number):number {
        return Math.sqrt(value);
    }

}