import realmDB from './realmDB';
import modelConstants from '../constants/models';


function getAllAccounts() {
    return realmDB.getAllItemsFromModelName(modelConstants.account);
}

function createAccount(accountName, { name, description }) {
    return realm.write(() => {
        return realm.create(accountName, {
            name,
            description,
        });
    });
}

export default {
    createAccount,
    getAllAccounts,
}
