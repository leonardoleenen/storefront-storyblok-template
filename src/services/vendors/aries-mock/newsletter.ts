class AriesNewsLetter extends Newsletter {
  constructor(config: any) {
    super(config);
  }
  subscribe(email: string) {
    throw new Error("Method not implemented.");
  }
  unsubscribe(email: string) {
    throw new Error("Method not implemented.");
  }
}
