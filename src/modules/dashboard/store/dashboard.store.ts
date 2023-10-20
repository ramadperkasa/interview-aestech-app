import { defineStore } from 'pinia';
import http from '@/plugins/axios';

import { State } from '../types/branch.types'

export const useDashboardStore:any = defineStore('dashboard', {
    state: () : State => ({
        branch: {
            loading: true,
            data: [],
        }
    }),
    actions: {
        /**
            * @description Get branch list
            * @param {String} url
            * @param {Object} payload
            * @param {String} field
            * @param {Object} requestConfig
            * @url /branch
            * @method GET
            * @returns {Promise} Promise object
        */
        async fetchData(
            url: string,
            payload: object,
        ): Promise<any> {
            try {
                this.branch.loading = true;

                const response = (await http.get(url, payload));

                this.branch.data = response.data

                return Promise.resolve(response);
            } catch (error) {
                console.log(error)
                return Promise.reject(error);
            } finally {
                if (this.branch) {
                    this.branch.loading = false;
                }
            }
        },
    },
})
