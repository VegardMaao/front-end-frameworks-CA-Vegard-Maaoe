export function SearchFunc(e, params){
    const {originalArray, newData, setDataArray} = params;
    const searchQuery = e.target.value;
    const lowerCaseSearchQuery = searchQuery.toLowerCase();

    if(!searchQuery){
        return setDataArray(originalArray);
    }

    const filtered = newData.filter(item => Object.values(item).some(val => typeof val === "string" && val.toLowerCase().includes(lowerCaseSearchQuery)));

    if (filtered.length === 0) {
        return setDataArray([]);
    }

    return setDataArray(filtered);
}