
class MongoDBStorage {
  constructor(model) {
    this.model = model
  }

  async load() {
    return await this.model.find();
  }

  post(data) {
    this.model.create(data);
  }

}

module.exports = MongoDBStorage