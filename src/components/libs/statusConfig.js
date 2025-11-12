export function getStatusConfig(status) {
  switch (status) {
    case "upcoming":
      return { label: "Upcoming", bgcolor: "#00AEA81A", color: "#00AEA8" };
    case "completed":
      return { label: "Completed", bgcolor: "#DCFCE7", color: "#008236" };
    case "cancelled":
      return { label: "Cancelled", bgcolor: "#F3F4F6", color: "#364153" };
    default:
      return { label: status, bgcolor: "#f3f4f6", color: "#374151" };
  }
}
