import { ObjectType, Field, ID } from '@nestjs/graphql';
import { AccessList, UserRole } from 'src/user/utils/enums';

@ObjectType()
export class CreateUserOutput {
  @Field(() => ID)
  readonly id: string;
  
  @Field()
  readonly email: string;

  @Field((type) => UserRole)
  readonly userRole: UserRole;

  @Field((type) => [AccessList])
  readonly accessList: AccessList[];
}
