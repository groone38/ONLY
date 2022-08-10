export function requestServer(ms: number) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(() => {});
        console.log("Ответ от сервера...........");
      }, ms)
    );
  }