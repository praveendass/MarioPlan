

const initState = {
    projects : [ ]
}

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case ('ADD_PROJECT' ) :
            return {
                ...state,
                projects: [...state.projects, action.project]
            }

        case ('ADD_PROJECT_ERROR') :
            console.log('error while creating project', action.err)
            return state;
        default : 
            return state;
    }
 }

 export default projectReducer;