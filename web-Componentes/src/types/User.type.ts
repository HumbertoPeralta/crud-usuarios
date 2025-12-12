export type UserResponse = {
    users: User[];
}

export type User = {
    id: number;
    name: string;
    email: string;
    created: string; 
};