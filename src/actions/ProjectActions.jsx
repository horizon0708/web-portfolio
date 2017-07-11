import dispatcher from "../dispatcher";

export function loadData(data) {
    dispatcher.dispatch({
        type: "LOAD_DATA",
        data: data
    });
}
