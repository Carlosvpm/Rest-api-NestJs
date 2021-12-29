import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: String,
    senha: String,
    name: String
})