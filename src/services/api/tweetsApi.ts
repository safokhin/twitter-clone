
import {Tweet} from "../../store/ducks/tweets/contracts/state";
import {axios} from "../../core/axios";

interface Response<T> {
    status: string,
    data: T
}

export const TweetsApi = {
    async fetchTweets(userId: string): Promise<Response<Tweet[]>> {
        const {data} = await axios.get(userId ? `/tweets/user/${userId}` : '/tweets');
        return data.data;
    },
    async fetchTweetData(id: string): Promise<Tweet> {
        const {data} = await axios.get<Response<Tweet>>('/tweets/' + id);
        return data.data;
    },
    async addTweet(payload: { textTweet: string, images: string[] }): Promise<Tweet> {
        const {data} = await axios.post<Response<Tweet>>('/tweets', payload);
        return data.data;
    },
    removeTweet: (id: string) => axios.delete('/tweets/' + id),
}
