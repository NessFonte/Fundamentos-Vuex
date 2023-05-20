import getRandomInt from "@/helpers/getRandomInt.js"

export const incrementRandomInt = async ({commit}) => {
    commit('setLoading', true)
    const randomInt = await getRandomInt()
    commit('incrementBy', randomInt)
    commit('setLoading', false)
}