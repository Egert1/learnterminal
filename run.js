function write(string){
    process.stdout.write(string);
}

write('\x1B[1m'); write('hello'); write('\x1B[0m'); write('\n');

write('\x1B[2m'); write('hello'); write('\x1B[0m'); write('\n');

write('\x1B[3m'); write('hello'); write('\x1B[0m'); write('\n');

write('\x1B[4m'); write('hello'); write('\x1B[0m'); write('\n');

write('\x1B[5m'); write('hello'); write('\x1B[0m'); write('\n');

write('\x1B[6m'); write('hello'); write('\x1B[0m'); write('\n');

write('\x1B[7m'); write('hello'); write('\x1B[0m'); write('\n');

write('\x1B[8m'); write('hello'); write('\x1B[0m'); write('\n');

write('\x1B[9m'); write('hello'); write('\x1B[0m'); write('\n');

for(let i=30; i<40; i++){
    if(i==38) continue;
    // colors
    write('\x1B[1;'+i+'m'); write('color code number' +i); write('\x1B[0m'); write('\n');
}

for(let i=30; i<40; i++){
    if(i==38) continue;
    // colors
    write('\x1B[2;'+i+'m'); write('color code number' +i); write('\x1B[0m'); write('\n');
}

// for(let i=0; i<16; i++){
//    for (let j=0; j<16; j++);
//        let color = i*j;
    // colors
//    write('\x1B[38;5;'+color+'m'); write(color); write('\x1B[0m');
//}

for(let i=40; i<50; i++){
    if(i==48) continue;
    // backcolors
    write('\x1B[1;'+i+'m'); write('color code number' +i); write('\x1B[0m'); write('\n');
}

for(let i=40; i<50; i++){
    if(i==48) continue;
    // backcolors
    write('\x1B[2;'+i+'m'); write('color code number' +i); write('\x1B[0m'); write('\n');
}

console.clear();
let date = new Date().toString();
write(date);
setInterval(()=> {
    write('\x1B['+ date.length + 'D');
    date = new Date().toString();
    write(date);
},1);


