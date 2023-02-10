import { capitalizeLetter } from "./capitalizeLetter"

export const getStringFromAbilitiesArray = (arr) => {
    return arr.map(el => capitalizeLetter(el.ability.name)).join(", ")
}