function createFetchActions(resource:string)
{
  const triggered = `FETCH_${resource}_TRIGGERED`;
  const succeeded = `FETCH_${resource}_SUCCEEDED`;
  const failed = `FETCH_${resource}_FAILED`;
  return { triggered, succeeded, failed }
}

interface IAction{
  triggered:string,
  succeeded:string,
  failed:string
}

export {createFetchActions, IAction}
