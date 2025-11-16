interface NotificationStrategy {
  send(message: string, recipient: string): void;
}

class EmailNotification implements NotificationStrategy {
  constructor(private readonly smtpHost: string) {}

  send(message: string, recipient: string): void {
    console.log(`[email:${this.smtpHost}] -> ${recipient}: ${message}`);
  }
}

class SmsNotification implements NotificationStrategy {
  constructor(private readonly provider: string) {}

  send(message: string, recipient: string): void {
    console.log(`[sms:${this.provider}] -> ${recipient}: ${message}`);
  }
}

class PushNotification implements NotificationStrategy {
  send(message: string, recipient: string): void {
    console.log(`[push] -> ${recipient}: ${message}`);
  }
}

class Notifier {
  constructor(private strategy: NotificationStrategy) {}

  updateStrategy(strategy: NotificationStrategy): void {
    this.strategy = strategy;
  }

  notify(message: string, recipient: string): void {
    this.strategy.send(message, recipient);
  }
}

const notifier = new Notifier(new EmailNotification("smtp.mail.local"));
notifier.notify("Pedido recebido com sucesso", "cliente@dominio.com");

notifier.updateStrategy(new SmsNotification("Twilio"));
notifier.notify("Pedido enviado para transporte", "+55-11-99999-9999");

notifier.updateStrategy(new PushNotification());
notifier.notify("Pedido entregue", "cliente@dominio.com");
