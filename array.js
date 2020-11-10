//1
var prompt = require('prompt-sync')();
let numbers = new Array(10);

for(var i = 0; i < 10; i++)
{
    let number = Math.floor(100 + Math.random() * 900);
    numbers[i] = number;
} 

let digits = [...numbers];
let min = 9999;
let max = 0;
let maxindex = 0;
let minindex = 0;

console.log(digits);
let max1 = maximum(digits);
let digits2 = [...digits];
digits2[maxindex] = 0;
max = 0;
let max2 = maximum(digits2);
console.log("Second largest : " + max2);

let min1 = minimum(digits);
let digits3 = [...digits];
digits3[minindex] = 9999;
min = 9999;
let min2 = minimum(digits3);
console.log("Second smallest : " + min2);

function maximum(d)
{
    for(var j = 0; j < 10; j++)
    {
        if(d[j] > max)
        {
            max = d[j]; 
            maxindex = j;
        }
    }
    return max;
}

function minimum(d)
{
    for(var k = 0; k < 10; k++)
    {
        if(d[k] < min)
        {
            min = d[k]; 
            minindex = k;
        }
    }
    return min;
}


//2
numbers.sort();
console.log(numbers);
console.log("Second largest : " + numbers[8]);
console.log("Second smallest : " + numbers[1]);

//3
let number3 = parseInt(prompt('Enter a number to find prime factors: '));
let count = 0;
let primefactors = new Array();

while(number3 % 2 == 0)
{
    primefactors[count] = 2;    
    number3 = number3 / 2;
    count++;
}

for(var i = 3; i <= Math.sqrt(number3); i = i + 2)
{
    while(number3 % i == 0)
    {
        primefactors[count] = i;
        number3 = number3 / i;
        count++;
    }
}

if(number3 > 2)
{
    primefactors[count] = number3;
}

console.log("Prime factors of " + number3 + " : " + primefactors);

//3
arr = [0, -1, 2, -3, 1]; 
findTriplets(arr, 5);

function findTriplets(arr, n) 
{ 
    let found = true; 
    for (var i=0; i<n-2; i++) 
    { 
        for (var j=i+1; j<n-1; j++) 
        { 
            for (var k=j+1; k<n; k++) 
            { 
                if (arr[i]+arr[j]+arr[k] == 0) 
                { 
                    console.log("{ "+ arr[i] + "," + arr[j] + "," + arr[k] + " }");
                    found = true; 
                } 
            } 
        } 
    } 
  
    // If no triplet with 0 sum found in array 
    if (found == false) 
    {
        console.log("Triplets do not exist");
    }
} 

//5
let num = new Array(9);
let c = 0;

for(var i = 0; i <=100; i++)
{
    if(i % 11 == 0 && i != 0)
    {
        num[c] = i;
        c++;
    }
}
console.log(num);