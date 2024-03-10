export type Location = {
  name: string
  latlng: {
    lat: number
    lng: number
  }
}

export type CreateLocationData = {
  name: string
  lat: number
  lng: number
}