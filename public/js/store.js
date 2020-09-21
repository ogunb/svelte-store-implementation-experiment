function writable(initialValue) {
    let value = setValue(initialValue);
    const subscriptions = [];

    function setValue(newValue) {
        if (typeof newValue === 'object') {
            return JSON.parse(JSON.stringify(newValue));
        }

        return newValue;
    }

    function unsubscribe(cb) {
        return subscriptions.splice(subscriptions.indexOf(cb) >>> 0, 1);
    }

    return {
        subscribe(callback) {
            if (!callback || typeof callback !== 'function') {
                throw new Error('A callback function is required on store subscribe.')
            }

            callback(value);
            subscriptions.push(callback);

            return () => unsubscribe(callback);
        },

        update(callback) {
            if (!callback || typeof callback !== 'function') {
                throw new Error('A callback function is required on store update.')
            }

            const newValue = callback(value);
            value = setValue(newValue);
            subscriptions.forEach(cb => cb(newValue));
        }
    };
}

export { writable };
