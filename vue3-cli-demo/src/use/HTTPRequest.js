import {
    reactive
} from "vue";


export default function HTTPRequest(url) {
    let data = reactive([]);
    fetch(url)
        .then(response => response.json())
        .then(d => Object.assign(data, d));

    return data;
}