import {ref} from "vue";

export const addTransactionModalVis = ref(false);
export const addNewDepositCreditModalVis = ref(false);

export function setPopupVisibility(vis: boolean) {
    addTransactionModalVis.value = vis;
}
export function setNewCreditPopupVis(vis: boolean){
    addNewDepositCreditModalVis.value = vis;
}
export function unsetVars(){
    addTransactionModalVis.value = false;
    addNewDepositCreditModalVis.value = false;
}