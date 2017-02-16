const ADD_DEVELOPER = 'ADD_DEVELOPER';

export function addDeveloper(name){
    return {
        type : ADD_DEVELOPER,
        name: name
    }
}