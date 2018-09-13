/* eslint-disable */
export const callApi = store => next => action => {
  const callAPI = action['CALL_API'];
  if (!callAPI) {
    return next(action);
  }
  let { url, types = [], data, type } = callAPI;
  if (typeof url !== 'string' && Array.isArray(url)) {
    throw new Error('url必须是字符串或数组');
  }
  const actionWidth = data => {
    const finalAction = Object.assign({}, action, { ...data }); // 重新组装action
    delete finalAction['CALL_API'];
    return finalAction;
  };
  let [requestType, successType, failType] = types;
  if (typeof type === 'string') {
    successType = type;
  }

  requestType && next(actionWidth({ type: requestType }));
  if (typeof url === 'string') {
    return fetch(url, data)
      .then(res => res.json())
      .then(res => {
        next(actionWidth({ type: successType, data: res }));
      })
      .catch(err => {
        failType &&
          next(actionWidth({ type: failType, error: err.msg, errorObj: err }));
      });
  } else if (Array.isArray(url)) {
    let it = url.map((v, k) => fetch({ v, data: data[k] ? data[k] : {} }));
    Promise.all(it)
      .then(res => next(actionWidth({ type: successType, data: res })))
      .catch(err => {
        failType &&
          next(actionWidth({ type: failType, error: err.msg, errorObj: err }));
      });
  }
};
/* eslint-enable */
