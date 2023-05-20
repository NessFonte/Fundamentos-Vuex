const getRandomInt = () => {
    return new Promise(resolve => {
        const rndInt = Math.floor((Math.random() * 20) + 1)

        // Ejecutar el resolve 1seg después
        setTimeout(() => {
            resolve(rndInt)
        }, 1000)
    })
}

export default getRandomInt