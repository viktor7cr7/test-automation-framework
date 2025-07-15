type Handler = (route: { fulfill: (data: object) => string }) => string;

class TestIntercept {
  page = {
    route: (url: string, handler: Handler) => {
      const mockRoute = {
        fulfill: (data: object) => JSON.stringify(data),
      };
      return handler(mockRoute); // Вызов реального handler
    },
  };

  @getParam
  callRoute() {
    this.page.route('example.com', (route) => route.fulfill({ name: 'victor' }));
  }
}

function getParam(target: Function, context: ClassMethodDecoratorContext) {
  return function (this: any, ...args: any[]) {
    const origRoute = this.page.route;

    this.page.route = (url: string, handler: Handler) => {
      console.log(`My url = ${url}`);

      const wrappedHandler: Handler = (route) => {
        const originalFulfill = route.fulfill;

        route.fulfill = (data: object) => {
          const response = (data as any).name;
          console.log(`My response = ${response}`);
          return originalFulfill.call(route, data);
        };

        return handler(route);
      };

      return origRoute.call(this.page, url, wrappedHandler);
    };

    return target.apply(this, args);
  };
}

const intercept = new TestIntercept();
intercept.callRoute();