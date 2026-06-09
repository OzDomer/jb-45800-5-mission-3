import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Team from "./Team";


@Table({
    underscored: true
})
export default class Meeting extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Team)
    @Column(DataType.UUID)
    teamId: string

    @AllowNull(false)
    @Column(DataType.DATE)
    startTime: Date

    @AllowNull(false)
    @Column(DataType.DATE)
    endTime: Date

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string

    @AllowNull(false)
    @Column(DataType.STRING)
    room: string

    @BelongsTo(() => Team)
    team: Team

}