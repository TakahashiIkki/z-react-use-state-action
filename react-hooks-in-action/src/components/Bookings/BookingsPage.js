import { WeekPicker } from "./WeekPicker";

export function BookingsPage() {
  return (
    <main className="bookings-page">
      <p>Bookings!</p>
      <WeekPicker date={new Date()} />
    </main>
  );
}
