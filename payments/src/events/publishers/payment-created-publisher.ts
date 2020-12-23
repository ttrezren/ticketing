import { Subjects, Publisher, PaymentCreatedEvent } from '@tikhub/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
