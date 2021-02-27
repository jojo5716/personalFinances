import Realm from "realm";

// Declare Schema
class AccountSchema extends Realm.Object { }
AccountSchema.schema = {
    name: 'Account',
    properties: {
        name: 'string',
        description: 'string',
    }
};

// Create realm
let realm = new Realm({
    schema: [AccountSchema],
    schemaVersion: 1,
});

// Export the realm
export default realm;