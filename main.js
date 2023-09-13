let a=parseInt(prompt("Enter the number of elements"))

document.write(`Number = ${a}<br><br>`)

var count=0
var sum=0

for(i=1;i<=a;i++){
	if(i%2!=0){
		count=count+1
		sum=sum+i
	}
	
}
document.write(`Number of Odd numbers =${count}<br>`)
document.write(`Odd numbers Sum =${sum}<br>`)