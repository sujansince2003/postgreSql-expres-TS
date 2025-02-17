import express, { Request, Response } from "express"
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


app.post("/usercourse", async (req: Request, res: Response) => {
    try {




        const { username, email, password, name } = req.body

        const userQuery = "insert into users (username,email,password) values($1,$2,$3) returning id"
        const courseQuery = "insert into courses (name,users_id) values($1,$2)"

        await pgClient.query("BEGIN")

        const userResponse = await pgClient.query(userQuery, [username, email, password])
        const userId = userResponse.rows[0].id
        //we will still get userID but final query will run when control reaches to COMMIT
        const courseResponse = await pgClient.query(courseQuery, [name, userId])


        await pgClient.query("COMMIT")

        res.json({ msg: "user created" })

    } catch (error) {
        res.json({ msg: "error occured", error })
        console.log(error)

    }
})






export default app