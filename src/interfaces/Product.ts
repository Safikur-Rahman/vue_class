export interface Product{
    id:number;
    name: string;
    category_id: number;
    description: string;
    price: number;
    discount: number;
    quantity: number;
    photo: File|null;
    file:null
}
export const defaultProduct: Product = {
    id: 0,
    name: "",
    category_id: 0,
    description: '',
    price: 0,
    discount: 0,
    quantity: 0,
    photo: null,
    file: null,

}