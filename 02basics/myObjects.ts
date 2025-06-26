// const User = {
//     name: "vrushabh",
//     email: "vrush@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "vrush", isPaid: true, email: "v@v.com"}

// createUser(newUser)

// function createCourse(): {name: string, price: number} {
//     return {name: "reactjs", price: 399}
// }



// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number

}

let myUser: User = {
    _id: "12345",
    name: "v",
    email: "v@v.com",
    isActive: false
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "v@gmail.com"
// myUser._id = "3424"



export {}