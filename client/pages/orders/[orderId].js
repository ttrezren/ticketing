import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import { useRouter } from 'next/router';

const OrderShow = ({ order, currentUser }) => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id
    },

    onSuccess: (payment) => router.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order expired</div>
  }

  return <div>Time left to pay: {timeLeft} seconds.
  <StripeCheckout
      token={({ id }) => doRequest({ token: id })}
      stripeKey="pk_test_51I0bf8DRQCrVVxrtBWp6WTBPoUTDlofdScTgupp0ezqtUC8cE3hGLGOjgz2a10kC2JzfHlZek8INtcY6tg3Att6s00NazV1MCI"
      amount={order.ticket.price * 100}
      email={currentUser.email}
    />
    {errors}
  </div>;
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
}
export default OrderShow;