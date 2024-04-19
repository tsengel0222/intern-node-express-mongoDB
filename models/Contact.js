const mongoose=require("mongoose");
const contactSchema=new mongoose.Schema({
    firstName:{
        type: String,
        required:[true,"first name is required"],
        maxLength: 20,
        trim: true,
        validate:{
            validator: function(value){
                const nameRegex=/^[a-zA-Z\s]*$/;
                return nameRegex.test(value);
            },
            message:"First name must be contain alphabetic characters"
        }
    },
    lastName:{
        type: String,
        required:[true,"last name is required"],
        maxLength: 20,
        trim: true,
        validate:{
            validator: function(value){
                const nameRegex=/^[a-zA-Z\s]*$/;
                return nameRegex.test(value);
            },
            message:"First name must be contain alphabetic characters" 
        
    }
},
    emailAddress:{
        type:String,
        required:[true,"e-mail is required"],
        trim: true
    },
    age:{
        type: Number,
        required:false
    }
    
      
});

module.exports=mongoose.model("Contact",contactSchema);