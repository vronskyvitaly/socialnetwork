



export type PostsDataType = {
    id:number
    message:string
}

/*const posts:PostsDataType[] = [
    {id:1 , message:"One message"},
    {id:2 , message:"Two message"},
]*/

export type DialogsDataType = {
    id:number
    name:string
}

/*const dialogsData:DialogsDataType[] = [
    {id:1 , name:"Виталий"},
    {id:2 , name:"Влад"},
    {id:3 , name:"Саша"},
    {id:4 , name:"Артем"},
]*/

export type MessagesDataType = {
    id:number
    message:string
}

/*const messagesData:MessagesDataType[] = [
    {id:1 , message:"Привет как дела?"},
    {id:2 , message:"Что делаешь"},
    {id:3 , message:"Завтра встретимся?"},
]*/



export type StateType = {
    profilePage: {
        posts :PostsDataType[]
    }
    dialogsPage:{
        dialogs: DialogsDataType[]
        messages: MessagesDataType[]
    }

}

export const state:StateType = {

    profilePage: {
        posts: [
            {id:1 , message:"One message"},
            {id:2 , message:"Two message"},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id:1 , name:"Виталий"},
            {id:2 , name:"Влад"},
            {id:3 , name:"Саша"},
            {id:4 , name:"Артем"},
        ],
        messages: [
            {id:1 , message:"Привет как дела?"},
            {id:2 , message:"Что делаешь"},
            {id:3 , message:"Завтра встретимся?"},
        ]
    }


}