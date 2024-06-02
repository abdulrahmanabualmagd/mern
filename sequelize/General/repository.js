class Repository {
    constructor(model) {
        this.model = model;
    }

    // --------------------------------------- [ Create ] ---------------------------------------
    // Create
    async create(data, options = {}) {
        try {
            const result = await this.model.create(data, options);
            return result;
        } catch (err) {
            throw err;
        }
    }

    // Bulk Create
    async createAll(data, options = {}) {
        try {
            const results = await this.model.bulkCreate(data, options);
            return results;
        } catch (err) {
            throw err;
        }
    }

    // --------------------------------------- [ Read ] ---------------------------------------
    // Select All
    async getAll(options = {}) {
        try {
            const results = await this.model.findAll(options);
            if (!results) throw Error(`No Records Found!`);
            return results;
        } catch (err) {
            throw err;
        }
    }

    // findByPK
    async getById(id, options = {}) {
        try {
            const result = await this.model.findByPK(id, options);
            if (!result)
                throw Error(
                    `Find By ID Failed! Record with id [${id}] not found`
                );
            return result;
        } catch (err) {
            throw err;
        }
    }

    // findOne
    async find(options = {}) {
        try {
            const result = await this.model.findOne(options);
            if (!result)
                throw Error(
                    "Find One Failed! Record not found for the specified condition"
                );
        } catch (err) {
            throw err;
        }
    }

    // Find or create
    async findOrCreate(options = {}) {
        try {
            const [result, created] = await this.model.findOrCreate(options);
            return {
                result,
                created,
            };
        } catch (err) {
            throw err;
        }
    }

    // Find and Count All
    async findAndCountAll(options = {}) {
        try {
            const results = await this.model.findAndCountAll(options);
            return results;
        } catch (err) {
            throw err;
        }
    }

    // Count
    async count(options = {}) {
        try {
            const count = await this.model.count(options);
            return count;
        } catch (err) {
            throw err;
        }
    }

    // Maximum Value
    async max(field, options = {}) {
        try {
            const maxValue = await this.model.max(field, options);
            return maxValue;
        } catch (err) {
            throw err;
        }
    }

    // Sum
    async sum(field, options = {}) {
        try {
            const sumValue = await this.model.sum(field, options);
            return sumValue;
        } catch (err) {
            throw err;
        }
    }

    // --------------------------------------- [ Update ] ---------------------------------------
    // Update
    async update(data, options = {}) {
        try {
            const [affectedRows] = await this.model.update(data, options);

            if (affectedRows === 0)
                throw Error(`Update Failed! Record with id [${id}] not found`);

            return await this.findById(id);
        } catch (err) {
            throw err;
        }
    }

    // --------------------------------------- [ Delete ] ---------------------------------------
    // Delete
    async delete(options) {
        try {
            const affectedRows = await this.model.destroy(options);
            if (affectedRows === 0)
                throw Error(`Delete Failed Record with id ${id} not found`);
        } catch (err) {
            throw err;
        }
    }

    // Truncate
    async truncate(options = {}) {
        try {
            await this.model.truncate(options);
        } catch (err) {
            throw err;
        }
    }

    // --------------------------------------- [ Utilities] ---------------------------------------
    // Save
    async saveData(options = {}) {
        try {
            const result = await this.save(options);
            return result;
        } catch (err) {
            throw err;
        }
    }

    // Reload
    async reloadData(options = {}) {
        try {
            const result = await this.reload(options);
            return result;
        } catch (err) {
            throw err;
        }
    }

    // Increment
    async incrementFields(fields, options = {}) {
        try {
            const resul = await this.increment(fields, options);
        } catch (err) {
            throw err;
        }
    }

    // Decrement
    async decrementFields(fields, options = {}) {
        try {
            const resul = await this.decrement(fields, options);
        } catch (err) {
            throw err;
        }
    }

    // --------------------------------------- [ Associations ] ---------------------------------------

    // Set Association
    async setAssociations(associations, options = {}) {
        try {
            await this.setAssociations(associations, options);
        } catch (error) {
            throw error;
        }
    }

    // Add Association
    async addAssociation(association, options = {}) {
        try {
            await this.addAssociation(association, options);
        } catch (error) {
            throw error;
        }
    }

    // Remove Association
    async removeAssociation(association, options = {}) {
        try {
            await this.removeAssociation(association, options);
        } catch (error) {
            throw error;
        }
    }

    // Has Association
    async hasAssociation(association, options = {}) {
        try {
            const hasAssoc = await this.hasAssociation(association, options);
            return hasAssoc;
        } catch (error) {
            throw error;
        }
    }

    // Count Associations
    async countAssociations(instance, options = {}) {
        try {
            const count = await this.countAssociations(options);
            return count;
        } catch (error) {
            throw error;
        }
    }
}
