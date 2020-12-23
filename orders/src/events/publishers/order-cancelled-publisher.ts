import { Subjects, Publisher, OrderCancelledEvent } from '@tikhub/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
