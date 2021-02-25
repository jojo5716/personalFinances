import moment from 'moment';

function getCurrentYear() {
    return moment().year();
}

function getCurrentMonth() {
    return moment().month();
}

function getCurrentMonthName() {
    return moment().format('MMMM');
}

export default {
    getCurrentMonth,
    getCurrentMonthName,
    getCurrentYear,
}
