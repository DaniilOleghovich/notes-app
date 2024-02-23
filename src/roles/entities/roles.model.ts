import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "../../users/entities/user.model";
import { UserRolesEntity } from "./user-roles.model";

interface RoleEntityAttrs {
  role: string;
  description: string
}

@Table({ tableName: "roles" })
export class RoleEntity extends Model<RoleEntity, RoleEntityAttrs> {

  @ApiProperty({example: '1', description: 'Unique role ID'})
  @Column({
    type: DataType.BIGINT,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 'ADMIN', description: 'User Role. User can have several roles'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  role: string;

  @ApiProperty({example: 'Role: ADMIN', description: 'Description of the role'})
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  description: string;

  @BelongsToMany(() => UserEntity, () => UserRolesEntity)
  users: UserEntity[];

}
