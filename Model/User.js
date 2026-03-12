const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
    role: String
})

const profileSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: { type: String, required: true, unique: true },
    role: String
})

const usersSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: { type: String, required: true, unique: true },
    role: String
})

const categorySchema = new mongoose.Schema({
    id: Number,
    name: String,
    priority: String
})

const requestSchema = new mongoose.Schema({
    category_id: Number,
    name: String,
    title: String,
    description: String,
    location: String,
    status: String,
    comment: String
})

const reportSchema = new mongoose.Schema({
    Open: String,
    In_Progress: Number,
    Resolved: Number,
})

const User = mongoose.model('User', userSchema);
const Users = mongoose.model('Users', usersSchema);
const Profile = mongoose.model('Profile', profileSchema);
const Category = mongoose.model('Category', categorySchema);
const Request = mongoose.model('Request', requestSchema);
const Report = mongoose.model('Report', reportSchema);
module.exports = {User,Profile,Users,Category,Request,Report};