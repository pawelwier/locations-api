
import { Schema, model } from "mongoose"
import { Location } from "../types/Location"

const LocationSchema: Schema = new Schema<Location>({
  name: String,
  latlng: {
    lat: Number,
    lng: Number
  }
})

export const LocationModel = model<Location>('location', LocationSchema)