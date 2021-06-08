import * as bcrypt from "bcryptjs";

export const createHash = (
    plainText: string
): string => {
    const salt: string = bcrypt.genSaltSync(12)
    const hash:string = bcrypt.hashSync(plainText, salt)
    return hash
}

export const compareHash = (
    plainText:string,
    cypherText:string
):boolean => {
    return bcrypt.compareSync(plainText, cypherText)
}