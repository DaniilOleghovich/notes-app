import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { RoleEntity } from "../../roles/entities/roles.model";
import { UserRolesEntity } from "../../roles/entities/user-roles.model";

interface UserEntityAttrs {
  login: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class UserEntity extends Model<UserEntity, UserEntityAttrs> {

  @ApiProperty({example: '1', description: 'Unique user ID'})
  @Column({
    type: DataType.BIGINT,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 'newUser', description: 'User login. Must be unique!'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;

  @ApiProperty({example: 'Bob', description: 'User firstname'})
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  firstname: string;

  @ApiProperty({example: 'Marley', description: 'User lastname'})
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  lastname: string;

  @ApiProperty({example: 'bobmarley@gmail.com', description: 'User email. Must be unique!'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({example: 'password', description: 'User password'})
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  password: string;

  @ApiProperty({example: 'true', description: 'Is user banned'})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isBanned: boolean;

  @ApiProperty({example: 'banned reason: qwe', description: 'Ban reason'})
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => RoleEntity, () => UserRolesEntity)
  roles: RoleEntity[];
}
