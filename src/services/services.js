import Axios from "@/libs/axios";
import endPoints from "./constants";

export default class Services {

    static async getAll() {
        try {
            console.log('[getAll][Services] Get request sent');
            return await Axios.get(endPoints.cfList)
        } catch (error) {
            console.error('[getAll][Services] Error during getAll request', error);
            throw new Error(error)
        }
    }

    static async getOne(id) {
        try {
            console.log('[getOne][Services] Get request sent');
            return await Axios.get(endPoints.cfList / + id)
        } catch (error) {
            console.error('[getOne][Services] Error during getOne request', error);
            throw new Error(error)
        }
    }
}