export const replace = (string: string, value: string) => {
    return string.replace(/{{.*}}/, value)
}