export const jsonHeader = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
//This is from front end i.e react code, so when we send a data from front end we should receive it by using a parameter,
// so the same parameter we need to use for backend.
/*
var parameter = {
    _id:"sfsdfs242143",

    updateData: {
      componentName:"keyboard",
      type:"keyboard"
    }
}
*/
export const postRequest =  async (url, parameter) => {
  const result = await window.fetch(`${url}`,{
    method:'POST',
    headers:jsonHeader,
    body: JSON.stringify(parameter)
  });
  return await postProcessor(result);
}

export const getRequest =  async (url) => {
  const result = await window.fetch(`${url}`,{
    method:'GET',
    headers:jsonHeader
  });
  return await postProcessor(result);
}

export const  putRequest =  async (url, parameter) => {
  const result = await window.fetch(`${url}`,{
    method:'PUT',
    headers:jsonHeader,
    body: JSON.stringify(parameter)
  });
  return await postProcessor(result);
}

export const deleteRequest =  async (url, parameter) => {
  const result = await window.fetch(`${url}`,{
    method:'DELETE',
    headers:jsonHeader,
    body: JSON.stringify(parameter)
  });
  return await postProcessor(result);
}

async function postProcessor(result){
  const finalizedResult = await result.json();
  return finalizedResult;
}
