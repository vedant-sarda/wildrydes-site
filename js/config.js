window._config = {
    cognito: {
        userPoolId: 'ap-south-1_ux3zfoaDM', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: '4kv1ajpub8r9r7ph49qm38vhqk', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'ap-south-1' // e.g. us-east-2
    },
    api: {
        invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
function generateSecretHash(username, 4kv1ajpub8r9r7ph49qm38vhqk, 1a3f2lqhfrvk9s2krtf5imbvj3j00gvarr6gs8501buhmt52osqm) {
    const message = username + 4kv1ajpub8r9r7ph49qm38vhqk;
    const hmac = crypto.createHmac('sha256', 1a3f2lqhfrvk9s2krtf5imbvj3j00gvarr6gs8501buhmt52osqm);
    hmac.update(message);
    return hmac.digest('base64');
}
