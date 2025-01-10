import { SidebarDashboard } from "@/components/fragments/sidebar";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <SidebarDashboard>{children}</SidebarDashboard>;
};

export default DashboardLayout;
