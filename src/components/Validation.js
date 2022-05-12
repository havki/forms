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
    message: "Неверный формат ввода",
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
    const selectedDate = Date.parse(value);
    if (isNaN(selectedDate)) {
      return "Введите верный формат";
    }

    if (selectedDate < Date.now() - 86400000) {
      return "Выберите дату наперёд";
    }

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
