import { Book } from '../entity/Book'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { BookInput } from '../modules/book/BookInput'

@Resolver()
export class BookResolvers {
	@Query(() => String)
	book() {
		return 'publi book'
	}

	@Mutation(() => Boolean)
	async createBook(@Arg('data') { name, firstName }: BookInput) {
		await Book.create({
			name,
		}).save()
		console.log(firstName)

		return true
	}
}
