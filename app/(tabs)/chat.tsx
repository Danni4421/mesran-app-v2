import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function ChatPage() {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedText type="title">Chat Page</ThemedText>
      <ThemedText type="default">
        This is a placeholder for the chat functionality.
      </ThemedText>
    </ThemedView>
  );
}
