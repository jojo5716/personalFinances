function findByName(accountName, accounts) {
    return accounts.find((account) => account.name === accountName);
}

export default {
    findByName,
}
