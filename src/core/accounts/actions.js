import actions from '../../constants/actions';


const fetchAccounts = () => ({
    type: actions.GET_ACCOUNTS,
    payload: {},
});

const createAccount = ({ name, description }, redirectCallback) => ({
    type: actions.CREATE_ACCOUNT,
    payload: {
        name,
        description,
        redirectCallback
    },
});

const saveSalary = ({ salary, accountName, redirectCallback }) => ({
    type: actions.SAVE_SALARY,
    payload: {
        salary,
        accountName,
        redirectCallback,
    },
});

const getSalary = () => ({
    type: actions.GET_SALARY,
    payload: {},
});

export default {
    createAccount,
    fetchAccounts,
    getSalary,
    saveSalary,
}