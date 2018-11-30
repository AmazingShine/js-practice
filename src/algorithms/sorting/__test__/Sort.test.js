import SortTester from './SortTester'
import sortList from './exports'

describe('Sort', () => {
    sortList.forEach(value => {
        it(value, () => {
            SortTester.testSort(require('../' + value).default);
        });
    })

    sortList.forEach(value => {
        if (value != "quickSort.js") {
            it(value + " ==== time:", () => {
                SortTester.testSortTime(require('../' + value).default);
            });
        }
    })
})