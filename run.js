function write(string){
    process.stdout.write(string);
}
import chalk from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('Hello Chalk'))


for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        let color = (i*j).toString()
        write(chalk.ansi256(color)(color.padEnd(4,' ')));
    }
    write('\n');
}

write(boxen(chalk.blue.bgGreen('Hello Chalk'),{
    padding: 1,
    margin: 1
}));

write(boxen(chalk.blue.underline.bold.bgWhite('Hello Chalk'),{
    padding: 2,
    margin: 1
}));

write(boxen(chalk.blue.bold.bgRed('Hello Chalk'),{
    padding: 1,
    margin: 1
})); 

write(boxen(chalk.white.italic.bold('Hello Chalk'),{
    padding: 1,
    margin: 1
}));

write(boxen(chalk.white.underline.bgRed('Hello Chalk'),{
    padding: 1,
    margin: 1
}));

write(boxen(chalk.blue.bold('Hello Chalk'),{
    padding: 2,
    margin: 1
}));