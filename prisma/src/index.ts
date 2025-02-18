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
    //             courseName: "bca",
    //             semester: "sixth",
    //             clg: "BMC",
    //             userId: 3,
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

    // const users = await prisma.user.findUnique({
    //     where:
    //     {
    //         username: "test2"
    //     }
    // })
    // const id = users?.id

    // const courseName = await prisma.course.findFirst({
    //     where:
    //     {
    //         userId: id
    //     },

    // })



    // const getUsername = await prisma.course.findFirst({
    //     where:
    //     {
    //         userId: 3
    //     },
    //     select:
    //     {
    //         User: {
    //             select:
    //             {
    //                 username: true
    //             }
    //         },
    //         courseName: true
    //     }
    // })
    //create course
    const userWithCourses = await prisma.course.findUnique({
        where: {
            id: 4 // Change this to the user's ID you want to fetch
        },
        include: {
            User: true // Assuming the relation is named `courses`
        }
    });

    console.log(userWithCourses);

    // console.log(getUsername)

}

getUsers()