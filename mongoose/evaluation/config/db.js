const mongoose = require("mongoose")

const url = "mongodb+srv://danish112233:123danish@cluster0.t908kdn.mongodb.net/evaluation?retryWrites=true&w=majority&appName=Cluster0"

const connection = mongoose.connect(url)

module.exports = connection