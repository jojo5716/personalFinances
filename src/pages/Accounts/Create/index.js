import { connect } from 'react-redux';

import accountActions from '../../../core/accounts/actions';
import Create from './Create';


const mapStateToProps = () => ({});
const mapActionsToProps = {
    createAccount: accountActions.createAccount,
};

export default connect(mapStateToProps, mapActionsToProps)(Create);
