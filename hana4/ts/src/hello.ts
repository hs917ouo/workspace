interface Array<T> {
  first(): T;
  mapBy: (prop: string) => this;
  filterBy: (prop: number, value: any, isIncludes: boolean) => this;
  rejectBy: (prop: number, value: any, isIncludes: boolean) => this;
  sortBy: (prop: string) => this;
}

Array.prototype.mapBy = function (prop: string) {
  return this.map((a) => a[prop]);
};

Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a: Array<any>) => a[prop].includes(value)
    : (a: Array<any>) => a[prop] === value;

  return this.filter(cb);
};

Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a: Array<any>) => !a[prop].includes(value)
    : (a: Array<any>) => a[prop] !== value;

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
