import { Publisher, Subjects, TicketCreatedEvent } from '@tikhub/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
