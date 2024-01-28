export const urlAPI: string = 'https://api.unsplash.com';

export function validationEmail(email: string){
  let reg = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
  let valid = reg.test(email);
	return valid
}

export function validationPass(pass: string){
	return pass != '' && pass != " "
}