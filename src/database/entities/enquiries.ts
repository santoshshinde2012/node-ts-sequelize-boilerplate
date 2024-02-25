import { DataTypes, Model, Optional } from 'sequelize';
import database from '../index';

interface EnquiryAttributes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
  phone: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EnquiryInput extends Optional<EnquiryAttributes, 'id'> { }

export interface EnquiryOuput extends Required<EnquiryAttributes> { }


class Enquiry extends Model<EnquiryAttributes, EnquiryInput> implements EnquiryAttributes {
  public id!: number;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public subject!: string;
  public message!: string;
  public phone!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Enquiry.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize: database,
  modelName: 'Enquiry'
});

export default Enquiry 