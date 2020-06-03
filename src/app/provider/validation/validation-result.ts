export class ValidationResult {
    isValid: boolean;
    errorMessage: string;

    constructor(isValid: boolean, message? : string){
        this.isValid = isValid;
        this.errorMessage = message;
    }
}
