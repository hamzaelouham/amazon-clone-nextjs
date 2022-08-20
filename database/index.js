import mongoose from "mongoose";

// export function ConnectBD() {
//   if (mongoose.connections[0].readyState) {
//     console.log("you are connceted..");
//   } else {
//     mongoose.connect(process.env.NEXT_PUBLIC_DB_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//   }
// }

const connection = {}; /* creating connection object*/

async function ConnectBD() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return;
  }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export { ConnectBD };
