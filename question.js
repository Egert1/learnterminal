import inquirer from "inquirer";
inquirer
    .prompt([
        {type:'input', name:'age', message: 'How old are you?'},
        {type:'number', name:'eyes', message: 'How many eyes do you have?'},
        {type:'confirm', name:'ask', message: 'Are you alive?'},
        {type:'list', name:'gender', message: 'What gender are you?', choices:["male", "female", "NonBinary"]},
        {type:'rawlist', name:'food', message: 'Which food would you choose to eat?', choices:["pizza", "burger", "salad", "noodles", "cheese", "meat"]},
        {type:'expand', name:'feeling', message: 'Are you okay?',key:"y", choices:["yes", "no","maybe"]},
        {type:'checkbox', name:'like', message: 'Do you like any of these?'},
        {type:'password', name:'important', message: 'Tell me something important.'},
        {type:'editor', name:'', message: 'How old are you?'},
    ])
    .then((answer)=>{
        console.log(`I am ${answer.age} years old`); 
        console.log(`I have ${answer.eyes} eyes`);
        console.log(`${answer.ask}, I have a phone`);
        console.log(`I am ${answer.gender}`);
        console.log(`I like ${answer.food}`);
        console.log(`${answer.feeling}`);
        console.log(`Yes, I like ${answer.like}`);
        console.log(`${answer.important}`);
        console.log(`I have ${answer.eyes} eyes`);
    })
