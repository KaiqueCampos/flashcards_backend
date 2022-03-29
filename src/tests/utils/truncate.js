const Collection = require('../../models/Collection');

module.exports = () => {
    return Collection.destroy({ truncate: { cascade: true }, force: true });
}
