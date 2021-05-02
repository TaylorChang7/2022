

function main() {
    // Initialize the dictionary to look up 
    var container = {
        '0': 'Zero',
        '1': 'One',
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five',
        '6': 'Six',
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine'
    }

    var res = "";
    n = process.argv.length; 

    for (var i = 2; i < n;i++) {
        // Starting at 2 because that is the actual input that we want from command line argument
        curr_numb = process.argv[i];
        if (curr_numb.length == 1) {
            // If a current number has a length of 1, we just need to add the corresponding string to that value 
            if (curr_numb in container) {
                res += container[curr_numb];
            }
            // This is to stop adding comma when we are at the end of iteration
            if (i < n -1) {
                res += ",";
            }
        } else {
            // If the current number has more than 1 digit, then we must iterate through each digit to add its corresponding string to that number
            for(var j = 0; j < curr_numb.length;j++) {
                if (curr_numb[j] in container) {
                    res += container[curr_numb[j]];
                }
            }
            // Same as above
            if (i < n - 1) {
                res += ",";
            }
        }
    }
    // Print out the result
    console.log(res)


}
main()