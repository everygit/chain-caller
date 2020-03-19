/**
 * create a object, which can be chained to call methods
 * @param {array} list Object property collection
 * @param {function} callback Last executed method function
 */
export default function (list, callback) {
    var gets = list.reduce(function (obj, key) {
        obj[key] = {
            get: function () {
                return createHandle(this.chain, key);
            }
        }
        return obj;
    }, {});
    var createHandle = function (list, key) {
        var handle = function handle() {
            return callback.apply(handle, arguments);
        };
        if(key) {
            handle.chain = (list || []).concat(key);
        } else {
            handle.chain = list || [];
        }
        handle.__proto__ = Object.defineProperties(function _chainCaller() { }, gets);
        return handle;
    }
    return Object.defineProperties(createHandle(), gets)
};