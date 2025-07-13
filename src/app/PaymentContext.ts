import { PaymentProviderFactory } from "../core/PaymentProviderFactory";
import { PaymentProvider } from "../core/PaymentProvider";

export class PaymentContext {
  private factory: PaymentProviderFactory;

  constructor(factory: PaymentProviderFactory) {
    this.factory = factory;
  }

  processPayment(amount: number): void {
    const provider = this.factory.createPaymentProvider();
    provider.authorize(amount);

    const transactionId = Math.random().toString(36).substring(2, 8);
    provider.capture(transactionId);
    provider.refund(transactionId);
  }
}
