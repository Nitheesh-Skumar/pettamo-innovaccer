export const ManageLocalStorage = {
    get(key, isString) {
      if (!key) {
        return;
      }
      if (isString) {
        return localStorage.getItem(key) ? localStorage.getItem(key) : '';
      }
      return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {};
    },
    set(key, data) {
      if (!key) {
        return;
      }
      let dataTemp = data || {};
      dataTemp = typeof data === 'string' || typeof data === 'number' ? data : JSON.stringify(dataTemp);
      localStorage.setItem(key, dataTemp);
    },
    delete(key) {
      if (!key) {
        return;
      }
      localStorage.removeItem(key);
    },
    clear() {
      localStorage.clear();
    }
  };

  const LocalStorage = {
    ManageLocalStorage
  };

  export default LocalStorage;
