export const changeSort = (sortType,sortValue)=>{
    return {
        type: "CHANGE_SORT",
        sortType:sortType,
        sortValue:sortValue
    }
};