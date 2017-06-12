export const AddVEG = 'ADDVEG'
export const INCVEG = 'INCVEG'
export const DECVEG = 'DECVEG'
export function addItem(itemName,itemAmount,quantity){
    return {
        type: AddVEG,
        itemName,
        itemAmount,
        quantity
    }
}
export function incVegItem(index){
    return {
        type: INCVEG,
        index
    }
}

export function decVegItem(index){
    return {
        type: DECVEG,
        index
    }
}
