import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "../../users/entities/user.model";
import { RoleEntity } from "./roles.model";

@Table({ tableName: "user_roles", createdAt: false, updatedAt: false })
export class UserRolesEntity extends Model<UserRolesEntity> {

  @ApiProperty({example: '1', description: 'Unique user_role ID'})
  @Column({
    type: DataType.BIGINT,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: '123', description: 'This ID is a foreign key to table roles'})
  @ForeignKey(() => RoleEntity)
  @Column({ type: DataType.BIGINT })
  roleId: number;

  @ApiProperty({example: '123', description: 'This ID is a foreign key to table users'})
  @ForeignKey(() => UserEntity)
  @Column({ type: DataType.BIGINT})
  userId: number;

}
