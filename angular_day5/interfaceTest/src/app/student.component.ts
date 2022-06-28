// export interface IStudent {
//     RollNumber: number;
//     FirstName: string;
//     LastName: string;
//     Country: string;
//     Location: string;
//     ZipCode?: number;

//     getFullName(FirstName: string, LastName: string): string;

// }

// export class Student implements IStudent {
//     public RollNumber: number;
//     public FirstName: string;
//     public LastName: string;
//     public Country: string;
//     public Location?: string;

//     constructor(RollNumber: string, FirstName: string, LastName: string,Country: string) {
//         this.RollNumber: number;
//         this.FirstName: string;
//         this.LastName: string;
//         this.Country: string;
//     }

//     getFullName(FirstName: string, LastName: string)
//     {
//         return FirstName+ "+" +LastName;
//     }
// }





// export class Student {
//     private firstName: string;
//     private lastName: string;

//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }


// the equivalent of above code 

// export class Student {
//     constructor(private firstName: string, private lastName: string) {
//     }
// }

