import { connect } from 'react-redux';

import accountActions from '../../../core/accounts/actions';
import List from './List';

function mapStateToProps(state) {
    return {};
};

const mapActionsToProps = {
    fetchAccounts: accountActions.fetchAccounts,
};

export default connect(mapStateToProps, mapActionsToProps)(List);