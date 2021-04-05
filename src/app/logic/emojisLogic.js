const {
    emojis,
} = require('../../helper/emojis.json')

const checkEmoji = (name, id) => {
    for (emoji of emojis) {
        if (name === emoji.name && id === emoji.id) return emoji.id_role
    }
    return 0
}

module.exports = {
    checkEmoji,
}