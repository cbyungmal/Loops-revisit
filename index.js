/*
1. Write a function that will print
   all even numbers up to a given 
   input. It should work with odd numbers.


**HINT: Is there a way you can change the increment on a 
for loop?


EXAMPLE: 

evenPrint(10) => 2,4,6,8,10
evenPrint(20) => 2,4,6,8,10,12,14,16,18,20

evenPrint(9) => 2,4,6,8
evenPrint(13) => 2,4,6,8,10,12
*/


function evenPrint(number){
  //CODE BELOW HERE
# list of numbers 
list1 = [10, 21, 4, 45, 66, 93] 
  
# iterating each number in list 
for num in list1: 
      
    # checking condition 
    if num % 2 == 0: 
       print(num, end = " ") 

  //CODE ABOVE HERE
}







/*
2. Write a function that will print
   all odd numbers up to a given 
   input. It should work with even numbers.


**HINT: Is there a way you can change the increment on a 
for loop?


EXAMPLE: 

oddPrint(9) => 1,3,5,7,9
oddPrint(21) => 1,3,5,7,9,11,13,15,17,19,21

oddPrint(10) => 1,3,5,7,9
oddPrint(12) => 1,3,5,7,9,11
*/


function oddPrint(number){
  //CODE BELOW HERE
start, end = 4, 19
  
# iterating each number in list 
for num in range(start, end + 1): 
      
    # checking condition 
    if num % 2 != 0: 
        print(num, end = " ") 

  //CODE ABOVE HERE
}







/*
3. Write a function that will print
   all numbers up to a given 
   input but display even if the number is even
   and odd if the number is odd. Start your loop at 0.


EXAMPLE: 

evenOdd(5) => even, odd, even, odd, even, odd
*/


function evenOdd(number){
  //CODE BELOW HERE
{
    int even_count = 0;
    int odd_count = 0;
    while (n > 0) 
    {
        int rem = n % 10;
        if (rem % 2 == 0)
            even_count++;
        else
            odd_count++;
        n = n / 10;
    }
    if (even_count % 2 == 0 && 
         odd_count % 2 != 0)
        return 1;
    else
        return 0;
}

  //CODE ABOVE HERE
}





/*
4. Write a function that will print
   all numbers counting up to a given 
   input. 


EXAMPLE: 

countUp(10) => 1,2,3,4,5,6,7,8,9,10
*/


function countUp(number){
  //CODE BELOW HERE
if (n == 1) {
  return 1;
  //CODE ABOVE HERE
}



/*
5. Write a function that will print
   all numbers counting down from a given 
   input to 1. 


EXAMPLE: 

countDown(10) =>10,9,8,7,6,5,4,3,2,1
*/


function countDown(number){
  //CODE BELOW HERE
for (int i = N; i > 0; i--)
 //CODE ABOVE HERE
}