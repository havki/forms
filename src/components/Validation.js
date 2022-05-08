 const REQUIRED_FIELD = 'Обязательно для заполнения'

export const nameValidate = {
  required:REQUIRED_FIELD,
  validate:(value)=>{
    console.log(value);
    if(value.match(/[а-яА-Я]/)){
      return 'Логин не может содержать русские буквы'
    }
    return true
  },
  minLength: {
    value:3,
    message:'Логин должен содержать 3 символа'
  },
  maxLength: {
    value:10,
    message: 'Логин не больше 10 символов'
  } 
}

export const emailValidate = {
  required: REQUIRED_FIELD,
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'Enter a valid e-mail address',
  },

}

export const selectValidate = { 
  required: "Выберите что-нибудь"
}