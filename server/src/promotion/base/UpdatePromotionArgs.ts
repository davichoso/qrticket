/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { PromotionWhereUniqueInput } from "./PromotionWhereUniqueInput";
import { PromotionUpdateInput } from "./PromotionUpdateInput";

@ArgsType()
class UpdatePromotionArgs {
  @Field(() => PromotionWhereUniqueInput, { nullable: false })
  where!: PromotionWhereUniqueInput;
  @Field(() => PromotionUpdateInput, { nullable: false })
  data!: PromotionUpdateInput;
}

export { UpdatePromotionArgs };
