import { ApiProperty } from "@nestjs/swagger";
import { IsInt,IsOptional, Max, Min } from "class-validator";
export class FindAllDto{
  @ApiProperty({name:"skip",default:0,type:Number})
  @IsOptional()   //是否为空为空后面不走
  @IsInt({message:"参数skip必须为整数"})
  @Min(0,{message:"参数skip大于或等于0的整数"})
  skip:number //偏移量
  @ApiProperty({name:"take",default:30,type:Number})
  @IsOptional()
  @IsInt({message:"参数take必须为整数"})
  @Min(0,{message:"参数take大于或等于0的整数"})
  @Max(30,{message:"参数take小于或等于30的整数"})
  take:number   //条数
}