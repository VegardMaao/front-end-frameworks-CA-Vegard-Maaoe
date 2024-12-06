import { resetInp } from "./resetInputs";

export function SearchFunc(e, params){
    const {originalArray, sortedData, setOutput} = params;
    const searchQuery = e.target.value;
    const lowerCaseSearchQuery = searchQuery.toLowerCase();

    if(!searchQuery){
        resetInp("search");
        return setOutput(originalArray);
    }

    const filtered = sortedData.filter(item => Object.values(item).some(val => typeof val === "string" && val.toLowerCase().includes(lowerCaseSearchQuery)));


    return setOutput(filtered);
}