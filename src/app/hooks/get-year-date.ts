export default function getYearDate(date: string){
    const data = new Date(date)
    const year = data.getFullYear()

    return year
}