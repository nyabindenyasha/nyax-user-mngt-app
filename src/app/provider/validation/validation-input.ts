import { ValidationType } from "./validation-type.enum";

export class ValidationInput {
    name : string;
    display: string;
    type : ValidationType;
    value? : any;
    value2? : any;
    pattern?: any;
    display2?: any;
}
