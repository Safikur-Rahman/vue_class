export interface PostFake{
    id:number;
    userId: number;
    title: string;
    body: string;
}
export const defaultPostFake: PostFake = {
    id: 0,
    userId: 0,
    title: "",
    body: ""

}