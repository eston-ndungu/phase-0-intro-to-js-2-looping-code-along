
//  Define a function that takes in two parameters
function writeCards(namesArray, eventName) {
    let thankYouMessages = [] //creates a new empty array to hold the messages(initialization)

    for (let i = 0; i < namesArray.length; i++) {
        let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`
        thankYouMessages.push(message) // Add each message to the thank you message array
    }

    return thankYouMessages; // Return array of thank you messages

}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday")) // Prints a thankyouMessage for each name

// Define a function and use the while loop
function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }

}
