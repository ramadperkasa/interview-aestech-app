import { defineStore } from 'pinia';
import http from '@/plugins/axios';

import { Root } from '../types/profile.types'

export const useProfileStore:any = defineStore('profile', {
    state: () : {profile: {loading: boolean, data: [Root] | null}} => ({
        profile: {
            loading: true,
            data: null,
        }
    }),
    actions: {
        /**
            * @description Get profile list
            * @param {String} url
            * @param {Object} payload
            * @param {String} field
            * @param {Object} requestConfig
            * @url /profile
            * @method GET
            * @returns {Promise} Promise object
        */
        async fetchData(
            url: string,
            payload: object,
        ): Promise<[Root]> {
            try {
                this.profile.loading = true;

                const response: [Root] = (await http.get(url, payload)).data;

                this.profile.data = response;

                return Promise.resolve(response);
            } catch (error) {
                console.log(error)
                return Promise.reject(error);
            } finally {
                if (this.profile) {
                    this.profile.loading = false;
                }
            }
        },
    },
})
