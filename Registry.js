/**
 * Registry class of project on client-side.
 * @constructor
 */
var Registry = function() {};


/**
 * @type {Object.<string, *>}
 */
Registry.items = {};


/**
 * Get item from registry.
 * @param {string} key
 * @param {*=} value
 * @return {*}
 */
Registry.get = function(key, value) {
    return this.items[key] || undefined;
};


/**
 * Set item to registry.
 * @param {string} key
 * @param {*} value
 * @return {boolean=}
 */
Registry.set = function(key, value) {
    if (!key)
        return false;

    this.items[String(key)] = value;
};


/**
 * Remove item from registry.
 * @param {string} key
 */
Registry.remove = function(key) {
    delete this.items[String(key)];
};
