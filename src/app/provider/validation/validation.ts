import { ValidationResult } from "./validation-result";
import { ValidationType } from "./validation-type.enum";
import { isNullOrUndefined } from "util";
import { ValidationInput } from "./validation-input";

export class Validation {
    results: ValidationResult[] = [];
    inputs: ValidationInput[] = [];
    maximum = Math.pow(2, 31) - 1;
    public addField(input: ValidationInput, value?: any, value2?: any, pattern?: any, display2?: any): Validation {
        input.value = value;
        input.value2 = value2;
        input.pattern = pattern;
        input.display2 = display2;
        this.inputs.push(input);
        return this;
    }


    validate(input: ValidationInput, value: string) {
        var result = new ValidationResult(true);
        var stringify = isNullOrUndefined(value) ? '' : value + '';
        switch (input.type) {
            case ValidationType.Required:
                result = new ValidationResult(stringify.length > 0, `${input.display} is required`);
                break;
            case ValidationType.LessThan:
                console.log(stringify, input.value);
                result = new ValidationResult(stringify < input.value && stringify.length > 0, `${input.display} should be less than ${input.display2}`);
                break;
            case ValidationType.GreaterThan:
                result = new ValidationResult(stringify > input.value && parseInt(value) <= this.maximum, `${input.display} should be greater than ${input.display2}`);
                if (parseInt(value) >= this.maximum) { result = new ValidationResult(parseInt(value) <= this.maximum, `${input.display} out of range`) }
                break;
            case ValidationType.Between:
                result = new ValidationResult(stringify <= input.value && stringify >= '0', `${input.display} should be between 0 and ${input.value}`);
                break;
            case ValidationType.Date:
                var today = Date.now();
                result = new ValidationResult(new Date(today).getTime() >= input.value && stringify > '0', `Invalid ${input.display}`);
                break;
            case ValidationType.DateFieldComparison:
                result = new ValidationResult((new Date(input.value).getTime() >= new Date(input.value2).getTime()) || (new Date(today).getTime() > (new Date(input.value2).getTime())), ` ${input.display} should be later than ${input.display2}`)
                break;
            case ValidationType.NoLaterThanDateFieldComparison:
                result = new ValidationResult((new Date(input.value).getTime() <= new Date(input.value2).getTime()) || (new Date(today).getTime() < (new Date(input.value2).getTime())), ` ${input.display} should be earlier than ${input.display2}`)
                break;
            case ValidationType.Pattern:
                result = new ValidationResult(new RegExp(input.pattern).test(stringify) == true, `${input.display} is not in the correct format`)
                break;
            case ValidationType.PasswordPattern:
                result = new ValidationResult(new RegExp(input.pattern).test(stringify) == true, `${input.display} must be more than 6 characters and must one contain at least 1 special character`)
                break;
        }
        return result;



    }

    validateAll(form: any) {
        this.results = [];
        this.inputs.forEach(input => this.results.push(this.validate(input, form[input.name])))
    }

    public isValid(form: any): boolean {
        this.validateAll(form);
        return this.results.some((s) => !s.isValid);
    }

    public getError(): string {
        var result = this.results.find(f => !f.isValid);
        if (result == null) return '';
        return result.errorMessage;
    }
}   