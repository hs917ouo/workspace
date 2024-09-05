// ---------------------
export Array.prototype.mapBy = function (prop) {
  return this.map(a => a[prop]);
};
Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? a => a[prop]?.includes(value)
    : a => a[prop] === value;

  return this.filter(cb);
};
export Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? a => !a[prop]?.includes(value)
    : a => a[prop] !== value;

  return this.filter(cb);
};

export Array.prototype.findBy = function (prop, value) {
  return this.find(a => a[prop] === value);
};

export Array.prototype.sortBy = function (prop) {
  // name | name:desc | name:asc
  const [key, direction = 'asc'] = prop?.split(':');
  const dir = direction.toLowerCase() === 'desc' ? -1 : 1;
  // console.log('🚀  dir:', dir, prop);
  return this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
};

function uniq() {
  Array.prototype.uniqBy = function (prop) {
    if (!prop && prop !== 0) return [...new Set(this)];

    return [...new Set(this.map(a => a[prop]))];
  };

  const arr = [1, 2, 2, 3, 4, 5, 6, 5, 6, 8];
  assert.deepStrictEqual(arr.uniqBy(), [...new Set(arr)]);

  const hong = { id: 1, name: 'Hong', dept: 'HR' };
  const kim = { id: 2, name: 'Kim', dept: 'Server' };
  const lee = { id: 3, name: 'Lee', dept: 'Front' };
  const park = { id: 4, name: 'Park', dept: 'HR' };
  const ko = { id: 7, name: 'Ko', dept: 'Server' };
  const loon = { id: 6, name: 'Loon', dept: 'Sales' };
  const choi = { id: 5, name: 'Choi', dept: 'Front' };
  const users = [hong, kim, lee, park, ko, loon, choi];
  users.uniqBy('dept'); // [ 'HR', 'Server', 'Front', 'Sales' ]

  // console.log(users.uniqBy('dept'));

  assert.deepStrictEqual(users.uniqBy('dept'), [
    'HR',
    'Server',
    'Front',
    'Sales',
  ]);
}