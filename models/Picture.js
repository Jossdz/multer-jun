const {model, Schema} = require('mongoose')

const pictureSchema = new Schema(
  {
    name: String,
    path: String,
    originalName: String
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
)

module.exports = model('Picture', pictureSchema)
