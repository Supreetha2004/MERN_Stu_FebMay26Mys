function tagPassword(password) {
    if (typeof password !== "string") {
        return "INVALID";
    }
   const length = password.length;

    if (length < 8) {
        return "WEAK";
    }
    if (length >= 12 ) {
        return "STRONG";
    } else if (length >= 8) {
        return "MEDIUM";
    } else{
        return "WEAK";
    }
}
console.log(tagPassword("abc"));          // WEAK
console.log(tagPassword("abc12345"));     // MEDIUM
console.log(tagPassword("Abc123456789")); // STRONG
console.log(tagPassword(12345678));       // INVALID