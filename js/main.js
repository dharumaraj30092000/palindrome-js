var input=12321;
var ex=input;
var result=0;
while(input>0){
	var rem=input%10;
	input=(input-rem)/10;
	result= rem+(result*10);
}
var end=(result===ex) ? console.log("this is palindrome"):console.log("this not palindrome");