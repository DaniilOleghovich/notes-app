import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserEntityAttrs {
  login: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class UserEntity extends Model<UserEntity, UserEntityAttrs> {
  @Column({
    type: DataType.BIGINT,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  firstname: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  lastname: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  password: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isBanned: boolean;

  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
}
