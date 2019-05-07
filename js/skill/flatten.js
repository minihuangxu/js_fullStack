const _ = require('lodash');
const arr1 = [99, 0, 33, [101, 202, [303]], 1, 2];
const arr2 = [2, 1, 2];
const users = [
    {user: 'fred', age: 48},
    {user: 'brend', age: 36},
    {user: 'fred', age: 18},
    {user: 'brend', age: 18},
]
const flattenArr1 = _.flattenDeep(arr1);
const uniq1 = _.uniq(arr2);
const sortedUser = _.sortBy(users, ['user', 'age']);
console.log(flattenArr1);
console.log(uniq1);
console.log(sortedUser);