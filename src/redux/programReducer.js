const checkPalindrome = "checkPalindrome"
const changePalindromeTextArea = "changepalindromeTextArea"

export const onClickPalindromeAC = () => ({ type: checkPalindrome })
export const onChangeFunctionAC = (text) => ({ type: changePalindromeTextArea, text: text })

let initialState = {
    currentText: "",
    isPalindrome: "Введите строку для проверки на палиндромность"

}


function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return `Строка ${s} не является палиндромом`
        }
        left++;
        right--;
    }
    return `Строка ${s} является палиндромом`;
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case changePalindromeTextArea: {
            return {
                ...state,
                currentText: action.text
            }
        }

        case checkPalindrome:
            let string = isPalindrome(state.currentText)
            return { ...state, isPalindrome: string }

        default: return state
    }


}

export default dialogReducer