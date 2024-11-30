import { app } from "./app.js";

const port = 5000;

app.listen(port || 8000, () => {
  console.log(`Server is running at port : ${port}`);
});

app.on("error", (error) => {
  console.log(`Error : ${error}`);
  throw error;
});
