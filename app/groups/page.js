export const dynamic = 'force-dynamic';

import GroupsClient from "./GroupsClient";
import { getTeamsSheetData } from "@/app/actions/teams-google-sheets.action";

export default async function GroupsPage() {
  // Fetch data on the server
  const response = await getTeamsSheetData();
  const teamsData = response.data.map((item) => ({
    team: item[0],
  }));

  return <GroupsClient teamsData={teamsData} />;
}