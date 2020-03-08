
   const initialState={
        persons:[]
    }

const reducer=(state=initialState,action,payload)=>
{
    if(action.type==='ADD')
    {
           
        return{
            ...state,
            persons: state.persons.concat(action.payload)
        }
    }
    else if(action.type==='REMOVE')
    {
        return {
            ...state,
            persons: state.persons.filter(person => person.id !== action.payload.personId)
        }
    }
    return state;
}
export default reducer;