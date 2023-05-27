import {ref} from "vue";

export const addUserVis = ref(false);


export function setPopupVisibility(vis: boolean) {
    addUserVis.value = vis;
}