export const initialState = {
    user : null,
    playlist : [],
    playing : false,
    item : null,
    //remove token value later 
    //token: 'BQCUJ_nd_6TV167dSEBDBdjAKxn4J_VlXiZy5cAuY73UPBgSzXrxFWPKgKNQYAqHt2w6EsDTr0pbuHCq56WBir1sxbSnxMT4QtcrD3SgZDzfDkPjFc4CbWjGJszKweX59BxOWOxKnW4esCz-cAv5WFJ6BslPRIKvbjzdCkxGGogxacrV4A6Z',

};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "SET_TOKEN":
        return{
          ...state,
          token :action.token,
        };

      case "SET_PLAYLISTS": 
        return{
          ...state,
          playlists : action.playlists,
        };  
            
        default : 
        return state;
    }
};

export default reducer;