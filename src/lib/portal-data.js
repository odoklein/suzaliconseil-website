import { db } from "./db";
import { sdrContacts, meetings } from "../db/schema";
import { eq, and, gte, sql, desc } from "drizzle-orm";

export async function getPortalStats(clientId) {
  const [contactsResult] = await db
    .select({ count: sql`count(*)::int` })
    .from(sdrContacts)
    .where(eq(sdrContacts.clientId, clientId));

  const [contactedResult] = await db
    .select({ count: sql`count(*)::int` })
    .from(sdrContacts)
    .where(
      and(eq(sdrContacts.clientId, clientId), eq(sdrContacts.status, "contacted"))
    );

  const [meetingScheduledResult] = await db
    .select({ count: sql`count(*)::int` })
    .from(sdrContacts)
    .where(
      and(
        eq(sdrContacts.clientId, clientId),
        eq(sdrContacts.status, "meeting_scheduled")
      )
    );

  const [meetingsResult] = await db
    .select({ count: sql`count(*)::int` })
    .from(meetings)
    .where(eq(meetings.clientId, clientId));

  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const [meetingsThisWeekResult] = await db
    .select({ count: sql`count(*)::int` })
    .from(meetings)
    .where(
      and(
        eq(meetings.clientId, clientId),
        eq(meetings.status, "scheduled"),
        gte(meetings.scheduledAt, startOfWeek)
      )
    );

  return {
    totalContacts: contactsResult?.count ?? 0,
    contacted: contactedResult?.count ?? 0,
    meetingScheduled: meetingScheduledResult?.count ?? 0,
    totalMeetings: meetingsResult?.count ?? 0,
    meetingsThisWeek: meetingsThisWeekResult?.count ?? 0,
  };
}

export async function getPortalContacts(clientId, { status, search, limit = 50 } = {}) {
  const rows = await db
    .select()
    .from(sdrContacts)
    .where(eq(sdrContacts.clientId, clientId))
    .orderBy(desc(sdrContacts.contactedAt))
    .limit(limit);

  let list = rows;
  if (status) list = list.filter((c) => c.status === status);
  if (search) {
    const s = search.toLowerCase();
    list = list.filter(
      (c) =>
        c.fullName?.toLowerCase().includes(s) ||
        c.email?.toLowerCase().includes(s) ||
        (c.company && c.company.toLowerCase().includes(s))
    );
  }
  return list;
}

export async function getPortalMeetings(clientId, { status, limit = 100 } = {}) {
  const rows = await db
    .select()
    .from(meetings)
    .where(eq(meetings.clientId, clientId))
    .orderBy(meetings.scheduledAt)
    .limit(limit);
  if (status) return rows.filter((m) => m.status === status);
  return rows;
}
