class Repository {
  constructor(model) {
    this.model = model;
  }

  async findAll(options = {}) {
    return this.model.findAll(options);
  }

  async findById(id) {
    return this.model.findByPk(id);
  }

  async findOne(options = {}) {
    return this.model.findOne(options);
  }

  async findAndCountAll(options = {}) {
    return this.model.findAndCountAll(options);
  }

  async create(data) {
    return this.model.create(data);
  }

  async bulkCreate(dataArray) {
    return this.model.bulkCreate(dataArray);
  }

  async update(id, data) {
    try {
      const record = await this.findById(id);
      if (!record) {
        throw new Error(`Record with ID ${id} not found.`);
      }
      return await record.update(data);
    } catch (err) {
      throw new Error(`Record with ID ${id} not found.`);
    }
  }

  async delete(id) {
    try {
      const record = await this.findById(id);
      if (!record) {
        throw new Error(`Record with ID ${id} not found.`);
      }
      return await record.destroy();
    } catch (err) {
      throw new Error(`Record with ID ${id} not found.`);
    }
  }

  async deleteAll(options = {}) {
    return this.model.destroy(options);
  }

  async count(options = {}) {
    return this.model.count(options);
  }
}

module.exports = Repository;
