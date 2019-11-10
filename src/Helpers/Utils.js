/*
    Group by an Object Array by a field of the object
*/
export const groupBy = function (array, key) {
    return array.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};
