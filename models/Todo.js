const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  expired: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Todo', EventSchema)

