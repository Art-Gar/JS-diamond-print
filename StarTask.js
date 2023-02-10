
function PrintDiamond(length,symbol)
{
    console.log(symbol.padStart(50-length, " ")); //prints out the character string
    if(length==0) return;
    else //prevents the middle from printing twice
    {
        PrintDiamond(length-1,symbol + symbol.charAt(0) + symbol.charAt(0)); //the function calls on itself
        console.log(symbol.padStart(50-length, " ")); //makes the star centered, up to 50 characters
    }
}


var length=5, //length of the diamond side
    symbol='*'; //chosen symbol to display the diamond as

PrintDiamond(length,symbol);