class NewsLetterKlavyio extends Newsletter {
  constructor(config: any) {
    super(config);
  }
  subscribe(email: string): void {
    throw new Error("Method not implemented.");
  }
  unsubscribe(email: string): void {
    throw new Error("Method not implemented.");
  }
}
