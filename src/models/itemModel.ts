export interface Item{
    id: string;
    name:string;
    description:string;
    location: string;
    date:string;
    status:'lost' | 'found';
    contactInfo:string;
    imageUrl?:string;
}