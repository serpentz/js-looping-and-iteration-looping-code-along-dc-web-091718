function printBadges(arr){
	for (let x = 0; arr.length > x ; x++){
		console.log(`Welcome ${arr[x]}! You are employee #${x+1}.`)
	}
	return arr
}

function tailsNeverFails(){
   let tails = 0;
   while (Math.random() >= 0.5){
     tails++;
 } 
     return `You got ${tails} tails in a row!`
 }
