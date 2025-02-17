import express from "express"
import { pgClient } from "./index"
const app = express()

app.use(express.json())



app.get("/", async (req, res) => {

    const response = await pgClient.query("SELECT * FROM users")
    res.status(200).json(response.rows)
})


app.post("/", async (req, res) => {
    const { title, description, completed } = req.body

    // const response = await pgClient.query(`insert into todo(title,description,completed)  values ('${title}','${description}','${completed}')`)  //this might lead to sql injection

    const insertquery = "insert into todo(title,description,completed) values($1,$2,$3)"
    const response = await pgClient.query(insertquery, [title, description, completed])

    res.json({ msg: "created a todo", title, description, completed, response, msg2: "helllo" })

}
)

app.get("/gettodos", async (req, res) => {
    const response = await pgClient.query("select * from users")
    res.json(response.rows)
})

app.put("/updatetodo", async (req, res) => {

    try {
        const response = await pgClient.query("update todo set completed='truee' where id=1")
        res.json(response.rows)
    } catch (error) {
        res.json({ msg: "error", error })
    }



})






export default app