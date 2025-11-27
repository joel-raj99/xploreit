import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true,
    },
    mobile: {
        type: String,
        required: true,  
    },
    designation: {
        type: String,
        required: true,
        trim:true,
    },
    salary: {
        type: String,
        required: true,
        trim:true,
    },
   
    image: {
        type: String,
        required: true,
        trim:true,
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
});

const Employee = mongoose.model ("Employee", employeeSchema);

export default Employee;