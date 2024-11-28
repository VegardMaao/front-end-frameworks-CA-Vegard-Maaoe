export function LogInp(e, params){
    const {data, setDataArray} = params;
    const searchQuery = e.target.value;
    const lowerCaseSearchQuery = searchQuery.toLowerCase();

    const filtered = data.filter(item => Object.values(item).some(val => typeof val === "string" && val.toLowerCase().includes(lowerCaseSearchQuery)));

    if (filtered.length === 0) {
        console.log("hello")
        
    }

    setDataArray(filtered);
}