"use server";
import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function markMessageAsRead(messageId) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    return { error: "User ID is required" };
  }

  const { userId } = sessionUser;

  const message = await Message.findById(messageId);

  if (!message) throw new Error("Message not found");

  // Verify ownership
  if (message.recipient.toString() !== userId) {
    return { error: "You do not have permission to mark this message as read" };
  }

  // toggle the read status
  message.read = !message.read;

  await message.save();

  revalidatePath("/messages", "page");

  return message.read;
}
export default markMessageAsRead;
