export class Utility {
    public static isEquivalent(a, b): boolean {
        if (!a || !b) return false;
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
        if (aProps.length != bProps.length)
            return false;
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            if (a[propName] != b[propName]) {
                if (!Array.isArray(a[propName]))
                    return false;
            }
        }
        return true;
    }
}