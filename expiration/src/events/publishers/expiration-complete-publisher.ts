import { Publisher, ExpirationCompleteEvent, Subjects } from '@tikhub/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
