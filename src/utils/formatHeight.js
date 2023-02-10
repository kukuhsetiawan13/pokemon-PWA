export const getCmFromDm = (dm) => {
    return dm * 10
}

export const getFeetInchFromDm = (dm) => {
    const realFeet = dm / 3.048
    const feet = Math.floor(realFeet);
    const inches = ((realFeet - feet) * 12).toFixed(1);
    return feet + "'" + inches + '"';
}