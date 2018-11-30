import insertionSort from '../insertionSort'
const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const num = 10000
let longArr = new Array(num);
for (let i = 0; i < num; i++) {
    longArr[i] = Math.floor(Math.random() * num)
}
const sortedLongArr = insertionSort(longArr)

export default class SortTester {
    static testSort(sortFunc) {

        expect(sortFunc([])).toEqual([]);
        expect(sortFunc([1])).toEqual([1]);
        expect(sortFunc([1, 2])).toEqual([1, 2]);
        expect(sortFunc([2, 1])).toEqual([1, 2]);
        expect(sortFunc([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
        expect(sortFunc(sortedArr)).toEqual(sortedArr);
        expect(sortFunc(reverseArr)).toEqual(sortedArr);
        expect(sortFunc(notSortedArr)).toEqual(sortedArr);
        expect(sortFunc(equalArr)).toEqual(equalArr);
    }

    static testSortTime(sortFunc) {
        expect(sortFunc(longArr)).toEqual(sortedLongArr);
    }

}