export const studentReducer=(state,action) => {
    switch(action.type) {
        case 'ADD_STUD':
            return [...state,{
                id:state.length+1,
                firstName:action.student.firstName,
                lastName:action.student.lastName,
                dob:action.student.dob,
                email:action.student.email,
            }];

        case 'DEL_STUD':
            let count=1;
            let del=state.filter(state => state.id !== action.studId);
            let d=del.map(e => {
                        e ={...e,id:count++}
                    return e;
                    });
             return d;
            // return state.filter(state => state.id !== action.studId);

        case 'EDIT_STUD':
            console.log("Reducer: ",action);
            const s = state.map(e => {
                if (e.id === action.student.id) {
                  e={...e,firstName:action.student.firstName};
                  e={...e,lastName : action.student.lastName};
                  e={...e,dob : action.student.dob};
                  e={...e,email : action.student.email};
                }
                return e;
            });
            return s;
        default:
            return state;
        
    }
}