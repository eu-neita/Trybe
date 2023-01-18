const picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'DD/MM/YYYY',
    toString(date, format) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        const year = date.getFullYear();
        if (date.getDate() < 10 ){
          day = `0${date.getDate()}`;
        }
        if(month < 10){
          month = `0${date.getMonth()}`;
        }
    return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});

const SUBMIT_BUTTON = document.querySelector('#submit');

SUBMIT_BUTTON.addEventListener('click', (event) => {


})

const validation = new JustValidate('#form');

validation
  .addField('#fullName', [
    {
      rule: 'minLength',
      value: 7,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
    rule: 'required',
    errorMessage: 'Full name is required',
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);
  