import { LocationModel } from "../models/LocationModel"
import { CreateLocationData, Location } from "../types/Location"

export async function findLocations(/* TODO: query */): Promise<Location[]> {
  return await LocationModel.find(/* TODO: query */)
}

export async function createLocation({ name, lat, lng }: CreateLocationData): Promise<Location> {
  return await LocationModel.create({
    name,
    latlng: {
      lat,
      lng
    }
  })
}