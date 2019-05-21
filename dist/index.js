"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function NonEnumerable(_target, _propertyName, propertyDesc) {
    if (propertyDesc) {
        propertyDesc.enumerable = false;
        return propertyDesc;
    }
    return {
        configurable: true,
        enumerable: false,
        writable: true,
        value: undefined
    };
}
exports.NonEnumerable = NonEnumerable;
exports.nonEnumerable = NonEnumerable;
function Enumerable(_target, _propertyName, propertyDesc) {
    if (propertyDesc) {
        propertyDesc.enumerable = true;
        return propertyDesc;
    }
    return {
        configurable: true,
        enumerable: true,
        writable: true,
        value: undefined
    };
}
exports.Enumerable = Enumerable;
exports.enumerable = Enumerable;
