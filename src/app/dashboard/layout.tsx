import { SidebarAdmin } from "@/components/fragments/Sidebar";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <SidebarAdmin>{children}</SidebarAdmin>;
};

export default DashboardLayout;
