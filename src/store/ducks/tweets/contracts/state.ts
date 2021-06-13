export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export enum AddFormState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Tweet {
    _id: string,
    text: string;
    createdAt: string;
    images?: [];
    user: {
        fullName: string;
        username: string;
        avatarUrl: string;
    }
}

export interface TweetsState {
    items: Tweet[];
    loadingState: LoadingState;
    addFormState: AddFormState;
}