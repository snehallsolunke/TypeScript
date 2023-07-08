"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPallindrome = void 0;
function isPallindrome(name) {
    return name === name.split('').reverse().join("");
}
exports.isPallindrome = isPallindrome;
