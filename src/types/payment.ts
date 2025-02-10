export interface OrderStatus {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatusStepProps {
  status: OrderStatus;
  isActive: boolean;
  isLast: boolean;
}

export interface StatusTimelineProps {
  currentStep: number;
  statuses: OrderStatus[];
}

export interface OrderNumberProps {
  orderNumber: string;
  onCopy: () => void;
  copied: boolean;
}
