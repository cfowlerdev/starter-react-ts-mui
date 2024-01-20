import { IPageParams, IPagedResponse, useGet } from "./query";

interface ITodo {
    title: string;
    description: string;
    done: boolean;
}

export interface IGetTodoResponse extends ITodo{
    id: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICreateTodoInput extends ITodo{
}

export type IGetTodoListResponse = IPagedResponse<IGetTodoResponse>;

export const useGetTodo = (todoId: string | undefined) => 
    useGet<IGetTodoResponse>({
        endpoint: `/api/v1/todos/${todoId}`,
        key: ['getTodo'],
        options: {
            enabled: !!todoId
        }
    });

export const useGetTodoList = (params: IPageParams, enabled: boolean) =>
    // TODO: forward params to useGet
    useGet<IGetTodoListResponse>({
        endpoint: `/api/v1/todos`,
        key: ['getTodoList'],
        options: {
            enabled
        }
    });
