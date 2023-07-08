export function isPallindrome(name: string): boolean{
    return name === name.split('').reverse().join(``);
} 