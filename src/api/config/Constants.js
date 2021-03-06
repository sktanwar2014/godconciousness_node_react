export const API_URL = 'http://gc.connectivitysoftwaresolutions.com'; // Config[KEY].API_URL;
export const AUTH_URL = 'http://gc.connectivitysoftwaresolutions.com'; // Config[KEY].AUTH_URL;
export const API_CONSUMER = 'http://gc.connectivitysoftwaresolutions.com'; // Config[KEY].API_URL;
export const FTP_URL = 'http://gcadmin.connectivitysoftwaresolutions.com'; // Config[KEY].API_URL;

// export const API_URL = 'http://localhost:5000'; // Config[KEY].API_URL;
// export const AUTH_URL = 'http://localhost:5000'; // Config[KEY].AUTH_URL;
// export const API_CONSUMER = 'http://localhost:5000'; // Config[KEY].API_URL;
// export const FTP_URL = 'http://localhost:5001'; // Config[KEY].API_URL;


export const APP_TOKEN = {
    set: ({userName, name, token}) => {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('userName', userName);
        sessionStorage.setItem('name', name);
    },
    get: () => ({
        token: sessionStorage.getItem('token'),
        userName : sessionStorage.getItem('userName'),
        name : sessionStorage.getItem('name'),
    }),
    remove: () => {
        sessionStorage.clear();
    },
    get notEmpty() {
        const cond1 = this.get().token !== null;
        const cond2 = this.get().token !== '';
        return cond1 && cond2;
    }
}