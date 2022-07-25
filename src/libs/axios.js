import init from "./instence";

export default class Axios {

    static async get(url) {
        try {
            console.log('[Get][Axios]Get request sent');
            const response = await init.get(url);
            if (response.status !== 200) {
                return [];
            }
            return response.data;
        } catch (error) {
            console.error('[Get][Axios] Error during get request', error);
            throw new Error(error)
        }
    }

}