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

export default {
    createAccount,
    fetchAccounts,
}