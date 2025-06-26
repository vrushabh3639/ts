// const User: (string | number)[] = [1, "vk"]
let tUser: [string, number, boolean]

tUser = ["vk", 1, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "v@v.com"]

newUser[1] = "vk@v.com"
// newUser.push(true)