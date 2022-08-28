const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect('mongodb+srv://TummicTeam:Tummic@cluster0.ql4yq.mongodb.net/Tummic_database')
}

module.exports = connect