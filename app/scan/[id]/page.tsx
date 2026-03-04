import { delay } from "@/app/lib/delay";
import { ScanDetailContent } from "@/app/components/ScanDetailContent";

export default async function ScanDetailPage() {
  await delay(500);
  return <ScanDetailContent />;
}
