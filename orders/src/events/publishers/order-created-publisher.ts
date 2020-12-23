import { Publisher, OrderCreatedEvent, Subjects } from '@tikhub/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
