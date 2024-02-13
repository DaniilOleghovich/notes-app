import { Column, DataType, Model, Table } from "sequelize-typescript";

interface NoteEntityAttrs {
  title: string;
  description: string;
}

@Table({ tableName: 'notes'})
export class NoteEntity extends Model<NoteEntity, NoteEntityAttrs> {
  @Column({
    type: DataType.BIGINT,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;
}
