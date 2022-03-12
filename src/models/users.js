import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    userId: {
        type: String, 
        trim: true, 
        index: { lowercase: true, partialFilterExpression: { userId: { $type: "string" } } }
    },
    userName: {
        type: String, 
        trim: true, 
        index: { lowercase: true, partialFilterExpression: { userName: { $type: "string" } } }
    },
    name: String,
    team_id: String,
    feeling: String,
    hobbies: [String]
}, { timestamps: true });

const User = model('User', userSchema);
export default User;