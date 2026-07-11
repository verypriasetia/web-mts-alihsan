/**
 * ==========================================
 * API WEBSITE MTs AL IHSAN
 * Versi : 0.4
 * ==========================================
 */

class API {

    constructor() {
        this.baseUrl = CONFIG.apiUrl;
    }

    async get(page, params = {}) {

        if (!this.baseUrl) {
            console.warn("API belum dikonfigurasi.");
            return [];
        }

        // parameter wajib
        const query = new URLSearchParams({
            page,
            ...params
        });

        try {

            const response = await fetch(
                `${this.baseUrl}?${query.toString()}`
            );

            return await response.json();

        } catch (error) {

            console.error(error);

            return [];

        }

    }

}

const api = new API();