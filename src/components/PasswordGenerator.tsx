import {useEffect} from 'react'

function PasswordGenerator(
    {dummy, length, includeSymbols, includeNumbers, includeLowercase, includeUppercase, returnPass}:
    {dummy: number, length: number, includeSymbols:boolean, includeNumbers:boolean, includeLowercase:boolean, includeUppercase:boolean, returnPass?:(p: string) => void}){
    
    const [finalPassword, setFinalPassword] = useState("");
    
    useEffect(() => {
        // Function to generate the password
        function generatePassword() {
            const symbols = '!@#$%^&*()_|+?><:{}[];,./~`-=';
            const numbers = '0123456789';
            const lowercase = 'abcdefghijklmnopqrstuvwxyz';
            const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

            let characters = '';

            if (includeSymbols) characters += symbols;
            if (includeNumbers) characters += numbers;
            if (includeLowercase) characters += lowercase;
            if (includeUppercase) characters += uppercase;

            let generatedPassword = '';
            for (let i = 0; i < length; i++) {
                generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            returnPass?.(generatedPassword);

            //return generatedPassword;
        }

        // Generate the password when the component mounts or when any of the dependency props change
        setFinalPassword(generatePassword());
        }, [dummy, length, includeSymbols, includeNumbers, includeLowercase, includeUppercase]);
    
    return (
        <>
        </>
    );
    
}

export default PasswordGenerator;