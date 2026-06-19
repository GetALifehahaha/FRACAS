let _accessToken = null;

const tokenService = {
    getAccess: () => _accessToken,

    setAccess: (token) => { _accessToken = token },

    clearAccess: () => { _accessToken = null },
}

export default tokenService