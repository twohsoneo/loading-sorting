const initState = {
    sortMethod: {
        type:{toggleSort:false, sortValue:[]},
        color:{toggleSort:false, sortValue:[]},
        value:{toggleSort: false, sortValue:[]}
    },
    list: [
        {
            name: "Squarey",
            type: "polygon",
            color: "red",
            value: 10
        },
        {
            name: "Rectangle Man",
            type: "polygon",
            color: "orange",
            value: 20
        },
        {
            name: "Trap Trap",
            type: "polygon",
            color: "pink",
            value: 30
        },
        {
            name: "Triman",
            type: "triangle",
            color: "green",
            value: 15
        },
        {
            name: "RightTry",
            type: "triangle",
            color: "blue",
            value: 20
        },
        {
            name: "Ninety",
            type: "triangle",
            color: "red",
            value: 10
        },
        {
            name: "Block Brick",
            type: "square",
            color: "orange",
            value: 15
        },
        {
            name: "Trtinity",
            type: "triangle",
            color: "purple",
            value: 50
        }
    ]
};

const rootReducer = (state=initState, action)=> {
    if (action.type === "CHANGE_SORT") {
        let startArray = state.sortMethod[action.sortType].sortValue;
        if(startArray.includes(action.sortValue)){
            let ind = startArray.indexOf(action.sortValue);
            startArray.splice(ind,1);
        }else{
            startArray.push(action.sortValue)
        }
        let toggleSort = startArray.length > 0;


        return{
            ...state,
            sortMethod:{
                ...state.sortMethod,
                [action.sortType]:
                    {
                        toggleSort:toggleSort,
                        sortValue:startArray
                    }
            }
        }
    }    return state;
};

export default rootReducer