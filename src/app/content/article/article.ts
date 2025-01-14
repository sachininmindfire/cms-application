export interface Article
{
    id: number;
    title: string;
    description: string;  
    author: string;
    date: Date
    views: number;
    likes: number;
    comments: Comment[];
    //comments: { id: number; articleId: number; comment: string; date: Date }[];
}

export interface Comment
{
    id: number;
    articleId: number;
    comment: string;
    date: Date;
    isActive: boolean;
}