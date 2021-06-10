export const APOD_REQUEST = 'APOD_REQUEST';
export const APOD_SUCCESS = 'APOD_SUCCESS';
export const APOD_FAIL = 'APOD_FAIL';


export function actionsApod(date) {
    console.log('action Date', date)
    return {
        type: APOD_REQUEST, payload: {date},
    };
}
