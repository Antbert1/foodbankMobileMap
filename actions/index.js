export const DATA = 'DATA';

export function getData(data) {
    return (dispatch) => {
        dispatch({ type: DATA, data: data });
    };
}