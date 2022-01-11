const incCountaction = {type:"INC_COUNT", payload:1} ; //fixed , playload optional
const decCountaction = {type:"DEC_COUNT", payload:1} ; //fixed , playload optional

class Store{
    constructor(reducer,init){   //reducer is a function ,recivided state and action 
        this.reducer = reducer;
        this.state = init;
    }

    getStore(){
        return this.state
    }

    dispatch(action){
       this.state = this.reducer(this.state,action)
    }

}

//pure function
//fixed
const reducer = (state , {type,payload}) => {
    switch(type){
        case "INC_COUNT" :
            return {...state,count:state.count + payload};
        case "DEC_COUNT" :
            return {...state,count:state.count - payload}

    }
    return state;
}

const init = {count:10};

const store = new Store(reducer,init); //fixed

console.log(store.getStore());

for(let i = 0; i < 5 ; i++){
    store.dispatch({type:"INC_COUNT", payload:1})
}

console.log(store.getStore());

store.dispatch({type:"DEC_COUNT", payload:1})

console.log(store.getStore());
