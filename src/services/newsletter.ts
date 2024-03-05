abstract class Newsletter {
  protected config: any;
  constructor(config: any) {
    this.config = config;
  }
  abstract subscribe(email: string): void;
  abstract unsubscribe(email: string): void;
}

class NewsletterBuilder {
  private newsletter: Newsletter;

  constructor(_newsletter: Newsletter) {
    this.newsletter = _newsletter;
  }

  subscribe(email: string): NewsletterBuilder {
    this.newsletter.subscribe(email);
    return this;
  }

  unsubscribe(email: string): NewsletterBuilder {
    this.newsletter.unsubscribe(email);
    return this;
  }

  build(): Newsletter {
    return this.newsletter;
  }
}
