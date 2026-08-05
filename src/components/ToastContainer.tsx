import { CheckCircle2, XCircle, Info, X } from "lucide-react";
import { useToast } from "../context/ToastContext";

const ICONS = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

export default function ToastContainer() {
  const { toasts, dismissToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => {
        const Icon = ICONS[toast.type];

        return (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <Icon size={20} />

            <p>{toast.message}</p>

            <button
              onClick={() => dismissToast(toast.id)}
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
