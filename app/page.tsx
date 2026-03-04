import { delay } from "@/app/lib/delay";
import { DashboardContent } from "@/app/components/DashboardContent";

export default async function DashboardPage() {
  await delay(500);
  return <DashboardContent />;
}
