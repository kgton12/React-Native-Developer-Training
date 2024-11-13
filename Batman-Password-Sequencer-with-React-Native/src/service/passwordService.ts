export default function generatePass(): string {
    let password = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/~";
    const charactersLength = 12;

    for (let i = 0; i < charactersLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}
