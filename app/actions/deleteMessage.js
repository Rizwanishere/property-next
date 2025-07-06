"use server";
import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteMessage(messageId) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.user) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const message = await Message.findById(messageId);

  if (!message) throw new Error("Message Not Found");

  // Verify ownership
  if (message.recipient.toString() !== userId) {
    return { error: "You do not have permission to delete this message" };
  }

  // Delete the message
  await message.deleteOne();

  // Revalidate the page after deletion
  revalidatePath("/messages", "page");
}

export default deleteMessage;
