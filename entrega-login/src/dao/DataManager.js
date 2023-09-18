class DataManager {
    constructor(storage) {
      this.storage = storage;
    }
  
    async load() {
      return await this.storage.load();
    }
  
    async post(data) {
      return await this.storage.post(data);
    }
  
}

module.exports = DataManager