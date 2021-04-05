const {
    radios,
} = require('../../helper/avaliableRadios.json')

const checkRadio = (name) => {
    for (it of roles) {
        if (it.role === name)
            return 0
    }
    return 1
}

module.exports = {
    checkRadio,
}