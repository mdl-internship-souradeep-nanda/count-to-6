/**
 * Takes an username and returns a greeting as String
 * @param {String} username
 * @return {String}
 */
function greetUser(username) {
    if (!username) {
        return 'Error: Username cannot be null or undefined.';
    }
    username = username.toString();
    let greeting = `Hello, ${username}!\nYour name lowercased is "${username.toLowerCase()}".`;
    return greeting;
}

module.exports.greetUser = greetUser;
const username = process.argv[2];
console.log(greetUser(username));
