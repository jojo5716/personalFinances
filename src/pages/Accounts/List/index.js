import { connect } from 'react-redux';

import accountActions from '../../../core/accounts/actions';
import List from './List';

// const mapStateToProps = (state) => ({
//     accounts: state.accountReducer.accounts,
// });
const mapStateToProps = (state) => {
    console.log(state);
    return {
        accounts: state.accountReducer.accounts,
    }
};
const mapActionsToProps = {
    fetchAccounts: accountActions.fetchAccounts,
};

export default connect(mapStateToProps, mapActionsToProps)(List);