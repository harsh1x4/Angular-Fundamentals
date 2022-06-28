import { Profile } from './profile';
import { Technology } from './technology';

export class User {
    userName: string | undefined;
    age: number | undefined;
    gender: string| undefined;
    isMarried: boolean| undefined;
    isTCAccepted: boolean| undefined;
    profile!: Profile;
    technologies!: Technology[];
} 