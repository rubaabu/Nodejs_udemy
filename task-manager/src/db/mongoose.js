const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowercase().includes("password")) {
        throw new Error("password should not include password");
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be  a positive number");
      }
    },
  },
});

// const me = new User({
//   name: "Ruba",
//   email: "mike@ruba.com",
//   password: "ruba",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    trim: true,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const d = new Task({
  description: " Go to work",
});

d.save()
  .then(() => {
    console.log(d);
  })
  .catch((error) => {
    console.log(error);
  });
