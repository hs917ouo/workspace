"use strict";
Array.prototype.mapBy = function (prop) {
    return this.map((a) => a[prop]);
};
Array.prototype.filterBy = function (prop, value, isIncludes = false) {
    const cb = isIncludes
        ? (a) => a[prop].includes(value)
        : (a) => a[prop] === value;
    return this.filter(cb);
};
Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
    const cb = isIncludes
        ? (a) => !a[prop].includes(value)
        : (a) => a[prop] !== value;
    return this.filter(cb);
};
Array.prototype.sortBy = function (prop) {
    // name | name:desc | name:asc
    const [key = prop, direction = "asc"] = prop.split(":");
    const dir = direction.toLowerCase() === "desc" ? -1 : 1;
    // console.log('🚀  dir:', dir, prop);
    return this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
};
const a = [1, 2, 3, 4, 5];
console.log(a.rejectBy(0, 1, false));
// a.sort
// sort(compareFn?: (a: T, b: T) => number): this;
