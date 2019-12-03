const users = [
    {
        id: 1,
        age: 22,
        name: "bahdcoder",
        email: "bahdcoder@gmail.com",
        registered_on: "2018-09-12 00:00:00"
    },
    {
        id: 2,
        age: 24,
        name: "Miss Myers",
        email: "miss_myers@models.co.uk",
        registered_on: "2016-09-12 00:00:00"
    },
    {
        id: 3,
        age: 31,
        name: "Emily Gates",
        email: "emily@gates.co.za",
        registered_on: "2017-11-09 19:00:00"
    }
]

const findUserById = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id == id)

            if (!user) {
                return reject(new Error(`User with id: ${id} was not found.`))
            }

            return resolve({
                message: "User found successfully.",
                user
            })
        }, 10)
    })
}

const findUserByEmail = email => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.email == email)

            if (!user) {
                return reject(
                    new Error(`User with email: ${email} was not found.`)
                )
            }

            return resolve({
                message: "User found successfully.",
                user
            })
        }, 10)
    })
}

module.exports = {
    findUserByEmail,
    findUserById
}
