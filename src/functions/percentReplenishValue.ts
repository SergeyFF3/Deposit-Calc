export  const percentReplenishValue = (sum: number, per: number) => {

    let result = undefined

    if (per > 90 && per < 121 && sum >= 50000000) {
        return result = 4.74
    }

    if (per > 120 && sum >= 50000000) {
        return result = 4.75
    }



    return result
}