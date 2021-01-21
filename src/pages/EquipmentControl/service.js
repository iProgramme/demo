import request from '@/utils/request';

export async function queryRule(params) {
    console.log(params)
    return request('http://127.0.0.1:7001/rule', {
        params,
    });
}
export async function removeRule(params) {
    return request('/api/rule', {
        method: 'POST',
        data: { ...params, method: 'delete' },
    });
}
export async function addRule(params) {
    return request('http://127.0.0.1:7001/rule', {
        method: 'POST',
        data: { ...params, method: 'post' },
    });
}
export async function updateRule(params) {
    return request('/api/rule', {
        method: 'POST',
        data: { ...params, method: 'update' },
    });
}
