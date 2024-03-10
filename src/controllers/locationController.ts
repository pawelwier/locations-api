import { Request, Response } from "express"
import { createLocation, findLocations } from "../services/LocationService"
import { CreateLocationData, Location } from "../types/Location"
import { getErrorResponse, getJsonResponse } from "./controllerUtils"

export async function getLocations(req: Request, res: Response): Promise<Response<Location[]>> {
  /* TODO: add params/filters */
  const locations: Location[] = await findLocations()
  return getJsonResponse(res, locations)
}

export async function addLocation(req: Request<CreateLocationData>, res: Response): Promise<Response<Location>> {
  const { body } = req
  const { name, lat, lng } = body

  /* TODO: validation */
  if (!name || !lat || !lng) return getErrorResponse(res, 'invalid location data')

  const location = await createLocation(body)

  return getJsonResponse(res, location)
}