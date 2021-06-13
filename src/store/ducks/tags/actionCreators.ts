import {LoadingState, TagsState} from "./contracts/state";
import {Action} from "redux";

export enum TagsActionsType {
    SET_ITEMS= 'tags/SET_ITEMS',
    FETCH_ITEMS= 'tags/FETCH_ITEMS',
    SET_LOADING_STATE= 'tags/SET_LOADING_STATE',
}

// interface
export interface SetTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_ITEMS;
    payload: TagsState['items'];
}

export interface FetchTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.FETCH_ITEMS;
}

export interface SetTagsLoadingStateInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

// actions
export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
    type: TagsActionsType.SET_ITEMS,
    payload,
})

export const fetchTags = (): FetchTagsActionInterface => ({
    type: TagsActionsType.FETCH_ITEMS,
})

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateInterface => ({
    type: TagsActionsType.SET_LOADING_STATE,
    payload,
})

export type TagsActions = SetTagsActionInterface | FetchTagsActionInterface | SetTagsLoadingStateInterface;
