export const reString = (date) => {
    let newString = date.toString();
    newString = newString.replace('-', '');
    newString = newString.replace('-', '');
    return newString;
}