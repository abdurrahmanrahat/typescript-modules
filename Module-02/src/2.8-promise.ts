{
  // Basic promise

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  // fetch data
  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
    return data;
  };
  getTodo();

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling createPromise function
  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    // console.log(data);
    return data;
  };

  showData();

  //
}
