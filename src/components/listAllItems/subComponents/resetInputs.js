

export function resetInp(currentInp){
    let input;
    if (currentInp === "search") {
        input = document.querySelector("#sortBy");
        input.value = "default";       
    }

    if (currentInp === "sort") {
        input = document.querySelector("#searchInp");
        input.value = "";
    }
}