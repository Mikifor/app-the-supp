let store = {
    _state: {
        Profile: {
            dialogsData: [{ link: 'Farkchat', personName: 'Фархат' },
            { link: 'Marat', personName: 'Марат' },
            { link: 'Kseniya', personName: 'Ксения' },
            { link: 'Apolinariya', personName: 'Аполинария' },
            { link: 'Kseniya', personName: 'Деметрий' },
            { link: 'Rodion', personName: 'Родион' }],

            privateInfo: {
                name: 'Mikifor', age: 17, languages: 'Ru, Eng, JS'
            }
        },

        messageFieldData:
        {
            newMessageText: "Perseverance",

            messagesInfo: {
                Farkchat:
                    [{ text: 'Whatsup man?', personName: 'Фархат', id: '', author: 'Farkchat' },
                    { text: 'Farchat, the bomb has been planted', personName: 'Марат', id: '', author: 'Mikifor' },
                    { text: 'Very well. So its redy to nuke?', personName: 'Ксения', id: '', author: 'Farkchat' },
                    { text: 'Yes, sir', personName: 'Аполинария', id: '', author: 'Mikifor' },
                    { text: 'Take the ordert to nuke!', personName: 'Деметрий', id: '', author: 'Farkchat' },
                    { text: 'Affirmative!', personName: 'Родион', id: '', author: 'Mikifor' }],

                Marat:
                    [{ text: 'Hi man', personName: 'Фархат', id: '', author: 'Marat' },
                    { text: 'Hi', personName: 'Марат', id: '', author: 'Mikifor' },
                    { text: 'HBTU', personName: 'Ксения', id: '', author: 'Marat' },
                    { text: 'thx', personName: 'Аполинария', id: '', author: 'Mikifor' }],

                Kseniya:
                    [{ text: 'Hi man', personName: 'Фархат', id: '', author: 'Marat' },
                    { text: 'Hi', personName: 'Марат', id: '', author: 'Mikifor' },
                    { text: 'HBTU', personName: 'Ксения', id: '', author: 'Marat' },
                    { text: 'thx', personName: 'Аполинария', id: '', author: 'Mikifor' }],

                Apolinariya:
                    [{ text: 'Hi man', personName: 'Фархат', id: '', author: 'Marat' },
                    { text: 'Hi', personName: 'Марат', id: '', author: 'Mikifor' },
                    { text: 'HBTU', personName: 'Ксения', id: '', author: 'Marat' },
                    { text: 'thx', personName: 'Аполинария', id: '', author: 'Mikifor' }],

                Demetry:
                    [{ text: 'Hi man', personName: 'Фархат', id: '', author: 'Marat' },
                    { text: 'Hi', personName: 'Марат', id: '', author: 'Mikifor' },
                    { text: 'HBTU', personName: 'Ксения', id: '', author: 'Marat' },
                    { text: 'thx', personName: 'Аполинария', id: '', author: 'Mikifor' }],

                Rodiont:
                    [{ text: 'Hi man', personName: 'Фархат', id: '', author: 'Marat' },
                    { text: 'Hi', personName: 'Марат', id: '', author: 'Mikifor' },
                    { text: 'HBTU', personName: 'Ксения', id: '', author: 'Marat' },
                    { text: 'thx', personName: 'Аполинария', id: '', author: 'Mikifor' }]
            }
        },

        postfieldData: {
            newPostText: "Michail",

            postsData:
                [{ author: 'Farkchat', likeCounter: 0, text: 'Hi, Im Mikifor' },
                { author: 'Marat', likeCounter: 2, text: 'The second post' },
                { author: 'Kseniya', likeCounter: 7, text: 'Farchat, the bomb has been planted' },
                { author: 'Apolinariya', likeCounter: 3, text: 'Cake is lie' },
                { author: 'Demetry', likeCounter: 5, text: 'Auuuuf' },
                { author: 'Rodion', likeCounter: 12, text: 'Wolfensprundenburdenbark' }]
        },
    },

    getState() { return this._state },

    container() { },

    observer(income) {
        debugger;
        this.container = income;
    },

    addMessage() {
        debugger;
        let textos = this._state.messageFieldData.newMessageText;
        let newMessage = {
            text: textos,
            personName: 'Фархат',
            id: '7',
            author: 'Farkchat'
        }
        this._state.messageFieldData.messagesInfo.Farkchat.push(newMessage);
        this.changeTextArea('2', '');
    },

    addPost(props) {

        let newMessage = {
            author: 'Mikifor',
            likeCounter: 0,
            text: props
        }

        this._state.postfieldData.postsData.push(newMessage);
        this.changeTextArea('1', '');
    },

    changeTextArea(index, text) {
        debugger;
        index === '1' ? (this._state.postfieldData.newPostText = text) :
            (index === '2' ? (this._state.messageFieldData.newMessageText = text) : (alert('watahell')));
        this.container();
    }

}


export default store;