import { connect } from "mongoose"

export const makeConnection = (address: string) => {
  try {
    connect(address)
  } catch(err) {
    console.error('Invalid mongo connection')
    console.error(err)
  }
}