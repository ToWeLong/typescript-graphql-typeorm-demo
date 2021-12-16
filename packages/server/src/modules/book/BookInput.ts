import { MaxLength } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class BookInput {
	@Field()
	@MaxLength(3, { message: 'name最大长度为3个字符' })
	name: string

	@Field()
	@MaxLength(3, { message: 'firstName最大长度为3个字符' })
	firstName: string
}
