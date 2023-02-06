//"target": "es2017"
let humanReadable = (seconds: number): string => {
    let hours:number = 0;
    let minutes:number = 0;

    hours = Math.floor((seconds/60)/60)
    minutes = Math.floor((seconds/60)%60)==60 ? 59:Math.floor((seconds/60)%60)
    seconds = seconds % 60 ;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
// console.log(humanReadable(0)) //, '00:00:00'
// console.log(humanReadable(5))//, '00:00:05'
// console.log(humanReadable(60))//, '00:01:00'
// console.log(humanReadable(86399))//, '23:59:59'
// console.log(humanReadable(359999))//, '99:59:59' 
// console.log(humanReadable(3800))//, '99:59:59' 
// console.log(humanReadable(0))//, '00:00:00' 
// console.log(humanReadable(59))//, '00:00:59' 
// console.log(humanReadable(310656))//, '86:17:36' 

// Time : 60minutes