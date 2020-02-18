import User, {creatURL,gravatr} from './src/user';

// @ts-ignore
const codecasts = new User('codecasts','i@codecasts.com');
const profile = creatURL(codecasts.name);

console.log(profile);