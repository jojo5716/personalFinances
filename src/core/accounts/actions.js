import actions from '../../constants/actions';


const fetchAccounts = () => ({
    type: actions.GET_ACCOUNTS,
    payload: {},
});

export default {
    fetchAccounts,
}