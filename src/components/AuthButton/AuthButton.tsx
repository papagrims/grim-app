import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface AuthButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled?: boolean;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const AuthButton = ({
  onClick,
  isLoading,
  disabled,
  variant = "default",
  icon,
  children,
  className,
}: AuthButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || isLoading}
      variant={variant}
      className={`w-full ${className}`}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      ) : (
        icon && <span className="mr-2">{icon}</span>
      )}
      {children}
    </Button>
  );
};
