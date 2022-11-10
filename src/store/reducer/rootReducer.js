
const initState = {
    users: [
        { id: 1, name: 'Thủy' },
        { id: 2, name: 'Đạt' }
    ],
    posts: []

}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USERS':
            console.log('>>>run into delete user', action)

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)



            return {
                ...state, users
            }
        case 'Creat_user':
            let id = Math.floor(Math.random() * 111111);
            let user = { id: id, name: `random - ${id}` }

            return {
                ...state, users: [...state.users, user]
            }

        default:
            return state
    }
    return state;
}
export default rootReducer