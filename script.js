const passwordArea = document.getElementById("password");
const succes = document.querySelector(".success")
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");

generate.addEventListener("click", () => {
    function generatePassword(){
        function getRandomLower() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        
        function getRandomUpper() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }
    
        function getRandomNumber() {
            return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        }
    
        function getRandomSymbol() {
            const symbols = '!@#$%^&*(){}[]=<>/,.'
            return symbols[Math.floor(Math.random() * symbols.length)];
        }
    
        console.log(getRandomLower(), getRandomUpper(), getRandomNumber(), getRandomSymbol());
    
        let password = "";
    
        for (let i = 0; i < 4; i++) {
            password += getRandomLower()
        }
        for (let i = 0; i < 1; i++) {
            password += getRandomUpper()
        }
        for (let i = 0; i < 3; i++) {
            password += getRandomNumber()
        }
        for (let i = 0; i < 2; i++) {
            password += getRandomSymbol()
        }
    
        console.log(password);
    
        const shuffle = str => [...str].sort(()=>Math.random()-.5).join('');
    
        password = shuffle(password)
    
        console.log(password);

        return password;
    }
    
    passwordArea.value = generatePassword();
    
})

copy.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
	const password = passwordArea.value;
	
	if(!password) { 
        return; 
    }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
    succes.innerText='Password copied to clipboard';
    succes.classList.remove("none");
    setTimeout(() => {
        succes.classList.add("none")
    }, 2000);
})