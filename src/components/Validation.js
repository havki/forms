export const nameValidate = {
  required:'Обязательно для заполнения ',
  validate:(value)=>{
    console.log(value);
    if(value.match(/[а-яА-Я]/)){
      return 'Логин не может содержать русские буквы'
    }
    return true
  }
}