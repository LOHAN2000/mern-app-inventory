import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log('MongoDB Connected: ', conn.connection.host)
  } catch (error) {
    console.error("Error al conectar a la base de datos: ", error.message)
    process.exit(1)
  }
}