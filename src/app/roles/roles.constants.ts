import {User} from './roles.model';

export const displayedColumns: string[] = [
  'Employee Name',
  'Email',
  'Contact',
  'ID',
  'Grade',
  'Department',
];

export const userDetails: User[] = [
  {
    name: 'John Doe',
    email: 'Johndoe123@gmail.com',
    contact: '09900 00909',
    id: 'EMP01',
    grade: 'Class A',
    department: 'General',
  },
  {
    name: 'Smith Christian',
    email: 'smithchristian@gmail.com',
    contact: '09900 00909',
    id: 'EMP02',
    grade: 'Class A',
    department: 'General',
  },
  {
    name: 'John Doe',
    email: 'Johndoe123@gmail.com',
    contact: '09900 00909',
    id: 'EMP03',
    grade: 'Class B',
    department: 'General',
  },
  {
    name: 'John Doe',
    email: 'Johndoe123@gmail.com',
    contact: '09900 00909',
    id: 'EMP01',
    grade: 'Class A',
    department: 'General',
  },
  {
    name: 'Smith Christian',
    email: 'smithchristian@gmail.com',
    contact: '09900 00909',
    id: 'EMP01',
    grade: 'Class A',
    department: 'General',
  },
  {
    name: 'John Doe',
    email: 'Johndoe123@gmail.com',
    contact: '09900 00909',
    id: 'EMP01',
    grade: 'Class A',
    department: 'General',
  },
  {
    name: 'John Doe',
    email: 'Johndoe123@gmail.com',
    contact: '09900 00909',
    id: 'EMP01',
    grade: 'Class A',
    department: 'General',
  },
  {
    name: 'Smith Christian',
    email: 'smithchristian@gmail.com',
    contact: '09900 00909',
    id: 'EMP01',
    grade: 'Class A',
    department: 'General',
  },
];

export const menuTab = [
  {
    label: 'Employee management',
    content: 'Employee management',
    icon: 'employee',
  },
  {label: 'Trip policy', icon: 'trip'},
  {label: 'Department', icon: 'department'},
  {label: 'Roles & Privilege', icon: 'roles'},
  {label: 'Employee grade', icon: 'grade'},
  {label: 'Reports', icon: 'report'},
];
