import { useAuth } from "../auth/AuthContext";
import { removeActivity } from "../api/activities";

export default function ActivityList({ activities, syncActivities }) {
  const { token } = useAuth();
  const handleDelete = async (id) => {
    try {
      await removeActivity(token, id);
      syncActivities();
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.name}
          {token && (
            <button onClick={() => handleDelete(activity.id)}>Delete</button>
          )}
        </li>
      ))}
    </ul>
  );
}
