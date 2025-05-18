import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../model/user.model.js";
config();

const seedUsers = [
  {
    email: "irheil@gmail.com",
    fullname: "Irheil mae",
    password: "123456",
    profilePic: "https://i.pinimg.com/736x/50/4a/ac/504aacf9b51006b316e840c8e1c09b76.jpg", 

  },
  {
    email: "cathy@gmail.com",
    fullname: "Cathy Bae",
    password: "123456",
    profilePic: "https://i.pinimg.com/736x/af/33/db/af33db5d2013bf203c30d50659ae8b0c.jpg",
  },

  

  {
    email: "russell@gmail.com",
    fullname: "Russell Loreto",
    password: "123456",
    profilePic: "https://i.pinimg.com/736x/00/5d/0b/005d0b421b9306f35e870d9f2196b3d8.jpg",
  },
  {
    email: "jin@gmail.com",
    fullname: "Jin Failana",
    password: "123456",
    profilePic: "https://i.pinimg.com/736x/96/98/f6/9698f63016f7fb05029de0205e48a3e8.jpg",
  },
  {
    email: "bj@gmail.com",
    fullname: "BJ Cabaat",
    password: "123456",
    profilePic: "https://i.pinimg.com/736x/02/ac/1c/02ac1cc555c86a874fab61a289d983f6.jpg",
  },
  {
    email: "al@gmail.com",
    fullname: "Al love sherby",
    password: "123456",
    profilePic: "https://i.pinimg.com/736x/6b/5a/4c/6b5a4c7328701becdf371c3e6f3b453e.jpg",
  },
 
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();