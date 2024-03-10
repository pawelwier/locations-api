import { Response } from "express"

export function getErrorResponse(res: Response, msg: string): Response {
  return res
    .status(400)
    .send({ msg })
}

export function getJsonResponse<T> (res: Response, data: T): Response<T> {
  try {
    return res
      .status(200)
      .json(data)
  } catch (err) {
    return getErrorResponse(res, 'Invalid data request')
  }
}