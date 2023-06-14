import inquirer from "inquirer";
inquirer
    .prompt([
        {type:'input', name:'age', message: 'How old are you?'},
        {type:'number', name:'eyes', message: 'How many eyes do you have?'},
        {type:'confirm', name:'ask', message: 'Are you alive?'},
        {type:'list', name:'gender', message: 'What gender are you?', choices:["male", "female", "NonBinary"]},
        {type:'rawlist', name:'food', message: 'Which food would you choose to eat?', choices:["pizza", "burger", "salad", "noodles", "cheese", "meat"]},
        {type:'expand', name:'feeling', message: 'Are you okay?',key:"y", choices:["yes", "no","maybe"]},
        {type:'checkbox', name:'like', message: 'What are your 2 favourite drinks', choices:["Coca-Cola", "Sprite", "Pepsi", "Kali","Fanta", "Neste", "7Up"],
          validate: function (answer) {
            if (answer.length < 2) {
              return 'You must select at least two drinks.';
            }
            return true;
          }},
        {type:'password', name:'password1', message: 'Enter your password', validate: requireLetterAndNumber},
        {type:'editor', name:'review', message: 'How did you like your meal?', default: '//Start typing your review here'}
    ])
    .then((answer)=>{
        console.log(`I am ${answer.age} years old`); 
        console.log(`I have ${answer.eyes} eyes`);
        console.log(`${answer.ask}, I have a phone`);
        console.log(`I am ${answer.gender}`);
        console.log(`I like ${answer.food}`);
        console.log(answer.feeling);
        console.log(`I will take the ${answer.like}`);
        console.log(answer.password1);
        console.log(answer.review);
    })
