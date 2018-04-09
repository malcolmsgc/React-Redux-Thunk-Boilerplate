const startState = {
    appIsInteractive: false
};

function appMeta (state = startState, action) {
    switch (action.type) {
        case ("APP_INTERACTIVE"):
            return {
                ...state,
                appIsInteractive: action.isInteractive
            };

            default: return state;
    }
}

export default appMeta;