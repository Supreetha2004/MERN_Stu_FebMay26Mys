//Main Express server entry point
const app = require("./app");
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server runing on http://localhost:${PORT}`);
});