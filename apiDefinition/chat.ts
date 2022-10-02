import { User } from "./apiDefinition/authentication";

interface Room {
  id: string;
  users: RoomUser[];
  messages: ChatMessage[];
}

interface RoomUser {
  available: boolean;
  data: User;
}

interface ChatMessage {
  id: string;
  userId: string;
  text: string;
  timestamp: number;
}

// Get old messages

interface GetRoomMessages {
  roomId: string;
  maxMemssages: number;
}

interface RoomMessagesList {}
