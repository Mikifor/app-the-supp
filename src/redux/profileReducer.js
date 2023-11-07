let initialState = {
    dialogsData: [{ link: 'Farkchat', personName: 'Фархат' },
    { link: 'Marat', personName: 'Марат' },
    { link: 'Kseniya', personName: 'Ксения' },
    { link: 'Apolinariya', personName: 'Аполинария' },
    { link: 'Kseniya', personName: 'Деметрий' },
    { link: 'Rodion', personName: 'Родион' }],

    privateInfo: {
        name: 'Mikifor', age: 27, languages: 'Ru, Eng, JS', tools: 'React, Redux, axios', vk: 'vk.com/mikifor'
    },

    status: "Initial status"
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        default: return state
    }


}

export default profileReducer