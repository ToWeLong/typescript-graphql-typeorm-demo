import { ObjectType } from 'type-graphql'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Book extends BaseEntity{
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string
}
