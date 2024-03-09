
import { Schema, model } from "mongoose"

const LocationSchema: Schema = new Schema({
  name: String,
  latlng: {
    lat: Number,
    lng: Number
  }
})

export const LocationModel = model('location', LocationSchema)