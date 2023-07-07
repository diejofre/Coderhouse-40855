import { connect } from "mongoose";

const mongoConnect = async () => {
  try {
    await connect(
      "mongodb+srv://diegojofre:coder@cluster0.ukizu0w.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};

export default mongoConnect;
