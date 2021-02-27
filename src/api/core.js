import localStorage from './localStore';


class CoreStorage {
    getValue({ model, year='', month='' }) {
        return localStorage.getData(model, year, month);
    }

    setValue() {

    }
}

export default CoreStorage;
