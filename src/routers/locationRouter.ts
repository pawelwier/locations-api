import { Router } from "express"
import { addLocation, getLocations } from "../controllers/locationController"

export const locationRouter: Router = Router()

locationRouter.get('/', getLocations)
locationRouter.post('/', addLocation)