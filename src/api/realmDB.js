import realm from 'realm';


function getAllItemsFromModelName(modelName) {
    return realm.objects(modelName);
}

function create(modelName, modelAttributes) {
    return realm.create(modelName, { ...modelAttributes });
}

export default {
    getAllItemsFromModelName,
    create,
}
