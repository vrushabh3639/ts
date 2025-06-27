interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const vrushabh: Admin = {dbId: 1234, email: "v@v.com", userId: 123,
    role: "admin",
    githubToken: "github",
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "vrushabh10", off: 10) => {
        return 10
    }
}
vrushabh.email = "v@vk.com"
// vrushabh.dbId = 2322