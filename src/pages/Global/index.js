import { connect } from 'react-redux';

import globalActions from '../../core/global/actions';
import Global from './Global';


function mapStateToProps(state) {
    return {};
}

const mapActionsToProps = {
    loadInitialData: globalActions.loadInitialData,
};

export default connect(mapStateToProps, mapActionsToProps)(Global);