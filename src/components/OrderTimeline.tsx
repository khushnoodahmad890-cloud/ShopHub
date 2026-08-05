import { Check } from "lucide-react";

const STEPS = ["Pending", "Processing", "Shipped", "Delivered"];

interface Props {
  status: string;
}

export default function OrderTimeline({ status }: Props) {
  if (status === "Cancelled") {
    return (
      <div className="order-timeline cancelled">
        <div className="order-timeline-step complete">
          <div className="order-timeline-dot" />
          <span className="order-timeline-label">Order Cancelled</span>
        </div>
      </div>
    );
  }

  const currentIndex = STEPS.indexOf(status);

  return (
    <div className="order-timeline">
      {STEPS.map((step, index) => {
        const complete = index <= currentIndex;

        return (
          <div
            key={step}
            className={`order-timeline-step ${complete ? "complete" : ""}`}
          >
            <div className="order-timeline-line" />

            <div className="order-timeline-dot">
              {complete && <Check />}
            </div>

            <span className="order-timeline-label">{step}</span>
          </div>
        );
      })}
    </div>
  );
}
