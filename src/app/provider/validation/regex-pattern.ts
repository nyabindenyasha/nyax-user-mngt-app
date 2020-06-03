export class RegexPattern {
    public static getEmailRegex() {
        return '^[a-z0-9._%+-]+@[a-z0-9-]+\[.]{1}[a-z]{2,}(?:[.][a-z]{2,})?$'
    }

    public static getPhoneRegex() {
        return '(07[7138]{1}[0-9]{7})$|(?:\(\d{0,5}\))?\d{5,8}-?\d{1}?$';
    }

    public static getWebsiteRegex() {
        return '^(www)\.[a-z0-9]+([\-]{1}[a-z0-9]+)*\[.](([a-z]{3})|([a-z]{2,}\[.][a-z]{2,}))$';
    }
    public static getNationalIdRegex() {
        return "^[0-9]{2}\s?-?[0-9]{6,7}\s?-?[a-zA-Z]\s?-?[0-9]{2}$";
    }

    public static getPasswordRegex(){
        return "^(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    }

}