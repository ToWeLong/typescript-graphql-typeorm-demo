import 'reflect-metadata'
import express from 'express'
import { createConnection, getConnectionOptions } from 'typeorm'
import { Book } from './entity/Book'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { BookResolvers } from './resolvers/BookResolvers'

export const start = async () => {
	const app = express()
	const connectOptions = await getConnectionOptions()
	await createConnection({
		...connectOptions,
		entities: [Book],
	})
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [BookResolvers],
			validate: true,
		}),
		context: ({ req, res }) => ({ req, res }),
		formatError: error => {
			console.log(error.extensions.exception.validationErrors)
			// return new Error()
			return error
		},
	})

	apolloServer.applyMiddleware({ app, cors: false })
	app.listen(4000, () => {
		console.log(`server started at http://localhost:4000/graphql`)
	})
}
