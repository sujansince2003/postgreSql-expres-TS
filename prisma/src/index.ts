import e from "express"
import prisma from "./lib/prisma"



async function getUsers() {

    //create a single user
    // const users = await prisma.user.create({
    //     data: {
    //         username: "sujan",
    //         password: "1234"
    //     }

    // })

    //get all users username only
    // const users = await prisma.user.findMany({
    //     select: {
    //         username: true
    //     }
    // })

    //udpate user with the custom username
    // const updateuser = await prisma.user.update({
    //     where: {
    //         username: "sujan"
    //     },
    //     data:
    //     {
    //         username: "sujankhatri"
    //     },
    //     select:
    //     {
    //         username: true,
    //         password: true
    //     }
    // })

    //insert multiple data at once
    // const createUsers = await prisma.user.createMany(
    //     {


    //         data: [
    //             { username: "test1", password: "1234" },
    //             { username: "test2", password: "1234" },
    //             { username: "test3", password: "1234" },
    //         ]
    //     })

    //insert into course table
    // const createCourse = await prisma.course.create(
    //     {
    //         data:
    //         {
    //             courseName: "csit",
    //             semester: "sixth",
    //             clg: "BMC"
    //         }
    //     }
    // )
    //delete user from custom username
    // const deleteUser = await prisma.user.delete({
    //     where: {
    //         username: "test1"
    //     }
    // })
    // console.log(deleteUser)
}

getUsers()