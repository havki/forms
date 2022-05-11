const REQUIRED_FIELD = "Обязательно для заполнения";

export const nameValidate = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Логин не может содержать русские буквы";
    }
    return true;
  },
  minLength: {
    value: 3,
    message: "Логин должен содержать 3 символа",
  },
  maxLength: {
    value: 10,
    message: "Логин не больше 10 символов",
  },
};

export const emailValidate = {
  required: REQUIRED_FIELD,
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Enter a valid e-mail address",
  },
};

export const selectValidate = {
  required: "Выберите что-нибудь",
};

export const textValidate = {
  required: REQUIRED_FIELD,
  maxLength: {
    value: 200,
    message: "Текст не более 200 символов",
  },
};

export const dateValidate = {
  required: "Выберите дату",
  validate: (value) => {
    console.log(value);
    const selectedDate = Date.parse(value);
    console.log(Date.now() + ">" + selectedDate);

    if(value.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)){
      return 'Неверный формат'
    }

    if (selectedDate < Date.now() - 86400000) {
      return "Выберите дату наперёд";
    }

    // console.log(selectedDate,Date.now());
    return true;
  },
};

export const cbValidate = {
  validate: (value) => {
    if (value.length < 2) {
      return "Выберите два";
    }
    return true;
  },
};

// var myDate = Date.parse("Thu May 12 2022");
//     const selectedDate = Date.parse(value);

//      let rounded =  myDate * 0.00001
//      console.log(new Date(rounded));
//      console.log(myDate +"="+rounded + '='+ selectedDate);

//     // console.log(selectedDate, Date.parse(myDate));

//     // let some = Date.now()-diff;
//     // console.log(some);

//     let diff = 0
//     if(selectedDate < Date.now()){
//       diff = Date.now()- selectedDate;
//       // console.log('выбраная дата меньше на '+diff + ' c');
//     }
