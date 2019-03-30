const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    id: String,
    user_type: {
        type: String,
        default: "member"
    },
    sub_type: String,
    first_name: String,
    mid_name: String,
    last_name: String,
    dob: Date,
    gender: String,
    married: Boolean,
    occupation: String,
    guardian_name: String,
    guardian_relationship: String,
    no_of_children: Number,
    age_of_last_child: Number,
    health_data: {
        height: Number,
        weight: Number,
    },
    address: {
        house_no: String,
        street_name: String,
        pin_code: String
    },
    contact_no: Number,
    plan: String,
    date_admission: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Member', MemberSchema, 'user');