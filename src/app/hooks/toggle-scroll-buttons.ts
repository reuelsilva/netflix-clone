export default function toggleScrollButttons(){
    const scrollButtons = document.querySelectorAll("#originals-row > button")
    if(window.innerWidth > 640){
        scrollButtons.forEach((button) => {
            button.classList.toggle("sm:opacity-100")
            button.classList.toggle("sm:opacity-0")
        })
    }
}
