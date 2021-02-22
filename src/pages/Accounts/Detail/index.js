import { connect } from 'react-redux';

import accountActions from '../../../core/accounts/actions';
import AccountDetail from './Detail';

const mapStateToProps = (state) => ({
    accounts: state.accountReducer.accounts,
});
const mapActionsToProps = {
    fetchAccounts: accountActions.fetchAccounts,
};

export default connect(mapStateToProps, mapActionsToProps)(AccountDetail);