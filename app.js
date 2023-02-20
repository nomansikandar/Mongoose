const mongoose = require("mongoose");

//creates connection and a new database
mongoose.connect("mongodb://127.0.0.1:27017/nomanchannelno4").then(() => console.log("Connection Successful...")).catch((err) => console.log(err))

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

//collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//create or insert document

// const createDocument = async () => {
//     try {
//         const JavaScript = new Playlist({
//             name: "JavaScript",
//             ctype: "Frontend",
//             videos: 8,
//             author: "Noman Sikandar",
//             active: true
//         })
//         const Python = new Playlist({
//             name: "Python",
//             ctype: "Backend",
//             videos: 28,
//             author: "Noman Sikandar",
//             active: true
//         })
//         const Laravel = new Playlist({
//             name: "Laravel",
//             ctype: "Backend",
//             videos: 98,
//             author: "Noman Sikandar",
//             active: true
//         })
//         const Nodejs = new Playlist({
//             name: "Nodejs",
//             ctype: "Backend",
//             videos: 58,
//             author: "Noman Sikandar",
//             active: true
//         })
//         const Expressjs = new Playlist({
//             name: "Expressjs",
//             ctype: "Backend",
//             videos: 12,
//             author: "Noman Sikandar",
//             active: true
//         })

//         const result = await Playlist.insertMany([JavaScript, Python, Laravel, Nodejs, Expressjs]);
//         //  console.log(result);
//     } catch (err) {
//         console.log(err);
//     }

// }
// createDocument();


//Get documnet

// const getDocument = async () => {
//     try {
//         const result = await Playlist.find({ ctype: { $nin: ["Backend", "database"] } })
//             .select({ name: 1 }).count();
//         //  .limit(1);
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getDocument();


//update document

// const updateDocument = async (_id) => {
//     try {
//         const result = await Playlist.updateOne({ _id }, {
//             $set: {
//                 name: "Mongo DB"
//             }
//         })
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// updateDocument("63efbb58cd1e0d7e68eadbb5");

//delete document 

const deleteDocument = async (_id) => {
    try {
        const result = await Playlist.deleteOne({ _id });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}


deleteDocument("63efbb58cd1e0d7e68eadbb5")