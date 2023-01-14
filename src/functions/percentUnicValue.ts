export const percentUnicValue = (sum: number, per: number) => {

    let result = undefined

    if (per === 1 && sum >= 1000000 && sum < 10000000) {
        return result = 2
    }

    if (per === 1 && sum >= 10000000 && sum < 50000000) {
        return result = 2.25
    }

    if (per === 1 && sum >= 50000000) {
        return result = 3
    }

    if (per > 1 && per < 7 && sum >= 1000000 && sum < 10000000) {
        return result = 3.25
    }

    if (per > 1 && per < 7 && sum >= 10000000 && sum < 50000000) {
        return result = 4
    }

    if (per > 1 && per < 7 && sum >= 50000000) {
        return result = 4.25
    }

    if (per > 6 && per < 14 && sum >= 1000000 && sum < 10000000) {
        return result = 3.5
    }

    if (per > 6 && per < 14 && sum >= 10000000 && sum < 50000000) {
        return result = 4.05
    }

    if (per > 6 && per < 14 && sum >= 50000000) {
        return result = 4.25
    }

    if (per > 13 && per < 21 && sum >= 1000000 && sum < 10000000) {
        return result = 3.75
    }

    if (per > 13 && per < 21 && sum >= 10000000 && sum < 50000000) {
        return result = 4.1
    }

    if (per > 13 && per < 21 && sum >= 50000000) {
        return result = 4.25
    }

    if (per > 20 && per < 31 && sum >= 1000000 && sum < 10000000) {
        return result = 4
    }

    if (per > 20 && per < 31 && sum >= 10000000 && sum < 50000000) {
        return result = 4.15
    }

    if (per > 20 && per < 31 && sum >= 50000000) {
        return result = 4.25
    }

    if (per > 30 && per < 91 && sum >= 1000000 && sum < 10000000) {
        return result = 4.9
    }

    if (per > 30 && per < 91 && sum >= 10000000 && sum < 50000000) {
        return result = 5.15
    }

    if (per > 30 && per < 91 && sum >= 50000000) {
        return result = 5.4
    }

    if (per > 90 && sum >= 1000000 && sum < 10000000) {
        return result = 4.8
    }

    if (per < 90 && sum >= 10000000 && sum < 50000000) {
        return result = 5.05
    }

    if (per > 90 && sum >= 50000000) {
        return result = 5.3
    }

    return result
}