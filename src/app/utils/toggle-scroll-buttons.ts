export default function toggleScrollButttons(selector:string){
    const scrollButtons = document.querySelectorAll(selector)
    if(window.innerWidth > 640){
        scrollButtons.forEach((button) => {
            button.classList.toggle("sm:opacity-100")
            button.classList.toggle("sm:opacity-0")
        })
    }
}
