export function getDefaultsData() {
    return {
        id      : 0,
        complete: false,
        date    : getTodaysDate(),
        name    : '',
        priority: '3'
    };
}

export function getDummyData() {
    return [
        { id: 1, complete: false, date: '2018-11-02', name: 'Go to store', priority: '3' },
        { id: 2, complete: false, date: '2018-09-04', name: 'Buy some food', priority: '1' },
        { id: 3, complete: false, date: '2018-11-05', name: 'Go to school', priority: '2' },
        { id: 4, complete: true, date: '2019-01-07', name: 'Call Mr. John', priority: '3' },
        { id: 5, complete: false, date: '2018-11-12', name: 'Do something fun', priority: '3' },
        { id: 6, complete: true, date: '2018-07-23', name: 'Come back home', priority: '1' },
        { id: 7, complete: true, date: '2019-11-23', name: 'Watch movie', priority: '2' },
        { id: 8, complete: false, date: '2018-09-27', name: 'Go to bed', priority: '3' }
    ];
}

export function getCounterInitialValue() {
    return getDummyData().length + 1;
}

export function getTodaysDate() {
    const today = new Date();
    const day   = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');  // January is 0!

    return `${today.getFullYear()}-${month}-${day}`;
}

/**
 * Sort functions
 * ==============
 */

export function sortByDateAsc(todos) {
    return todos.sort((a, b) => a.date > b.date ? 1 : -1);
}

export function sortByDateDesc(todos) {
    return todos.sort((a, b) => a.date > b.date ? -1 : 1);
}

export function sortByNameAsc(todos) {
    return todos.sort((a, b) => a.petname > b.petname ? 1 : -1);
}

export function sortByNameDesc(todos) {
    return todos.sort((a, b) => a.petname > b.petname ? -1 : 1);
}

export function sortByPriorityAsc(todos) {
    return todos.sort((a, b) => a.status > b.status ? 1 : -1);
}

export function sortByPriorityDesc(todos) {
    return todos.sort((a, b) => a.status > b.status ? -1 : 1);
}

export function sortByGeneral(todos,key,by) {
    console.log(todos)
    return by==='desc'? todos.sort((a, b) => a[key] > b[key] ? -1 : 1):  todos.sort((a, b) => a[key] < b[key] ? -1 : 1);
}
