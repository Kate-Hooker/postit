import { PrismaClient } from '@prisma/client'

const client = globalThis.prisma || new PrismaClient()
if (process.eventNames.NODE_ENV !== 'production') globalThis.prisma = client

export default client
